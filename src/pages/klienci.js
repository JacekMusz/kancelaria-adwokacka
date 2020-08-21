import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5%;
`

const Section = styled.div`
  width: 45%;
  h3 {
    width: 100%;
    text-align: center;
  }
`

const Klienci = () => (
  <Layout>
    <SEO title="klienci" />
    <PageContainer>
      <Section>
        <h3>Klienci indywidualni</h3>
        <p>
          Kancelaria Adwokacka świadczy szybką i wszechstronną pomoc prawną
          osobom fizycznym w rozwiązywaniu ich spraw prywatnych. W ramach
          kompleksowej obsługi prawnej: udzielamy porad prawnych i konsultacji,
          sporządzamy opinie prawne, opracowujemy i weryfikujemy umowy, pisma,
          regulaminy, reprezentujemy klientów przed wszystkimi urzędami i
          sądami, w tym przed Sądem Najwyższym.
        </p>
      </Section>
      <Section>
        <h3>Przedsiębiorstwa</h3>
        <p>
          W ramach usług świadczenia usług podmiotom gospodarczym oraz
          instytucjom Kancelaria oferuje: doradztwo prawne, reprezentację przed
          sądami oraz organami administracji, przygotowanie, analizę, negocjacje
          zawieranych umów, udział w posiedzeniach organów spółek, windykacje
          należności, rozwiązywanie problemów pracodawcy z zakresu prawa pracy,
          opracowanie regulaminów wewnątrzzakładowych, także w przypadku
          instytucji np. zakładów poprawczych, schronisk dla nieletnich.
          Powyższe usługi mogą być świadczone także w ramach pakietów
          abonamentowych, dostosowanych do potrzeb Klienta.
        </p>
      </Section>
    </PageContainer>
  </Layout>
)

export default Klienci
