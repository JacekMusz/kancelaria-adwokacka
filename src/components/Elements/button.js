import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  min-width: 150px;
  height: 30px;
  margin-top: 20px;
  padding: 5px 15px;
  border: none;
  border: 1px solid #cdbba5;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #171a1c;
    background-color: #cdbba5;
  }
`

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

export default Button
