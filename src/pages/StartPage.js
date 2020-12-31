import React from 'react'
import styled from 'styled-components/macro'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
`

export const StartPage = () => {
  return (
    <Main>
      <Title> miscarriage / mɪsˈkarɪdʒ</Title>
      <h2> noun </h2>
      <h3> "the spontaneous or unplanned expulsion of a fetus from the womb before it is able to
      survive independently."
      </h3>
      <h4>
        Please note that these stories are not censored and contains language that can be triggering.
      </h4>
    </Main>
  )
}