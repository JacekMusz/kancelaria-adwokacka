import React from "react"
import styled from "styled-components"

const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${({ color }) => (color ? color : "#171a1c")};
  width: ${({ width }) => (width ? width : "auto")};
  margin: ${({ margin }) => (margin ? margin : "auto")};

  @media (min-width: 360px) {
    font-size: 15px;
    line-height: 24px;
  }
  @media (min-width: 410px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 767px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (min-width: 1023px) {
    font-size: 19px;
    line-height: 26px;
    margin: ${({ margin }) => (margin ? margin : "0")};
  }
  @media (min-width: 1199px) {
    font-size: 20px;
    line-height: 28px;
    margin: ${({ margin }) => (margin ? margin : "0")};
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
