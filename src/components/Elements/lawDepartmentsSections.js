import React from "react"
import styled from "styled-components"

const LawDepartment = styled.section`
  width: 28%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  color: #171a1c;
  margin: 20px;
  border-radius: 3px;
  transition: 0.3s;
  position: relative;
  .law-department__title {
    color: #cdbba5;
    display: block;
    font-size: 20px;
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 0;
    border-left: 1px solid black;
    background-color: #171a1c;
    border-radius: 5px 5px 0 0;
  }
  .law-department__entry-text {
    font-size: 12px;
    margin: 10px;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 5px 5px 5px #171a1c;
  }
`
const StyledButton = styled.button`
  min-width: 150px;
  height: 30px;
  margin: 60px 20px 20px 20px;
  padding: 5px 15px;
  border: none;
  border: 1px solid #cdbba5;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  color: #171a1c;
  &:hover {
    color: #171a1c;
    background-color: #cdbba5;
  }
`

const LawDepartmentsSections = ({ title, entryText, text }) => {
  return (
    <LawDepartment>
      <h6 className="law-department__title">{title}</h6>
      <br />
      <br />
      <p className="law-department__entry-text">{entryText}</p>
      <StyledButton>Pokaż więcej</StyledButton>
    </LawDepartment>
  )
}

export default LawDepartmentsSections
