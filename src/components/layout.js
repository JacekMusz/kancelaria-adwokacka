import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AppBar from "./appBar"
import "./layout.css"
import styled from "styled-components"
import { FaPhone } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const MainContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

const MainContent = styled.main`
  padding-top: 10vh;
  max-width: 100vw;
  background-color: rgb(240, 240, 240);
  min-height: 100vh;
`
const Footer = styled.footer`
  background-color: #171a1c;
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

  const StyledAdrress = styled.address`
    display: flex;
    flex-direction: column;
    width: 48%;
    color: white;
    justify-content: center;
    align-content: center;
    .adrress-icon {
      color: white;
      margin-right: 10px;
    }
    h5 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      color: #ddd;
      line-height: 16px;
    }

    @media (min-width: 360px) {
      width: 45%;
    }

    @media (min-width: 410px) {
      h5 {
        font-size: 15px;
      }
      p {
        font-size: 12px;
        line-height: 15px;
      }
    }
    @media (min-width: 767px) {
      width: 40%;
      h5 {
        font-size: 16px;
      }
      p {
        font-size: 13px;
        line-height: 16px;
      }
    }
    @media (min-width: 1199px) {
      h5 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        line-height: 18px;
      }
    }
    @media (min-width: 1599px) {
      h5 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
        line-height: 19px;
      }
    }
  `

  const CopyrightWrapper = styled.div`
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 8px;
  `
  const StyledAdrressContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
  `

  return (
    <MainContainer>
      <AppBar siteTitle={data.site.siteMetadata.title} />
      <MainContent>{children}</MainContent>
      <Footer>
        <StyledAdrressContainer>
          <StyledAdrress>
            <h5>Dane kontaktowe</h5>
            <br />
            <p>
              Adwokat Katarzyna Bartoszewicz Kancelaria Adwokacka
              <br />
              ul. 1 Maja 54, 96-300 Żyrardów
              <br />
              96-300 Żyrardów
              <br />
              NIP 8381761414
            </p>
          </StyledAdrress>
          <StyledAdrress>
            <h5>Kontakt</h5>
            <br />
            <p>
              <FaPhone className="adrress-icon" />
              +48 533 270 008
              <br />
              <br />
              <FiMail className="adrress-icon" />
              bartoszewicz@zyrardow-adwokat.pl
            </p>
          </StyledAdrress>
        </StyledAdrressContainer>
        <CopyrightWrapper>
          {/* &copy; Copyright {d.getFullYear()}, Katarzyna Bartoszewicz */}
        </CopyrightWrapper>
      </Footer>
    </MainContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
