import React, { Suspense } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import SEO from "../components/seo"
import ArticleContainer from "../components/Elements/article"
import StyledH3 from "../components/Elements/styledH3"
import StyledText from "../components/Elements/styledText"

const Layout = React.lazy(() => import("../components/layout"))

const StyledImage = styled(Image)`
  object-fit: cover;
  position: fixed;
  height: 100vh;
  z-index: 0;
  top: 0;
  width: 100%;
  transform: translateY(-50px);
  @media (min-width: 359px) and (orientation: portrait) {
    transform: translateY(-60px);
  }
`

const TitlesContainer = styled.div`
  color: #cdbba5;
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 5% 5% 15% 5%;
  z-index: 12;
  font-size: "Cinzel";
  letter-spacing: 2px;
  background-color: red;
  background: linear-gradient(transparent, #171a1c);
  h1 {
    margin-top: 10px;
    padding-bottom: 3px;
    font-size: 40px;
    text-align: left;
  }
  h2 {
    margin-top: 10px;
    font-size: 26px;
  }

  @media (min-width: 359px) and (orientation: portrait) {
    padding: 5% 5% 15% 5%;
    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 28px;
    }
  }
  @media (min-width: 410px) and (orientation: portrait) {
    padding: 5% 5% 20% 5%;
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 30px;
    }
  }

  @media (min-width: 410px) and (orientation: landscape) {
    padding: 5% 5% 10% 5%;
    h1 {
      font-size: 38px;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (min-width: 767px) {
    padding: 5% 5% 10% 5%;
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 32px;
    }
  }
  @media (min-width: 1199px) {
    h1 {
      font-size: 62px;
    }
    h2 {
      font-size: 40px;
    }
  }
`

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  color: white;
  overflow: hidden;
`
const Section = styled.section`
  min-height: 30vh;
  width: 90%;
  color: #171a1c;
  padding: 5% 5% 5% 5%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1023px) {
    flex-direction: row;
  }
  h2 {
    width: 90%;
    font-size: 35px;
    color: #171a1c;
    border-bottom: 1px solid #cdbba5;
    margin-bottom: 20px;
  }

  .articles-container {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .show-more-articles-button {
    justify-self: flex-end;
    align-self: center;
  }
`

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        author
        paragraph
        date
      }
    }
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
    title: "Nowa strona Kancelarii",
    date: "04.10.20",
    paragraph:
      "Szanowni Państwo, Zapraszam do zapoznania się z ofertą kancelarii na nowej stornie internetowej. Informuję również, iż nastąpiła zmiana nazwiska adwokata Katarzyny Pałuby na nazwisko Bartoszewicz.",
  },
  {
    number: 2,
    title: "Mediacje",
    date: "04.10.20",
    paragraph:
      "Uprzejmie informuję, iż od czerwca 2020 r. kancelaria świadczy również usługi z zakresu mediacji. Więcej szczegółów w zakładce 'Mediacje'",
  },
]

articlesData.reverse()

const IndexPage = props => {
  console.log(props.data.allDatoCmsArticle.nodes)
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <Suspense
          fallback={
            <div style={{ color: "black", width: "100%", height: "100%" }}>
              Trwa ładowanie strony...
            </div>
          }
        >
          <Layout>
            <SEO title="Start" />
            <StyledImage
              fluid={props.data.imageHero.childImageSharp.fluid}
              alt="primary-background"
              objectPosition="100% 0"
            ></StyledImage>
            <TitlesContainer>
              <h2>Adwokat</h2>
              <h1>Katarzyna Bartoszewicz</h1>
            </TitlesContainer>
            <SectionsContainer>
              <Section>
                <StyledH3 margin={"5% 0"} text={"O koncelarii"}></StyledH3>
                <StyledText
                  text={`Kancelaria świadczy pomoc prawną podmiotom fizycznym,
      gospodarczym oraz instytucjom. Adwokat Katarzyna
      Bartoszewicz zdobywała swoje doświadczenie zawodowe
      współpracując z innymi kancelariami oraz instytucjami
      publicznymi. Obecnie od 2011 r. prowadzi własną praktykę
      prawniczą. Szerokiego zakres usług obejmuje prawo karne,
      cywilne, rodzinne, gospodarcze, prawo pracy oraz prawo
      spółek. Kancelaria ponadto współpracuje z Kancelariami
      Notarialnymi oraz Komorniczymi.`}
                ></StyledText>
              </Section>
              <Section className="section-news" id="news">
                <StyledH3 margin={"5% 0"} text={"Aktualności"}></StyledH3>
                <div className="articles-container">
                  {props.data.allDatoCmsArticle?.nodes?.length > 0
                    ? props.data.allDatoCmsArticle?.nodes.map((item, index) => {
                        return (
                          <ArticleContainer
                            key={index}
                            number={item.number}
                            entry={item.entry}
                            title={item.title}
                            date={item.date}
                            articleText={item.paragraph}
                          />
                        )
                      })
                    : articlesData.map((item, index) => {
                        return (
                          <ArticleContainer
                            number={item.number}
                            key={index}
                            entry={item.entry}
                            title={item.title}
                            date={item.date}
                            articleText={item.paragraph}
                          />
                        )
                      })}

                  {/* Will be add after DatoCMS will be implemented
                  <div className="show-more-articles-button">
                    <Button disabled={true} text={"Pokaż więcej artykułów"} />
                  </div> */}
                </div>
              </Section>
            </SectionsContainer>
          </Layout>
        </Suspense>
      )}
    </>
  )
}

export default IndexPage
