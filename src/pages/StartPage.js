import React from 'react'
import { Helmet } from 'react-helmet'
import { FullPage, Slide } from 'react-full-page';

import { About } from '../pages/About'
import {
  Main,
  TitleStarterPage,
  StarterWrapper
} from '../styles/Styles'

export const StartPage = () => {
  const TITLE = 'My Miscarriage'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <StarterWrapper>
        <FullPage controls controlsProps={{ className: 'class-name' }}>
          <Slide>
            <Main>
              <TitleStarterPage> miscarriage / mɪsˈkarɪdʒ</TitleStarterPage>
              <h2> noun </h2>
              <h3>
                <q>The spontaneous or unplanned expulsion of a fetus from the
                womb before it is able to survive independently.
                </q>
              </h3>
              <h4> Please note that these stories are not censored and contains
              language that can be triggering.
              </h4>
            </Main>
          </Slide>
          <Slide>
            <About />
          </Slide>
        </FullPage>
      </StarterWrapper>
    </>
  )
}