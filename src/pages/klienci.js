import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledH3 from "../components/Elements/styledH3"
import styled from "styled-components"
import StyledText from "../components/Elements/styledText"

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5% 5% 0 5%;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 1023px) {
    max-width: 1200px;
    margin: auto;
  }
`

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  @media (min-width: 360px) {
  }

  @media (min-width: 410px) {
  }
  @media (min-width: 767px) {
  }
  @media (min-width: 1023px) {
    flex-direction: row;
  }
  @media (min-width: 1599px) {
  }
`

const Klienci = () => (
  <Layout>
    <SEO title="klienci" />
    <PageContainer>
      <Section>
        <StyledH3 margin={"5% 0"} text={"Klienci indywidualni"}></StyledH3>
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
        <StyledH3
          margin={"5% 0"}
          text={"Przedsiębiorstwa i Instytucje"}
        ></StyledH3>
        <StyledText
          text={`W ramach świadczenia usług podmiotom gospodarczym oraz instytucjom Kancelaria oferuje: doradztwo prawne, reprezentację przed sądami oraz organami administracji, przygotowanie, analizę, negocjacje zawieranych umów, windykacje należności, rozwiązywanie problemów pracodawcy z zakresu prawa pracy, opracowanie regulaminów wewnątrzzakładowych, także w przypadku
          instytucji np. zakładów poprawczych, schronisk dla nieletnich. Powyższe usługi mogą być świadczone także w ramach pakietów abonamentowych, dostosowanych do potrzeb Klienta.`}
        ></StyledText>
      </Section>
    </PageContainer>
  </Layout>
)

export default Klienci
