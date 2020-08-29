import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ListElement from "./../components/Elements/ListElement"
import StyledH3 from "../components/Elements/styledH3"

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: "space-between";
  align-items: "space-around";
  overflow: hidden;
`
const List = styled.div`
  min-height: 50vh;
  width: 90%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: "space-between";
  align-items: "space-around";
  border-left: 1px solid #cdbba5;
`

const Aktualnosci = () => (
  <Layout>
    <SEO title="dzialy-prawa" />
    <PageContainer>
      <StyledH3
        width={"90%"}
        margin={"5%"}
        text={"Obszary naszej działalności "}
      />{" "}
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
    </PageContainer>
  </Layout>
)

export default Aktualnosci

const elements = [
  {
    name: "§ 1. Prawo cywilne i procedura Cywilna",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Kancelaria świadczy pomoc prawną w sprawach z zakresu prawa cywilnego: osobowego, rzeczowego, zobowiązaniowego oraz spadkowego. Do powyższych spraw należą w szczególności: sprawy o ochronę dóbr osobistych, sprawy dotyczące nieruchomości (m.in. sprzedaż, najem, użytkowanie wieczyste, dzierżawa, zasiedzenie, zniesienie współwłasności, służebności, usuwanie wad prawnych nieruchomości, postępowanie wieczystoksięgowe), umów (m.in. zlecenia, o dzieło, świadczenia usług, nabywania i zbywania składników majątkowych i niemajątkowych,współpracy i umów ramowych, cesji wierzytelności lub długu, darowizny, użyczenia, pożyczki) sprawy związane z zarządzaniem nieruchomościami przez wspólnoty mieszkaniowe, podział majątku, stwierdzenie nabycia spadku, dział spadku, doradztwo w zakresie dziedziczenia,",
  },
  {
    name: "§ 2. Windykacja oraz postępowanie egzekucyjne",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text: `Windykacja ugodowa to usługa, w ramach której dochodzimy dla naszych Klientów wymagalnych należności, również przeterminowanych. Pomagamy także dłużnikom w negocjacjach warunków spłaty zobowiązań.
      Dochodzenie należności w ramach postępowania egzekucyjnego obejmuje wszczęcie postępowania oraz udział w dalszych czynnościach. W ramach postępowania egzekucyjnego Kancelaria reprezentuje zarówno wierzycieli jak i dłużników. W zakresie działalności znajdują się także skargi na czynności komornika.`,
  },
  {
    name: "§ 3. Prawo Gospodarcze",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Kancelaria prowadzi obsługę podmiotów gospodarczych, w ramach której w szczególności tworzy powyższe podmioty (m.in. spółki osobowe, spółek kapitałowe, spółdzielnie, stowarzyszenia, fundacje) oraz reprezentuje je przed sądem rejestrowym, obsługuje procesy łączenia, dzielenia oraz przekształceń podmiotów gospodarczych, obsługuje proces korporacyjny, w tym przygotowanie projektów uchwał zgromadzenia wspólników i innych organów spółek kapitałowych, regulaminów działania organów korporacyjnych oraz statutów podmiotów gospodarczych.",
  },
  {
    name: "§ 4. Prawo rodzinne",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Kancelaria udziela pomocy prawnej w sprawach z zakresu prawa rodzinnego, w szczególności: rozwodach , separacji, alimentów, władzy rodzicielskiej, kontaktach z dziećmi, ustalanie i zaprzeczanie pochodzenia dziecka, ubezwłasnowolnienie, rozstrzyganie o istotnych sprawach rodziny. Ponadto kancelaria zajmuje się sprawami z zakresu poddania przymusowemu leczeniu.",
  },
  {
    name: "§ 5. Prawo pracy",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text: `Kancelaria świadczy pomoc zarówno pracodawcą jak i pracownikom. Obsługuje pracodawców w zakresie prowadzenia dokumentacji pracowniczej (np. przygotowanie akt osobowych, sporządzanie świadectw pracy, regulaminów pracy i wynagradzania), przy sporządzaniu i rozwiązywaniu umów o pracę oraz umów cywilnoprawych zawieranych na podstawie prawa cywilnego, doradztwa prawnego w zakresie przestrzegania przepisów prawa pracy oraz prowadzenia sporów sądowych.

      Kancelaria reprezentuje pracowników w sporach przeciwko pracodawcy przed sądami powszechnymi (np. z tytułu roszczeń o przywrócenie do pracy, odszkodowanie za bezzasadne rozwiązanie stosunku pracy, ustalenie istnienia stosunku pracy, zapłatę za przepracowane nadgodziny).`,
  },
  {
    name: "§ 6. Prawo karne",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Kancelaria oferuje kompleksową obronę osób fizycznych w procesach karnych, zarówno w postępowaniu przygotowawczym, jak i postępowaniu przed sądami powszechnymi oraz reprezentuje pokrzywdzonych na wszystkich etapach postępowania karnego. Kancelaria ponadto reprezentuje skazanych w postępowaniu wykonawczym i postępowaniu w sprawie wydania wyroku łącznego.",
  },
  {
    name: "§ 7. Postępowanie w sprawach nieletnich",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Kancelaria prowadzi pomoc nieletnim, w stosunku do których toczy się postępowanie w przedmiocie demoralizacji lub popełnienia czynu karalnego.",
  },
  {
    name: "§ 8. Prawo administracyjne ",
    entryText: "Ontrary to popular belief, Lorem Ipsum is not simply",
    text:
      "Kancelaria udziela pomocy prawnej w sprawach z zakresu prawa administracyjnego, w szczególności w zakresie zagadnień prawnych wynikających z prawa budowlanego, procesu inwestycyjnego, zagospodarowania przestrzennego (m.in. ocenia przydatność nieruchomości do danego procesu inwestycyjnego), prawa ochrony środowiska, wymeldowania, zmiany nazwiska. W ramach powyższych usług przygotowuje odwołania od decyzji administracyjnych, sporządzana skargi do Wojewódzkiego Sądu Administracyjnego oraz skargi kasacyjnych do Naczelnego Sądu Administracyjnego.",
  },
]
