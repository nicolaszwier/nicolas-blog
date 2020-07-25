import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile";
import LastPosts from "../components/LastPosts";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
    <LastPosts />
  </Layout>
)

export default IndexPage
