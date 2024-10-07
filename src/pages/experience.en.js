import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout";
import About from "../components/About";
import Experience from "../components/Experience";

const IndexPage = () => (
  <Layout lang="en">
    <Seo
      title="nicolasz.dev | Experience"
      description="I am a Software Engineer with over 6 years of experience in 
        web development, specializing in building scalable, high-performance applications that 
        deliver exceptional user experiences. Throughout my career, I have contributed to a wide range of projects 
        across various industries, from startups to established enterprises."
      image="/assets/img/cover.png"
      lang="pt-br"
    />
    <Experience lang="en"/>
  </Layout>
)

export default IndexPage
