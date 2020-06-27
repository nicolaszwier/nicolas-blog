import React from "react"
import GlobalStyles from "../../styles/global";
import PropTypes from "prop-types"
import TopAppBar from "../TopAppBar"

import styled from "styled-components";

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
const LayoutMain = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%
`

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <GlobalStyles />
      <TopAppBar></TopAppBar>
      <LayoutMain>
        {children}
      </LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
