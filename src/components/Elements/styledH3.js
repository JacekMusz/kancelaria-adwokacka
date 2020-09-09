import React from "react"
import styled from "styled-components"

const H3 = styled.h3`
  font-size: 28px;
  padding-bottom: 5px;
  font-weight: 500;
  color: ${({ color }) => (color ? color : "#171a1c")};
  border-bottom: "1px solid #cdbba5";
  width: ${({ width }) => (width ? width : "auto")};
  min-width: 30%;
  margin: ${({ margin }) => (margin ? margin : "5%")};

  @media (min-width: 360px) {
    font-size: 30px;
  }
  @media (min-width: 410px) {
    font-size: 31px;
  }
  @media (min-width: 767px) {
    font-size: 32px;
  }
  @media (min-width: 1023px) {
    font-size: 34px;
    width: 30%;
  }
  @media (min-width: 1199px) {
    border-bottom: none;
    border-right: 1px solid #cdbba5;
    font-size: 36px;
    margin: 0 20px 0 0;
    width: 30%;
  }
  @media (min-width: 1599px) {
    font-size: 40px;
  }
`

const StyledH3 = props => {
  return (
    <H3 width={props.width} margin={props.margin} color={props.color}>
      {props.text}
    </H3>
  )
}

export default StyledH3
