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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainContent = styled.main`
  max-width: 100vw;
  background-color: rgb(240, 240, 240);
  margin-top: 50px;
  @media (min-width: 359px) and (orientation: portrait) {
    margin-top: 60px;
  }
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
    width: 90%;
    color: white;
    margin: 0 5% 5% 5%;
    justify-content: "flex-start";
    align-content: center;
    font-size: 16px;
    line-height: 20px;
    .adrress-icon {
      color: white;
      margin-right: 10px;
    }
    h5 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      color: #ddd;
      line-height: 16px;
      letter-spacing: 1.5px;
    }

    @media (min-width: 360px) {
      h5 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
        line-height: 18px;
      }
    }

    @media (min-width: 410px) {
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
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    @media (min-width: 767px) {
      flex-direction: row;
    }
  `

  return (
    <MainContainer>
      <AppBar siteTitle={data.site.siteMetadata.title} />
      <MainContent>{children}</MainContent>
      <Footer>
        <StyledAdrressContainer>
          <StyledAdrress>
            <h5>Adres Kancelarii</h5>
            <p>
              Adwokat Katarzyna Bartoszewicz
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
            <p>
              <FaPhone className="adrress-icon" />
              +48 533 270 008
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
