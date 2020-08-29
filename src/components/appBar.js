import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import NavigationDesktop from "./Navigations/navigationDesktop"
import { FaBars, FaTimes } from "react-icons/fa"
import NavigationMobile from "./Navigations/navigationMobile"

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  background-color: #171a1c;
  margin: 0;
  border: none;
  color: #cdbba5;
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  .navigation_desktop-version {
    display: none;
    width: 100%;
  }
  .menu-icon {
    font-size: 30px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
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
    .navigation_mobile-version {
      display: none;
    }
    .navigation_desktop-version {
      display: block;
    }

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

const AppBar = ({ siteTitle }) => {
  const [openVerticalMenu, setOpenVerticalMenu] = useState(false)
  return (
    <TopBar>
      <div className="navigation_mobile-version">
        {openVerticalMenu ? (
          <FaTimes
            className="menu-icon"
            onClick={() => setOpenVerticalMenu(!openVerticalMenu)}
          />
        ) : (
          <FaBars
            className="menu-icon"
            onClick={() => setOpenVerticalMenu(!openVerticalMenu)}
          />
        )}

        <NavigationMobile
          openVerticalMenu={openVerticalMenu}
          setOpenVerticalMenu={setOpenVerticalMenu}
        />
      </div>
      <div className="navigation_desktop-version">
        <NavigationDesktop />
      </div>
    </TopBar>
  )
}

AppBar.propTypes = {
  siteTitle: PropTypes.string,
}

AppBar.defaultProps = {
  siteTitle: ``,
}

export default AppBar
