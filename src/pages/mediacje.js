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
  margin-bottom: 50px;
`

const Aktualnosci = () => (
  <Layout>
    <SEO title="mediacje" />
    <PageContainer>
      <Section>
        <StyledH3 margin={"5% 0 "} text={"Mediacje"}></StyledH3>
        <StyledText
          text={` Kancelaria prowadzi również spotkania mediacyjne. Adwokat Katarzyna
          Bartoszewicz jest wpisana na listę stałych mediatorów sądowych przy
          Sądzie Okręgowym w Płocku. Realizuje mediacje nie tylko na zlecenie
          sądu ale również prywatne. Mediacja jest często atr akcyjną
          alternatywą dla poszukiwania rozwiązania sporu na drodze postępowania
          sądowego. Warunkiem skorzystania z mediacji jest to, aby strony miały
          wolę rozwiązania konfliktu. Rolą mediatora jest stworzenie im warunków
          do jego wypracowania. Do zalet mediacji należy niewątpliwie szybkość
          zakończenia sporu, w stosunku do postępowania sądowego, oraz w
          większości przypadków niższe koszty dla stron. Ponadto, w ramach
          zawartej ugody strony mają często szerszy zakres rozwiązań, które nie
          są dostępne dla rozstrzygnięcia sądowego.`}
        />
      </Section>
    </PageContainer>
  </Layout>
)

export default Aktualnosci
