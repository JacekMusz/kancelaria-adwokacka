import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import ArticleContainer from "../components/Elements/article"
import Button from "./../components/Elements/button"

const StyledImage = styled(Image)`
  object-fit: cover;
  position: fixed;
  height: 100vh;
  z-index: 0;
  top: 0;
  width: 100%;
`

const TitlesContainer = styled.div`
  color: #cdbba5;
  position: absolute;
  top: 55vh;
  width: 80%;
  padding: 0% 15% 0 5%;
  z-index: 12;
  font-size: "Cinzel";
  letter-spacing: 2px;
  background-color: red;
  height: 55vh;
  background: linear-gradient(transparent, #171a1c);
  h1 {
    margin-top: 10px;
    padding-bottom: 3px;
    font-size: 46px;
    text-align: left;
    border-bottom: 1px solid #cdbba5;
  }
  h3 {
    margin-top: 10px;
    font-size: 30px;
  }

  @media (min-width: 359px) {
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 32px;
    }
  }
  @media (min-width: 410px) {
    h1 {
      font-size: 54px;
      max-width: 350px;
    }
    h3 {
      font-size: 35px;
    }
  }
  @media (min-width: 767px) {
    h1 {
      font-size: 60px;
      max-width: 400px;
    }
    h3 {
      font-size: 40px;
    }
  }
  @media (min-width: 1199px) {
    h1 {
      font-size: 65px;
      max-width: 700px;
    }
    h3 {
      font-size: 40px;
    }
  }
`

const SectionsContainer = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`

const Section = styled.section`
  min-height: 30vh;
  width: 90vw;
  background-color: rgb(245, 245, 240);
  color: #171a1c;
  padding: 10%;
  display: flex;

  h3 {
    width: 100%;
    font-size: 35px;
    color: #171a1c;
    border-bottom: 1px solid #cdbba5;
  }
  .description-container,
  .articles-container {
    width: 60%;
    border-left: 1px solid #cdbba5;
    margin-left: 10%;
    padding: 20px 20px 20px 50px;
    font-size: 20px;
    line-height: 30px;
  }

  .articles-container {
    display: flex;
    flex-direction: column;
  }

  .show-more-articles-button {
    justify-self: flex-end;
    align-self: flex-end;
  }
`

export const query = graphql`
  {
    imageHero: file(name: { eq: "hero-image-darken" }) {
      childImageSharp {
        fluid(quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const articlesData = [
  {
    number: 1,
    title: "Pierwszy artykuł",
    entry: "Urywek artykułu - 50 pierwszych znaków ...",
    date: "12.12.12",
    article:
      "Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32.",
  },
  {
    number: 2,
    title: "Mediacje - czyli nasza nowa oferta",
    entry: "Urywek artykułu - 50 pierwszych znaków ...",
    date: "20.06.20",
    article:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
]

articlesData.reverse()

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Start" />
      <StyledImage
        fluid={props.data.imageHero.childImageSharp.fluid}
        alt="primary-background"
        objectPosition="100% 0%"
      ></StyledImage>
      <TitlesContainer>
        <h3>Adwokat</h3>
        <h1>Katarzyna Bartoszewicz</h1>
      </TitlesContainer>
      <SectionsContainer>
        <Section>
          <div>
            <h3>O kancelarii</h3>
          </div>
          <div className="description-container">
            <p>
              {" "}
              Świadczymy pomoc prawną podmiotom fizycznym, gospodarczym oraz
              instytucjom. Adwokat Katarzyna Pałuba – prowadząca Kancelarię
              zdobywała swoje doświadczenie zawodowe współpracując z innymi
              kancelariami oraz instytucjami publicznymi. Obecnie od 2011 r.
              prowadzi własną praktykę prawniczą. W ramach swojego szerokiego
              zakresu działalności, obejmującego prawo karne, cywilne, rodzinne,
              gospodarcze oraz prawo pracy, Kancelaria współpracuje także ze
              specjalistami zajmującymi się m.in. prawem spółek, prawem
              kolejowym oraz zamówieniami publicznymi. Ponadto Kancelaria
              współpracuje z Kancelariami Notarialnymi oraz Komorniczymi.
            </p>
          </div>
        </Section>
        <Section>
          <div>
            <h3>Aktualności</h3>
          </div>
          <div className="articles-container">
            {articlesData.map((item, number) => {
              return (
                <ArticleContainer
                  number={item.number}
                  entry={item.entry}
                  title={item.title}
                  date={item.date}
                  article={item.article}
                />
              )
            })}
            <div className="show-more-articles-button">
              <Button text={"Pokaż więcej artykułów"} />
            </div>
          </div>
        </Section>
      </SectionsContainer>
    </Layout>
  )
}

export default IndexPage