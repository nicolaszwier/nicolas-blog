import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile";
import LastPosts from "../components/LastPosts";

const IndexPage = () => (
  <Layout lang="pt-br">
    <SEO
      title="Home"
      description="Nicolas Zwierzykowski - Frontend developer | Blog pessoal sobre desenvolvimento web, JS, React, CSS e outras tecnologias."
      image="/assets/img/cover.png"
    />
    <Profile />
    <LastPosts />
  </Layout>
)

export default IndexPage
