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
  }
  @media (min-width: 1023px) {
    font-size: 32px;
    padding-right: 10px;
    border-right: 1px solid #cdbba5;
    border-bottom: none;
    margin: 0 20px 0 0;
    width: 30%;
  }
  @media (min-width: 1199px) {
    font-size: 34px;
    margin: 0 20px 0 0;
    width: 30%;
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
