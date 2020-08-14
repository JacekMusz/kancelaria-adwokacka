import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { navigate } from "gatsby"

const NavigationWrapper = styled.nav`
  width: 70%;
  height: 100%;
  padding-left: 30%;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  display: none;

  @media (min-width: 767px) {
    display: flex;
    font-size: 14px;
  }
  @media (min-width: 1199px) {
    font-size: 16px;
  }
`
const LinkWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transform: skew(-15deg);
  transition: 0.3s;
  /* &:hover {
    background-color: black;
  } */
`
const StyledLink = styled(Link)`
  color: #cdbba5;
  text-decoration: none;
  transform: skew(15deg);
  &:after {
    display: block;
    content: " ";
    margin-top: 3px;
    height: 2px;
    width: 100%;
    background-color: #cdbba5;
    transition: 0.3s;
    transform: scaleX(0);
  }
  &:hover {
    &:after {
      width: 100%;
      transform: scaleX(1);
    }
  }
`

const NavigationHorizontal = () => {
  const handleScroll = () => {
    setTimeout(() => {
      scrollTo("#news")
    }, 200)

    window.onload = scrollTo("#news")
  }
  return (
    <NavigationWrapper>
      <LinkWrapper>
        {" "}
        <StyledLink to="/">O koncelarii</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/" onClick={() => handleScroll()}>
          Aktualności
        </StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        {" "}
        <StyledLink to="/dzialyprawa">Działy prawa</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        {" "}
        <StyledLink to="/klienci">Klienci</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/mediacje">Mediacje</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/kontakt">Kontakt</StyledLink>
      </LinkWrapper>
    </NavigationWrapper>
  )
}

export default NavigationHorizontal
