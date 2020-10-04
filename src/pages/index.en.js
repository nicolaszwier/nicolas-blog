import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile";
import LastPosts from "../components/LastPosts/index.en";

const IndexPage = () => (
  <Layout lang="en">
    <SEO lang="en" title="Home" />
    <Profile lang="en" />
    <LastPosts />
  </Layout>
)

export default IndexPage
