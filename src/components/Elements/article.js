import React, { useState } from "react"
import styled from "styled-components"

const Article = styled.article`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  padding: 10px;
  transition: 0.3s;
  border-left: 1px solid #cdbba5;
  .article__date {
    font-size: 10px;
    width: 100%;
    text-align: right;
    line-height: 12px;
  }
  .article__header {
    display: flex;
    flex-direction: row;
  }
  .article__text {
    margin-top: 10px;
    font-size: 12px;
    line-height: 20px;
    transition: 0.9s;
  }
  .article__title {
    width: 80%;
    font-size: 16px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    transform: scale(1.015);
  }
  @media (min-width: 360px) {
    .article__text {
      font-size: 13px;
      line-height: 22px;
    }
  }
  @media (min-width: 410px) {
    .article__date {
      font-size: 11px;
    }
    .article__title {
      font-size: 20px;
    }
    .article__text {
      font-size: 14px;
    }
  }
  @media (min-width: 767px) {
    .article__date {
      font-size: 12px;
    }
    .article__title {
      font-size: 21px;
    }
    .article__text {
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (min-width: 1023px) {
    border-left: none;
    border-right: 1px solid #cdbba5;
    .article__title {
      font-size: 22px;
    }
    .article__text {
      font-size: 15px;
      line-height: 25px;
    }
  }
  @media (min-width: 1199px) {
  }
  @media (min-width: 1599px) {
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

const ArticleContainer = ({ title, date, articleText }) => {
  const entry = articleText.substr(0, 40) + "..."
  const [showArticle, setShowArticle] = useState(false)
  return (
    <Article>
      <p className="article__date">{date}</p>
      <h6 className="article__title">{title}</h6>
      <p className="article__text">{showArticle ? articleText : entry}</p>
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
