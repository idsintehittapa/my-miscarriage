import React from 'react'
import { Helmet } from 'react-helmet'

import { Card } from '../lib/Card'

export const Testimonies = () => {
  const TITLE = 'Testimonies'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Card title="week x" secondaryText="jada"/>
    </>
  )
}