import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100vh;
  top: 0;
  padding: 0 5% 10% 5%;
  background-color: #171a1c;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  display: ${({ openVerticalMenu }) => (openVerticalMenu ? "flex" : "none")};
  @media (min-width: 410px) and (position: portrait) {
    height: 100vh;
  }
`
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  width: 90%;
`
const StyledLink = styled(Link)`
  color: #cdbba5;
  text-decoration: none;
  font-size: 25px;
  line-height: 40px;
  width: 100%;
  text-align: center;

  @media (min-width: 359px) {
    font-size: 26;
    line-height: 45px;
  }
  @media (min-width: 410px) and (position: portrait) {
    font-size: 28px;
    line-height: 48px;
  }
  @media (min-width: 767px) {
    font-size: 28px;
    line-height: 50px;
  }
`

const NavigationMobile = props => {
  const handleScroll = () => {
    setTimeout(() => {
      scrollTo("#news")
    }, 200)

    window.onload = scrollTo("#news")
  }
  return (
    <NavigationWrapper openVerticalMenu={props.openVerticalMenu}>
      <LinkWrapper onClick={() => props.setOpenVerticalMenu(false)}>
        <StyledLink to="/">O Kancelarii</StyledLink>
      </LinkWrapper>
      <LinkWrapper onClick={() => props.setOpenVerticalMenu(false)}>
        <StyledLink to="/" onClick={() => handleScroll()}>
          Aktualności
        </StyledLink>
      </LinkWrapper>
      <LinkWrapper onClick={() => props.setOpenVerticalMenu(false)}>
        <StyledLink to="/dzialyprawa">Działy prawa</StyledLink>
      </LinkWrapper>
      <LinkWrapper onClick={() => props.setOpenVerticalMenu(false)}>
        <StyledLink to="/klienci">Klienci</StyledLink>
      </LinkWrapper>
      <LinkWrapper onClick={() => props.setOpenVerticalMenu(false)}>
        <StyledLink to="/mediacje">Mediacje</StyledLink>
      </LinkWrapper>
      <LinkWrapper onClick={() => props.setOpenVerticalMenu(false)}>
        <StyledLink to="/kontakt">Kontakt</StyledLink>
      </LinkWrapper>
    </NavigationWrapper>
  )
}

export default NavigationMobile
