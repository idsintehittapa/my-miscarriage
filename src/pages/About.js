import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components/macro'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
`

const H2 = styled.h2`
  font-size: 2em;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 1.8em;
  text-align: center;
  font-style: oblique;
`

const ContainerText = styled(Container)`
  max-width: 800px;
`
const P = styled.p`
text-align: justify;
`

const H4 = styled(P)`
  font-size: 1.5em;
`

export const About = () => {
  const TITLE = 'About'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        <H2>What about it?</H2>
        <H3>"If you don't mention it yourself, nobody talks about miscarriage.
        Now that I have told friends and family,
        many have been through the same thing; but it is not something we talk openly about?"
        </H3>
      </Container>

      <ContainerText>
        <H4>Some header to the left!</H4>
        <P>About 30% of all pregnancies end in a miscarriage. Early miscarriages occur before 12 weeks,
        and they are usually due to something going wrong in early fetal development,
        leading to an ejection. Although a miscarriage is very tragic, it is usually not something
          that could have been changed or prevented; it is the body's way of ending an undeveloped pregnancy.</P>

        <P>A miscarriage often begins with more or less heavy bleeding. Pain is also common.
        Some early miscarriages are taken care of by the body, but sometimes medical treatment
        or dilatation and curettage may be necessary to end the miscarriage. After the miscarriage,
        it usually takes about a month before menstruation returns. The first menstruation after a
        miscarriage may be heavier than usual, however, the flow and intervals usually return to
          normal the next cycle. </P>

        <H4>Some header to the left!</H4>
        <P>By talking about our miscarriages, we can break the taboo, share experiences
        to support and help someone going through it. There is scarce information covering
        what one could experience before, during, and after a miscarriage. Could it hurt?
        For how long could I bleed? Could the period change afterward? Etc.
        </P>

        <H4>Some header to the left!</H4>
        <P> MM is a platform where anonymous testimonies are shared. These have been collected
        from open social media platforms or shared. Have you had a miscarriage? You are far
        from alone. Please share your experience and break the silence culture!
        </P>

        <P> The page does not distinguish between miscarriages/missed abortions/missed miscarriage/
        and, or silent miscarriage.
        </P>
      </ContainerText>
    </>
  )
}