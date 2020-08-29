import React, { useState } from "react"
import styled from "styled-components"

const ListElementContainer = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: #171a1c;
  border-radius: 3px;
  transition: 0.3s;
  position: relative;
  border-radius: 5px;
  margin: 0 5% 5% 5%;
  background-color: ${({ showText }) =>
    showText ? "rgba(0, 0, 0, 0.03)" : null};
  .list-element__title {
    color: ${({ showText }) => (showText ? "#cdbba5" : "#171a1c")};
    border-radius: 5px 5px 0 0;
    display: block;
    font-size: 20px;
    position: relative;
    padding: 10px;
    background-color: ${({ showText }) => (showText ? "#171a1c" : null)};
    cursor: ${({ showText }) => (showText ? null : "pointer")};
    transition: 0.4s;
    padding-left: ${({ showText }) => (showText ? "50px" : "20px")};
    &:hover {
      padding-left: 50px;
    }
  }
  .list-element__text {
    padding: 10px 20px;
    font-size: 15px;
    line-height: 22px;
    margin: 10px;
  }
`
const StyledButton = styled.button`
  width: 150px;
  height: 30px;
  margin: 5px;
  padding: 5px 15px;
  border: none;
  border: 1px solid #cdbba5;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  color: #171a1c;
  align-self: flex-end;
  &:hover {
    color: #171a1c;
    background-color: #cdbba5;
  }
`

const ListElement = ({ title, entryText, text }) => {
  const [showText, setShowText] = useState(false)
  const [titleHovered, setTitleHovered] = useState(false)
  return (
    <ListElementContainer showText={showText}>
      <h6
        className="list-element__title"
        onMouseOver={() => setTitleHovered(true)}
        onMouseLeave={() => setTitleHovered(false)}
        onClick={() => setShowText(true)}
      >
        {title}
      </h6>
      {showText && <p className="list-element__text">{text}</p>}
      {showText && (
        <StyledButton onClick={() => setShowText(!showText)}>
          {"Schowaj"}
        </StyledButton>
      )}
    </ListElementContainer>
  )
}

export default ListElement
