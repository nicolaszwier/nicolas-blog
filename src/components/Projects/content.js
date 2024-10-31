export const ptBr = {
    title: `Projetos`,
    subtitle: `Bem-vindo ao meu portfólio! Esta página destaca uma seleção do meu trabalho, demonstrando minhas habilidades em construir aplicações web escaláveis e entregar soluções eficientes. Abaixo estão alguns dos principais projetos nos quais contribuí.`
};

export const en = {
    title: `Projects`,
    subtitle: `Welcome to my portfolio! This page highlights a selection of my work, demonstrating my skills in building scalable 
    web applications and delivering efficient solutions. Below are some of the key projects I've contributed to.`,
};

export const projects = [
    {
        en: {
            title: 'iOS App: WalletWise - Personal Finances',
            description: `
                <p>WalletWise is an iOS personal finances tracker app that I developed using SwiftUI, it was designed to help users manage budgets, track expenses, and achieve their financial goals. 
                The app was built using the SwiftUI framework, and for now it’s exclusively available for iOS users on the AppStore. </p>
                <h2>App features</h2>
                <ul>
                    <li><b>Create Custom Plannings:</b> Easily create multiple plannings tailored to your needs.</li>
                    <li><b>Add Transactions with Ease:</b> Quickly log your expenses and incomes in a few taps.</li>
                    <li><b>Track Your Transactions:</b> View your transactions in a clear, weekly timeline with balance updates.
                    <li><b>Planning Dashboard:</b> Get an overview of your balance and stay on top of upcoming payments.
                </ul>
                <p>You can check more information about this app on it’s landing page available here: https://walletwise.cash/</p>   
            `
        },
        'pt-br': {
            title: 'iOS App: WalletWise - Finanças pessoais',
            description: `
                <p>WalletWise é um aplicativo de controle de finanças pessoais para iOS que eu desenvolvi usando SwiftUI. Ele foi projetado para ajudar os usuários a gerenciar orçamentos, rastrear despesas e alcançar suas metas financeiras.
                O aplicativo foi construído utilizando o framework SwiftUI e, por enquanto, está disponível exclusivamente para usuários iOS na AppStore.</p>
                <h2>Funcionalidades do App</h2>
                <ul>
                    <li><b>Criar Planejamentos Personalizados:</b> Crie facilmente vários planejamentos adaptados às suas necessidades.</li>
                    <li><b>Adicionar Transações com Facilidade:</b> Registre rapidamente suas despesas e receitas em alguns toques.</li>
                    <li><b>Acompanhar Suas Transações:</b> Veja suas transações em uma linha do tempo semanal clara, com atualizações de saldo.</li>
                    <li><b>Painel de Planejamento:</b> Obtenha uma visão geral do seu saldo e fique por dentro dos próximos pagamentos.</li>
                </ul>
                <p>Você pode verificar mais informações sobre este aplicativo na sua página de apresentação disponível aqui: https://walletwise.cash</p>
            `,
        },
        type: 'mobile',
        githubRepoUrl: 'https://github.com/nicolaszwier/WalletWise',
        liveDemoUrl: '',
        appStoreLink: 'https://apps.apple.com/ca/app/walletwise-personal-finances/id6578462190',
        stack: ['iOs', 'SwiftUI']
    },
    {
        en: {
            title: 'nicolasz.dev - My personal website/blog',
            description: `
                <p><strong>nicolasz.dev</strong> is my personal website and blog, which I designed and developed entirely from scratch. It serves as a hub where visitors can learn more about me, explore my projects, and easily connect with me through the provided contact links.</p>
                <p>Additionally, by visiting <strong>nicolasz.dev/en/blog</strong>, you can access a variety of posts covering topics related to career development and technical insights.</p>
                <p>This site was built using <strong>ReactJS</strong> along with the <strong>GatsbyJS</strong> framework for server-side rendering, while the user interface is styled with <strong>Styled Components</strong>.</p>
            `,
        },
        'pt-br': {
            title: 'nicolasz.dev - Meu site pessoal/blog',
            description: `
                <p><strong>nicolasz.dev</strong> é o meu site pessoal e blog, que eu projetei e desenvolvi completamente do zero. Ele serve como um hub onde os visitantes podem saber mais sobre mim, explorar meus projetos e se conectar facilmente comigo através dos links de contato fornecidos.</p>
                <p>Além disso, ao visitar <strong>nicolasz.dev/blog</strong>, você pode acessar uma variedade de posts que abordam temas relacionados ao desenvolvimento de carreira e insights técnicos.</p>
                <p>Este site foi construído utilizando <strong>ReactJS</strong> junto com o framework <strong>GatsbyJS</strong> para renderização do lado do servidor, enquanto a interface do usuário é estilizada com <strong>Styled Components</strong>.</p>
            `,
        },
        type: 'frontend',
        githubRepoUrl: 'https://github.com/nicolaszwier/nicolas-blog',
        liveDemoUrl: 'https://nicolasz.dev/en',
        appStoreLink: null,
        stack: ['ReactJS', 'GatsbyJS', 'Javascript', 'Styled Components']
    },
    {
        en: {
            title: 'WalletWise NestJS API',
            description: `
                <p><strong>WalletWiseAPI</strong> is a robust API developed using <strong>NestJS</strong> and <strong>TypeScript</strong> to handle financial operations with high efficiency and scalability. It leverages <strong>MongoDB</strong> as its database, utilizing <strong>Prisma ORM</strong> to provide seamless interaction between the application and the database, ensuring smooth data management and optimized performance.</p>
                <p>This API powers the <strong>WalletWise iOS App</strong>, serving as the backbone for all its financial functionalities, including transaction management, user account operations, and budget tracking. By employing <strong>NestJS</strong>, the API benefits from a modular architecture, making it highly maintainable and scalable for future enhancements.</p>
                <p>With <strong>Prisma ORM</strong>, WalletWiseAPI integrates effortlessly with MongoDB, allowing for simplified database queries and data modeling, while maintaining strong type safety provided by TypeScript. This setup ensures that WalletWiseAPI delivers reliable and secure financial services to its users.</p>
            `,
        },
        'pt-br': {
            title: 'WalletWise NestJS API',
            description: `
                <p><strong>WalletWiseAPI</strong> é uma API robusta desenvolvida usando <strong>NestJS</strong> e <strong>TypeScript</strong> para lidar com operações financeiras com alta eficiência e escalabilidade. Ela utiliza <strong>MongoDB</strong> como banco de dados, e <strong>Prisma ORM</strong> para fornecer uma interação perfeita entre a aplicação e o banco de dados, garantindo uma gestão de dados fluida e desempenho otimizado.</p>
                <p>Essa API é a base do <strong>WalletWise iOS App</strong>, servindo como o núcleo para todas as suas funcionalidades financeiras, incluindo gestão de transações, operações de contas de usuário e controle de orçamento. Ao empregar <strong>NestJS</strong>, a API se beneficia de uma arquitetura modular, tornando-a altamente sustentável e escalável para futuras melhorias.</p>
                <p>Com o <strong>Prisma ORM</strong>, a WalletWiseAPI se integra facilmente ao MongoDB, permitindo consultas simplificadas e modelagem de dados, enquanto mantém a forte segurança de tipos proporcionada pelo TypeScript. Essa configuração garante que a WalletWiseAPI ofereça serviços financeiros confiáveis e seguros para seus usuários.</p>
            `,
        },
        type: 'backend',
        githubRepoUrl: 'https://github.com/nicolaszwier/wallet-wise-api',
        liveDemoUrl: 'https://ww-prod.up.railway.app/api/users/status',
        appStoreLink: null,
        stack: ['NestJS', 'Typescript', 'MongoDB', 'Prisma ORM', 'JWT']
    },
    {
        en: {
            title: 'WalletWise Landing page - ReactJS',
            description: `
                <p>This project serves as the <strong>landing page</strong> for the <strong>WalletWise iOS app</strong>, providing a comprehensive overview of the app's features, benefits, and functionality. The page includes detailed information about the app, its core features, a <strong>FAQs section</strong> to address common user questions, a <strong>contact form</strong>, and a direct link to download the app from the <strong>App Store</strong>.</p>
                <p>The landing page was built using <strong>ReactJS</strong> and <strong>NextJS</strong>, ensuring a fast and responsive user experience with server-side rendering capabilities for improved SEO and performance. The <strong>contact form</strong> is fully integrated with the <strong>WalletWiseAPI</strong>, enabling seamless handling of user inquiries by automatically saving contact requests to the database.</p>
                <p>In addition to providing essential information, the page was designed with a clean, intuitive layout to maximize user engagement and make navigation effortless. The integration of <strong>NextJS</strong> also ensures the page is easily scalable for future updates, while maintaining optimal load times and performance across all devices.</p>
            `,
        },
        'pt-br': {
            title: 'WalletWise Landing page - ReactJS',
            description: `
                <p>Este projeto serve como a <strong>página de destino</strong> para o <strong>WalletWise iOS app</strong>, fornecendo uma visão abrangente dos recursos, benefícios e funcionalidades do aplicativo. A página inclui informações detalhadas sobre o app, seus principais recursos, uma <strong>seção de FAQs</strong> para responder a perguntas comuns dos usuários, um <strong>formulário de contato</strong> e um link direto para baixar o app na <strong>App Store</strong>.</p>
                <p>A página de destino foi desenvolvida usando <strong>ReactJS</strong> e <strong>NextJS</strong>, garantindo uma experiência rápida e responsiva, com capacidades de renderização do lado do servidor para melhorar o SEO e o desempenho. O <strong>formulário de contato</strong> está totalmente integrado à <strong>WalletWiseAPI</strong>, permitindo o gerenciamento eficiente de solicitações dos usuários, salvando automaticamente os pedidos de contato no banco de dados.</p>
                <p>Além de fornecer informações essenciais, a página foi projetada com um layout limpo e intuitivo para maximizar o engajamento dos usuários e facilitar a navegação. A integração com o <strong>NextJS</strong> também garante que a página seja facilmente escalável para futuras atualizações, mantendo tempos de carregamento ótimos e desempenho em todos os dispositivos.</p>
            `,
        },
        type: 'frontend',
        githubRepoUrl: 'https://github.com/nicolaszwier/wallet-wise-landing',
        liveDemoUrl: 'https://walletwise.cash',
        appStoreLink: null,
        stack: ['ReactJS', 'NextJS', 'Tailwind CSS']
    },
    {
        en: {
            title: 'Tic-Tac-Toe Game - ReactJS',
            description: `
                <p>This is a simple, interactive Tic-Tac-Toe game built with <strong>React</strong> and <strong>TypeScript</strong>, using <strong>Vite</strong> for fast and efficient development. The game includes multiple grid sizes, reset functionality, and the ability to change game modes mid-game. This project was developed for study purposes with the main goal of implementing an efficient algorithm to determine the winner of the match, regardless of the grid size.</p>
                <h2>Features</h2>
                <ul>
                <li><strong>Dynamic Grid Sizes</strong>: Choose between 3x3, 4x4, or 5x5 game modes.</li>
                <li><strong>Game Reset</strong>: Reset the current game at any time to start over.</li>
                <li><strong>Change Game Mode</strong>: Switch game modes even in the middle of a game.</li>
                </ul>
                <h2>Performance</h2>
                <ul>
                <li><strong>Time Complexity</strong>: The time complexity is O(n) per move, where n is the size of the matrix (i.e., gameMode: 3x3, 4x4, or 5x5).</li>
                <li><strong>Space Complexity</strong>: O(n²) for storing the matrix.</li>
                </ul>
            `,
        },
        'pt-br': {
            title: 'Jogo da velha - ReactJS',
            description: `
                <p>Este é um jogo da velha simples e interativo, desenvolvido com <strong>React</strong> e <strong>TypeScript</strong>, utilizando <strong>Vite</strong> para um desenvolvimento rápido e eficiente. O jogo inclui vários tamanhos de grade, funcionalidade de reinício e a capacidade de mudar os modos de jogo no meio da partida. Este projeto foi desenvolvido para fins de estudo, com o objetivo principal de implementar um algoritmo eficiente para determinar o vencedor da partida, independentemente do tamanho da grade.</p>
                <h2>Funcionalidades</h2>
                <ul>
                <li><strong>Tamanhos de Grade Dinâmicos</strong>: Escolha entre os modos de jogo 3x3, 4x4 ou 5x5.</li>
                <li><strong>Reiniciar Jogo</strong>: Reinicie o jogo atual a qualquer momento para começar de novo.</li>
                <li><strong>Mudar Modo de Jogo</strong>: Altere o modo de jogo mesmo no meio de uma partida.</li>
                </ul>
                <h2>Desempenho</h2>
                <ul>
                <li><strong>Complexidade de Tempo</strong>: A complexidade de tempo é O(n) por jogada, onde n é o tamanho da matriz (ou seja, modo de jogo: 3x3, 4x4 ou 5x5).</li>
                <li><strong>Complexidade de Espaço</strong>: O(n²) para armazenar a matriz.</li>
                </ul>
            `,
        },
        type: 'frontend',
        githubRepoUrl: 'https://github.com/nicolaszwier/tic-tac-toe',
        liveDemoUrl: 'https://tic-tac-toe-nz.vercel.app/',
        appStoreLink: null,
        stack: ['ReactJS', 'Typescript', 'Vite']
    }
]