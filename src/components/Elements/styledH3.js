import React from "react"
import styled from "styled-components"

const H3 = styled.h3`
  font-size: 35px;
  color: #171a1c;
  border-bottom: 1px solid #cdbba5;
  @media (min-width: 360px) {
  }

  @media (min-width: 410px) {
    font-size: 15px;
  }
  @media (min-width: 767px) {
    font-size: 16px;
  }
  @media (min-width: 1199px) {
    font-size: 28px;
  }
  @media (min-width: 1599px) {
    font-size: 30px;
  }
`

const StyledH3 = props => {
  return <H3>{props.text}</H3>
}

export default StyledH3
