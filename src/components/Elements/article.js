import React, { useState } from "react"
import styled from "styled-components"
import Button from "./button"

const Article = styled.article`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  padding-left: 10px;
  transition: 0.3s;
  border-left: 1px solid #cdbba5;
  .article-date {
    font-size: 10px;
    width: 100%;
    text-align: right;
    line-height: 12px;
  }
  .article-header {
    display: flex;
    flex-direction: row;
    h6 {
      width: 80%;
    }
  }
  .text {
    font-size: 14px;
    transition: 0.9s;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    transform: scale(1.015);
  }
`
const StyledButton = styled.button`
  min-width: 150px;
  height: 30px;
  margin-top: 20px;
  padding: 0 15px;
  border: none;
  border: 1px solid #cdbba5;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  justify-self: center;
  align-self: center;
  &:hover {
    color: #171a1c;
    background-color: #cdbba5;
  }
`

const ArticleContainer = ({ title, date, article, entry }) => {
  const [showArticle, setShowArticle] = useState(false)
  return (
    <Article>
      <p className="article-date">{date}</p>
      <h6>{title}</h6>
      <p className="text">{showArticle ? article : entry}</p>
      <StyledButton
        style={{ alignSelf: "flex-end" }}
        onClick={() => setShowArticle(!showArticle)}
      >
        {showArticle ? "Zamknij" : "Pokaż artykuł"}
      </StyledButton>
    </Article>
  )
}

export default ArticleContainer
