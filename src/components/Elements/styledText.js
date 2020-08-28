import React from "react"
import styled from "styled-components"

const Text = styled.p`
  font-size: 20px;
  color: ${({ color }) => (color ? color : "#171a1c")};
  width: ${({ width }) => (width ? width : "auto")};
  margin: ${({ margin }) => (margin ? margin : "auto")};

  @media (min-width: 360px) {
    font-size: 18px;
  }
  @media (min-width: 410px) {
    font-size: 40px;
  }
  @media (min-width: 767px) {
    font-size: 42px;
  }
  @media (min-width: 1199px) {
    font-size: 35px;
  }
  @media (min-width: 1599px) {
    font-size: 38px;
  }
`

const StyledText = props => {
  return (
    <Text
      width={props.width}
      margin={props.margin}
      borderBottom={props.borderBottom}
      color={props.color}
    >
      {props.text}
    </Text>
  )
}

export default StyledText
