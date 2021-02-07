import React from 'react'
import { Helmet } from 'react-helmet'

import {
  AboutMain,
  Container,
  Quote,
  AboutSubTitle,
  AboutP,
  ContainerText
} from '../styles/Styles'

import { Footer } from '../components/Footer'

export const About = () => {

  const TITLE = 'About'

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* <Black> */}
      <AboutMain>
        <Container>
          <Quote>If you do not mention it yourself, nobody talks about miscarriage.
          Now that I have told friends and family,
          many have been through the same thing; but it is not something we talk openly about?
          </Quote>
        </Container>

        <ContainerText>
          <AboutSubTitle>Some header to the left!</AboutSubTitle>
          <AboutP>About 30% of all pregnancies end in a miscarriage. Early miscarriages occur
          before 12 weeks, and they are usually due to something going wrong in early
          fetal development,leading to an ejection. Although a miscarriage is very
          tragic, it is usually not something that could have been changed or prevented;
          it is the body's way of ending an undeveloped pregnancy.
          </AboutP>

          <AboutP>A miscarriage often begins with more or less heavy bleeding. Pain is also common.
          Some early miscarriages are taken care of by the body, but sometimes medical treatment
          or dilatation and curettage may be necessary to end the miscarriage.
          After the miscarriage, it usually takes about a month before menstruation returns.
          The first menstruation after a miscarriage may be heavier than usual, however,
          the flow and intervals usually return to normal the next cycle.
          </AboutP>

          <AboutSubTitle>Some header to the left!</AboutSubTitle>
          <AboutP>By talking about our miscarriages, we can break the taboo, share experiences
          to support and help someone going through it. There is scarce information covering
          what one could experience before, during, and after a miscarriage. Could it hurt?
          For how long could I bleed? Could the period change afterward? Etc.
          </AboutP>

          <AboutSubTitle>Some header to the left!</AboutSubTitle>
          <AboutP> MM is a platform where anonymous testimonies are shared. These have been collected
          from open social media platforms or shared. Have you had a miscarriage? You are far
          from alone. Please share your experience and break the silence culture!
          </AboutP>

          <AboutP> The page does not distinguish between miscarriages/missed
          abortions/missed miscarriage/and, or silent miscarriage.
          </AboutP>
        </ContainerText>
      </AboutMain>
      <Footer/>
    </>
  )
}