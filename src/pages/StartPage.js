import React from 'react'
import { Helmet } from 'react-helmet'
import { FullPage, Slide } from 'react-full-page'

import { About } from './About'
import {
  Main,
  TitleStarterPage,
  StarterWrapper,
  Test
} from '../styles/Styles'

export const StartPage = () => {
  const TITLE = 'My Miscarriage'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <StarterWrapper>
        <Test>
          {/* <FullPage
            controls
          // controlsProps={{ className: 'options' }} 
          >
            <Slide
              // style={{
              //   backgroundColor: 'lime',
              //   height: '180vh',
              //   minwidth: '768px'
              // }} >
              > */}
              <Main>
                <TitleStarterPage> miscarriage</TitleStarterPage>
                <h2> noun [ˌmɪsˈkærɪdʒ] </h2>
                <h3> The spontaneous or unplanned expulsion of a fetus from the
                womb before it is able to survive independently.
                </h3>
                <h4> This page represent testimonies of experienced miscarriages.
                The content is not intended as a substitute for professional
                medical advice, diagnosis, or treatment. Always seek the advice of your
                physician or other qualified health provider with any questions
                you may have regarding a medical condition. Please note that these
                stories are not censored and contains
                language that can be triggering.
                </h4>
              </Main>
              </Test>
              <Main>
              <About />
              </Main>
            {/* </Slide> */}
            {/* <Slide> */}
              {/* <About />
            </Slide>
          </FullPage> */}
      </StarterWrapper>
    </>
  )
}