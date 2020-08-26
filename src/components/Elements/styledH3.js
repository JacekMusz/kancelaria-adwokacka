import React from "react"
import styled from "styled-components"

const H3 = styled.h3`
  font-size: 25px;
  color: ${({ color }) => (color ? color : "#171a1c")};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? borderBottom : "1px solid #cdbba5"};
  width: ${({ width }) => (width ? width : "auto")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  @media (min-width: 360px) {
    font-size: 28px;
  }
  @media (min-width: 410px) {
    font-size: 30px;
  }
  @media (min-width: 767px) {
    font-size: 32px;
  }
  @media (min-width: 1199px) {
    font-size: 35px;
  }
  @media (min-width: 1599px) {
    font-size: 38px;
  }
`

const StyledH3 = props => {
  return (
    <H3
      width={props.width}
      margin={props.margin}
      borderBottom={props.borderBottom}
      color={props.color}
    >
      {props.text}
    </H3>
  )
}

export default StyledH3
