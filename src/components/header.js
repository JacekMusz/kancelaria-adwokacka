import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import NavigationHorizontal from "./Navigation/navigationHorizontal"

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  background-color: #171a1c;
  margin: 0;
  border: none;
  box-shadow: 0px 0px 1px #b79f82;
  color: #cdbba5;
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  h4 {
    font-size: 20px;
  }
  @media (min-width: 359px) {
    h4 {
      font-size: 22px;
    }
  }
  @media (min-width: 410px) {
    h4 {
      font-size: 25px;
    }
  }
  @media (min-width: 767px) {
    h4 {
      font-size: 30px;
    }
  }
  @media (min-width: 1199px) {
    h4 {
      font-size: 25px;
    }
  }
`

const Header = ({ siteTitle }) => {
  return (
    <TopBar>
      <NavigationHorizontal />
    </TopBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
