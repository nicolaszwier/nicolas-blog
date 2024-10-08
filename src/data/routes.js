export const urls = {
  en: {
    home: {
        label: 'home',
        url: '/en'
    },
    blog: {
        label: 'blog',
        url: '/en/blog'
    },
    experience: {
        label: 'experience',
        url: '/en/experience'
    },
    projects: {
        label: 'projects',
        url: '/en/projects'
    },
    aboutMe: {
        label: 'about me',
        url: '/en/about-me'
    }

  },
  'pt-br': {
    home: {
      label: 'home',
      url: '/'
    },
    blog: {
      label: 'blog',
      url: '/blog'
    },
    experience: {
        label: 'experiência',
        url: '/experiencia'
    },
    projects: {
        label: 'projetos',
        url: '/projetos'
    },
    aboutMe: {
        label: 'sobre mim',
        url: '/sobre-mim'
    },
    
  }
}

// quando colocar o language toggle no menu. 
// criar um map para relacionar os posts em ingles com os em portuges, ex:

// new Map() or new Set() -> verificar qual dos dois funcionaria melhor pois precisa ser "bidirecional", 
// se estiver em pt-br procura pela chave em pt-br, se estiver em en procura em en

// const map = {
//     'my-first-month-as-a-software-engineer-in-canada': 'meu-primeiro-mês-como-engenheiro-de-software-no-canadá'
// }

// ai quando estiver no post e clicar para trocar de idioma, data pra consultar qual é a pagina atual
// e redirecionar para a pagina correta.
// se o post nao tem versao em outro idioma ai redireciona para a lista de posts ou para a pagina inicial
