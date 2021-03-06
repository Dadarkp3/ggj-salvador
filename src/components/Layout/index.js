/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

//Styles
import { LayoutWrapper, MainLayout } from "./styles"
import GlobalStyles from "../../styles/global"

//Componentes
import Navbar from "../Navbar"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
