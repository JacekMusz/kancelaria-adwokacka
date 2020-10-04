import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavigationDesktop from "./Navigations/navigationDesktop"
import { FaBars, FaTimes } from "react-icons/fa"
import NavigationMobile from "./Navigations/navigationMobile"

const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #171a1c;
  top: 0;
  transition: 0.3s;
  transform: ${({ backgroundColorPosition }) =>
    backgroundColorPosition ? "translateY(0)" : "translateY(-50px)"};
  @media (min-width: 359px) and (orientation: portrait) {
    transform: ${({ backgroundColorPosition }) =>
      backgroundColorPosition ? "translateY(0)" : "translateY(-60px)"};
  }
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
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
    top: 10px;
    right: 15px;
    z-index: 100;
  }
  h4 {
    font-size: 20px;
  }

  @media (min-width: 359px) {
    h4 {
      font-size: 22px;
    }
  }
  @media (min-width: 359px) and (orientation: portrait) {
    height: 60px;

    .menu-icon {
      font-size: 40px;
    }
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

const AppBar = () => {
  const [openVerticalMenu, setOpenVerticalMenu] = useState(false)
  const [backgroundColorPosition, setBackgroundColorPosition] = useState(
    window.location.pathname !== "/"
  )

  useEffect(() => {
    console.log(window.location.pathname)
    if (window !== undefined) {
      window.addEventListener("scroll", e => {
        if (window.location.pathname !== "/") {
          setBackgroundColorPosition(true)
        } else if (
          window.pageYOffset > 50 &&
          window.location.pathname === "/"
        ) {
          setBackgroundColorPosition(true)
        } else {
          setBackgroundColorPosition(false)
        }
      })
    }
  }, [window])
  return (
    <TopBar>
      <BackgroundColor
        backgroundColorPosition={backgroundColorPosition}
      ></BackgroundColor>
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
