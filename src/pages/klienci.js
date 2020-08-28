import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledH3 from "../components/Elements/styledH3"
import styled from "styled-components"
import StyledText from "../components/Elements/styledText"

const PageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5%;
`

const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 360px) {
  }

  @media (min-width: 410px) {
  }
  @media (min-width: 767px) {
  }
  @media (min-width: 1199px) {
  }
  @media (min-width: 1599px) {
  }
`

const Klienci = () => (
  <Layout>
    <SEO title="klienci" />
    <PageContainer>
      <Section>
        <StyledH3
          margin={" 0 0 20px 0"}
          text={"Klienci indywidualni"}
        ></StyledH3>
        <StyledText
          text={`Kancelaria Adwokacka świadczy szybką i wszechstronną pomoc prawną
          osobom fizycznym w rozwiązywaniu ich spraw prywatnych. W ramach
          kompleksowej obsługi prawnej: udzielamy porad prawnych i konsultacji,
          sporządzamy opinie prawne, opracowujemy i weryfikujemy umowy, pisma,
          regulaminy, reprezentujemy klientów przed wszystkimi urzędami i
          sądami, w tym przed Sądem Najwyższym.`}
        ></StyledText>
      </Section>
      <Section>
        <StyledH3 margin={" 0 0 20px 0"} text={"Przedsiębiorstwa"}></StyledH3>
        <StyledText
          text={`W ramach usług świadczenia usług podmiotom gospodarczym oraz
          instytucjom Kancelaria oferuje: doradztwo prawne, reprezentację przed
          sądami oraz organami administracji, przygotowanie, analizę, negocjacje
          zawieranych umów, udział w posiedzeniach organów spółek, windykacje
          należności, rozwiązywanie problemów pracodawcy z zakresu prawa pracy,
          opracowanie regulaminów wewnątrzzakładowych, także w przypadku
          instytucji np. zakładów poprawczych, schronisk dla nieletnich.
          Powyższe usługi mogą być świadczone także w ramach pakietów
          abonamentowych, dostosowanych do potrzeb Klienta`}
        ></StyledText>
      </Section>
    </PageContainer>
  </Layout>
)

export default Klienci
