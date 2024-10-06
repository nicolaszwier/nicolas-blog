import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const IndexPage = () => (
  <Layout lang="en">
    <Seo
      title="nicolasz.dev | Projects I have worked"
      description="This page highlights a selection of my work, demonstrating my skills in building scalable web applications and delivering efficient solutions. Below are some of the key projects I've contributed to."
      image="/assets/img/cover.png"
      lang="en"
    />
    <Projects lang="en"/>
  </Layout>
)

export default IndexPage
