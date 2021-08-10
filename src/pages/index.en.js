import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Profile from "../components/Profile";
import LastPosts from "../components/LastPosts/index.en";

const IndexPage = () => (
  <Layout lang="en">
    <Seo
      lang="en"
      title="Home"
      description="Nicolas Zwierzykowski - Software engineer | Personal website and blog"
      image="/assets/img/cover.png"
    />
    <Profile lang="en" />
    <LastPosts />
  </Layout>
)

export default IndexPage
