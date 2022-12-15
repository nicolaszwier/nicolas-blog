---
title: Avoiding memory leaks when using subscriptions in Angular
description: Not closing subscriptions in a proper way in Angular can cause
  memory leaks, in this article learn how to avoid it.
date: 2022-12-14 10:42:21
image: /assets/img/angular-and-rxjs.png
category: angular
categoryBackground: "#ff1744"
language: en
---
### Introduction

A few weeks ago a colleague of my team brought up this point that the way we use to unsubscribe from the RxJS Observables could not be the better way and possibly the subscriptions remain open after the component is destroyed causing memory leaks.

We’ve decided to take further investigation on this, and after lots of research and tests on our application, we could figure out that using the `takeWhile()` operator was not the best approach for us to unsubscribe from Observables, but `takeUntil()` would be a better option instead. I’m going to explain why.

### The problem

Let me start with this question, is it really necessary to unsubscribe in the first place? Yes. Not unsubscribing from Observables can let them active for more time than you expect, the component will get destroyed, but the subscriptions will remain active. However, if you navigate to a different route, the components from the previous route will be destroyed, then if go back to that route again, the components will be recreated and with them, new subscriptions.

As we can see, avoiding unsubscribing from observables can cause memory leaks in the application. If you are working on a small application, you probably won’t notice any performance issues caused by this, however as the project grows, it can become a real problem.

In our application, we were using `takeWhile()` to unsubscribe from the observables. Let’s see what the documentation says about this operator:

> `takeWhile` subscribes and begins mirroring the source Observable. Each value emitted on the source is given to the `predicate` function which returns a boolean, representing a condition to be satisfied by the source values. The output Observable emits the source values until such time as the `predicate` returns false, at which point `takeWhile` stops mirroring the source Observable and completes the output Observable.

As the documentation says, we have to provide a value that returns a boolean, when the result is true, it stops the subscription. Here is an example using `takeWhile()`:

```tsx
private fees;

ngOnInit(): void {
  this.feeService.getFees()
    .pipe(takeWhile((fee => fee.price < 10))
    .subscribe(fees => {
        this.fees = fees;
	});
}
```

In this example above, the subscription will be open while the fee price is smaller than 10, as soon as the source emits a value that is equal to or greater than 10, the subscription is closed.

Now let’s see an example of using it to unsubscribe when the component will be destroyed:

```tsx
private alive = true;

ngOnInit(): void {
  this.feeService.getFees()
    .pipe(takeWhile(() => this.alive))
    .subscribe(fees => {
			 
	});
}

ngOnDestroy(): void {
  this.alive = false;
}
```

Unlike the first example, in this one, we’re using a boolean variable to control when the subscription should stop, and we’re changing the value of this variable on the `ngOnDestroy` event, you might think that immediately when the variable changes the value to false the subscription will be closed, but that’s not how it works, instead, it will unsubscribe only as soon as the next value is produced by the source observable. However, maybe there will be no more values coming from the source, which means the subscription will not be closed, then we have a memory leak.

Based on this, we’ve decided to stop using `takeWhile()` to close subscriptions in our app.

### Solution

We were massively using `takeWhile()` to control subscriptions all over the application, in almost every existent component, so any solution for this problem would require a lot of effort.

After some research in forums and the RxJS documentation itself, I learned about this operator called `takeUntil()`, which works in a very similar way and has a similar syntax compared to `takeWhile()`, so replacing it in all of our components wouldn’t be so hard, as it is not changing anything in the structure of our components.

Let’s see how the RxJS documentation describes the takeUntil operator:

> `takeUntil` subscribes and begins mirroring the source Observable. It also monitors a second Observable, `notifier` that you provide. If the `notifier` emits a value, the output Observable stops mirroring the source Observable and completes. If the `notifier` doesn't emit any value and completes then `takeUntil` will pass all values.

Unlike the `takeWhile()` operator, `takeUntil()` doesn’t accept a function or a boolean value as the param, but an observable. This means that the subscription will stay active until this new observable emits a value. That’s it, pretty simple.

Here’s how we are using this operator in our subscriptions now:

```tsx
private destroy$ = new Subject();

ngOnInit(): void {
  this.feeService.getFees()
    .pipe(takeUntil(this.destroy$))
    .subscribe(fees => {
			 
	});
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
```

In this example, when the component will be destroyed, our secondary notifier emits a value and then is completed. Doing this, the takeUntil operator receives this notification and closes the subscription, avoiding any subscriptions remaining open after the component is destroyed.

There’s only one concern you have to pay attention to when using this approach if you are going to use more than one operator inside the pipe, these operators have to be placed in a specific sequence, otherwise, the subscription will not be closed.

For instance, if we do not place `takeUntil()` as the last operator, the subscription will be still subscribed to the `switchMap()` operator.

Let’s see the example below:

```tsx
private destroy$ = new Subject();

ngOnInit(): void {
  this.feeService.getFees()
    .pipe(
      takeUntil(this.destroy$)
      switchMap(() => this.someOtherObservable()),
    )
    .subscribe(fees => {
			 
	});
}
```

When the `destroy$` subject emits a value, the observable returned by `takeUntil()` operator is completed. However, in this case, the subscription will still be open because of the Observable passed to `switchMap()`.

The subscription to `getFees()` here would remain subscribed until all the observables passed to `switchMap()` complete. Then, unless `someOtherObservable()` completes before the `destroy$` notifier is emmited, the subscription in the `someOtherObservable()` would leak.

To avoid this problem, we can place operators in this sequence:

```tsx
private destroy$ = new Subject();

ngOnInit(): void {
  this.feeService.getFees()
    .pipe(
      switchMap(() => this.someOtherObservable()),
      takeUntil(this.destroy$)
    )
    .subscribe(fees => {
			 
	});
}
```

Doing this way, the `getFees()` subscriber will be automatically unsubscribed when the `destroy$` emits a value. And the `takeUntil()` will unsubscribe from the observable returned by `switchMap()`, which, will end all subscriptions.