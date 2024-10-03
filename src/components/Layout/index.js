import React from "react"
import GlobalStyles from "../../styles/global";
import PropTypes from "prop-types"
import TopAppBar from "../TopAppBar"
import Footer from "../Footer"

import styled from "styled-components";

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  align-items: center;
`
const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  flex-grow: 1;
  width: 100%;
  max-width: 1280px;
`

const Layout = ({ children, lang = 'pt-br' }) => (
  <LayoutWrapper>
    <GlobalStyles />
    <TopAppBar lang={lang} />
    <LayoutMain>
      {children}
    </LayoutMain>
    <Footer />
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
