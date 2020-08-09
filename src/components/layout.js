import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const MainContainer = styled.div`
  max-width: 100vw;
`

const MainContent = styled.main`
  padding-top: 10vh;
  max-width: 100vw;
`
const Footer = styled.footer`
  background-color: #171a1c;
  height: 10vh;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MainContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContent>{children}</MainContent>
      <Footer>
        © {new Date().getFullYear()} Katarzyna Bartoszewicz copyright
      </Footer>
    </MainContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
