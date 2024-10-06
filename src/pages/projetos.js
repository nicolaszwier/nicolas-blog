import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const IndexPage = () => (
  <Layout lang="pt-br">
    <Seo
      title="nicolasz.dev | Projetos que ja trabalhei"
      description=""
      image="/assets/img/cover.png"
      lang="pt-br"
    />
    <Projects lang="pt-br"/>
  </Layout>
)

export default IndexPage
