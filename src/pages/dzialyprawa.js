import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ListElement from "./../components/Elements/listElement"
import StyledH3 from "../components/Elements/styledH3"

const PageContainer = styled.div`
  width: 90%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: 1023px) {
    flex-direction: row;
    max-width: 1200px;
    margin: auto;
  }
`
const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 80%;
  /* border-left: 1px solid #cdbba5; */
`

const Aktualnosci = () => (
  <Layout>
    <SEO title="dzialy-prawa" />
    <PageContainer>
      <StyledH3 margin={"5% 0"} text={"Działy prawa "} />
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
    entryText: "",
    text: `Kancelaria świadczy pomoc prawną w sprawach z zakresu prawa cywilnego: osobowego, rzeczowego, zobowiązaniowego oraz spadkowego. Dopowyższych spraw należą w szczególności: sprawy o ochronę dóbr osobistych, sprawy dotyczące nieruchomości (m.in. sprzedaż, najem, zasiedzenie,zniesienie współwłasności, służebności, usuwanie wad prawnychnieruchomości, postępowanie wieczystoksięgowe), umów (m.in. zlecenia, odzieło, świadczenia usług, nabywania i zbywania składników majątkowych iniemajątkowych, cesji wierzytelności, darowizny, użyczenia, pożyczki) sprawyzwiązane z zarządzaniem nieruchomościami przez wspólnoty mieszkaniowe, podział majątku wspólnego małżonków, stwierdzenie nabycia spadku, działspadku, doradztwo w zakresie dziedziczenia.`,
  },
  {
    name: "§ 2. Windykacja oraz postępowanie egzekucyjne",
    entryText: "",
    text: `Windykacja ugodowa to usługa, w ramach której dochodzimy dla naszych Klientów wymagalnych należności. Pomagamy także dłużnikom w negocjacjach warunków spłaty zobowiązań. Dochodzenie należności w ramach postępowania egzekucyjnego obejmuje wszczęcie postępowania oraz udział w dalszych czynnościach. W ramach postępowania egzekucyjnego Kancelaria reprezentuje zarówno wierzycieli jak i dłużników. W zakresie działalności znajdują się także skargi na czynności komornika.`,
  },
  {
    name: "§ 3. Prawo Gospodarcze",
    entryText: "",
    text: `Kancelaria prowadzi obsługę podmiotów gospodarczych, w ramach której w szczególności tworzy powyższe podmioty (m.in. spółki osobowe, spółki kapitałowe, spółdzielnie, stowarzyszenia, fundacje) oraz reprezentuje je przed sądem rejestrowym, obsługuje proces korporacyjny, w tym przygotowanie projektów uchwał zgromadzenia wspólników i innych organów spółek kapitałowych, regulaminów działania organów korporacyjnych oraz statutów podmiotów gospodarczych.`,
  },
  {
    name: "§ 4. Prawo rodzinne",
    entryText: "",
    text:
      "Kancelaria udziela pomocy prawnej w sprawach z zakresu prawa rodzinnego, w szczególności w sprawach o rozwód, o separację, dotyczących obowiązku alimentacyjnego, władzy rodzicielskiej, kontaktów z dziećmi, ustalania i zaprzeczania pochodzenia dziecka, ubezwłasnowolnienia, rozstrzygania o istotnych sprawach rodziny. Ponadto kancelaria zajmuje się sprawami z zakresu poddania przymusowemu leczeniu.",
  },
  {
    name: "§ 5. Prawo pracy",
    entryText: "",
    text: `Kancelaria świadczy pomoc zarówno pracodawcom jak i pracownikom. Świadczy pracodawcom doradztwo w prowadzenia dokumentacji pracowniczej, przy sporządzaniu i rozwiązywaniu umów o pracę oraz umów cywilnoprawych. Kancelaria reprezentuje zarówno pracodawców, jak i pracowników w sporach przed sądami powszechnymi (np. z tytułu roszczeń o przywrócenie do pracy odszkodowanie za bezzasadne rozwiązanie stosunku pracy, ustalenie istnienia stosunku pracy, zapłatę za przepracowane nadgodziny).`,
  },
  {
    name: "§ 6. Prawo karne",
    entryText: "",
    text:
      "Kancelaria oferuje kompleksową obronę osób fizycznych w procesach karnych, zarówno w postępowaniu przygotowawczym, jak i postępowaniu przed sądami powszechnymi oraz reprezentuje pokrzywdzonych na wszystkich etapach postępowania karnego. Kancelaria ponadto reprezentuje skazanych w postępowaniu wykonawczym i postępowaniu w sprawie wydania wyroku łącznego.",
  },
  {
    name: "§ 7. Postępowanie w sprawach nieletnich",
    entryText: "",
    text:
      "Kancelaria prowadzi pomoc nieletnim, w stosunku do których toczy się postępowanie w przedmiocie demoralizacji lub popełnienia czynu karalnego.",
  },
  {
    name: "§ 8. Prawo administracyjne ",
    entryText: "",
    text:
      "Kancelaria udziela pomocy prawnej w sprawach z zakresu prawa administracyjnego, w szczególności w zakresie zagadnień prawnych wynikających z prawa budowlanego, procesu inwestycyjnego,zagospodarowania przestrzennego (m.in. ocenia przydatność nieruchomości do danego procesu inwestycyjnego), wymeldowania, zmiany nazwiska. W ramach powyższych usług przygotowuje odwołania od decyzji administracyjnych, sporządzana skargi do Wojewódzkiego Sądu Administracyjnego oraz skargi kasacyjnych do Naczelnego Sądu Administracyjnego.",
  },
]
