import React from 'react'
import { Helmet } from 'react-helmet'
// import { FullPage, Slide } from 'react-full-page'

import {
  Main,
  StartBackground,
  TitleStarterPage,
  H2,
  H3,
  H4,
  StarterWrapper,
} from '../styles/Styles'

import { Footer } from '../components/Footer'

export const StartPage = () => {
  const TITLE = 'My Miscarriage'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <StarterWrapper>
        <StartBackground>
          <Main>
            <TitleStarterPage> miscarriage</TitleStarterPage>
            <H2> noun </H2>
            <H3>[ˌmɪsˈkærɪdʒ]</H3>
            <H4> The spontaneous or unplanned expulsion of a fetus from the
            womb before it is able to survive independently.
            </H4>
          </Main>
        </StartBackground>
        {/* <Main>
          <About />
        </Main> */}
      </StarterWrapper>
      <Footer />
    </>
  )
}