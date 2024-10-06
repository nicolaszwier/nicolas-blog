import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const IndexPage = () => (
  <Layout lang="en">
    <Seo
      title="nicolasz.dev | Projects I have worked"
      description="a"
      image="/assets/img/cover.png"
      lang="en"
    />
    <Projects lang="en"/>
  </Layout>
)

export default IndexPage
