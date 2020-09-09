import React from "react"
import StyledH3 from "../components/Elements/styledH3"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ListElement from "../components/Elements/listElement"
import StyledText from "../components/Elements/styledText"

const List = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: "space-between";

  /* border-left: 1px solid #cdbba5; */
`
const Section = styled.div`
  width: 90%;
  padding: 5% 5% 15% 5%;
`

const Kontakt = () => (
  <Layout>
    <Section>
      <StyledH3 margin={"5% 0"} text={"Zapraszamy do kontaktu"}></StyledH3>
      <StyledText text="Nasza kancelaria znajduje się w centrum Żyrardowa - ul. 1 Maja 54 (plac Jana Pawła II)" />
      <br />
      <StyledText text="Zachęcamy do kontaktu telefonicznego " />
      <StyledText text="+48 533 270 008" />
      <br />
      <StyledText text="Lub napisz do nas:" />
      <StyledText text="bartoszewicz@zyrardow-adwokat.pl" />
      <StyledH3 margin={"15% 0 5% 0"} text={"Najczęstsze pytania"}></StyledH3>
      <List>
        {elements.map(item => {
          return (
            <ListElement
              title={item.name}
              entryText={item.entryText}
              text={item.text}
            />
          )
        })}
      </List>
    </Section>
  </Layout>
)

export default Kontakt

const elements = [
  {
    name: "§ 1. Jakie dokumenty przygotować do sprawy o alimenty?",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Odpis aktu urodzenia dziecka, dokumenty potwierdzenia ponoszenia opłat za dziecko (przelewy, rachunki, faktury imienne na dziecko), aktualne dokumenty potwierdzające wysokość opłat za media oraz czynsz, jeśli było już wydane orzeczenie o alimentach – jego odpis ze stwierdzeniem prawomocności.",
  },
  {
    name: "§ 2. Jakie dokumenty przygotować do sprawy rozwodowej?",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text: `na początek: zupełny odpis aktu małżeństwa, odpis aktu urodzenia dziecka/dzieci, jeśli alimenty są sporne, dokumenty jak do sprawy o alimenty`,
  },
  {
    name: "§ 3. Czy w sprawie rozwodowej trzeba przesłuchać świadka?",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Jeśli strony mają wspólne małoletnie dziecko, to tak. Sąd musi przesłuchać jednego świadka na okoliczność aktualnej sytuacji opiekuńczo wychowawczej małoletniego dziecka. Dane świadka należy podać w pozwie.",
  },
  {
    name:
      "§ 4. Czy w sprawie dotyczącej kontaktów, miejsca zamieszkania dzieci lub rozwodu, dzieci są przesłuchiwane? ",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Najczęściej nie. W przypadku sporu w zakresie dotyczącym dzieci, rodzice i małoletni są badani przez biegłych psychologów w OZSS. Po badaniu jest sporządzana opinia, która jest jednym z dowodów uwzględnianym przez sąd przy wydawaniu rozstrzygnięcia. Jednakże, wyjątkowo, jeśli sąd uzna, ze pomimo opinii konieczne jest wysłuchanie małoletnich, to może to zrobić.    ",
  },
]
