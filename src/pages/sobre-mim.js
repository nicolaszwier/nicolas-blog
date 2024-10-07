import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout";
import About from "../components/About";

const IndexPage = () => (
  <Layout lang="pt-br">
    <Seo
      title="nicolasz.dev | Sobre mim"
      description="Sou um Engenheiro de Software com mais de 6 anos de experiência em 
        desenvolvimento web, especializado na construção de aplicações escaláveis e de alto desempenho que 
        proporcionam experiências excepcionais aos usuários. Ao longo da minha carreira, contribuí para uma ampla gama de projetos 
        em diversos setores, desde startups até empresas consolidadas"
      image="/assets/img/cover.png"
      lang="pt-br"
    />
    <About lang="pt-br"/>
  </Layout>
)

export default IndexPage
