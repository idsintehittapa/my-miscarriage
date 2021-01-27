import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { cardInfo } from '../data/TestimonyCardData'
import { Card } from '../lib/Card'
import { GridLayout } from '../styles/Styles'

// all images has to be tha same size, so I need a wrapper later

export const Testimonies = () => {

  const TITLE = 'Testimonies'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <GridLayout>
        {cardInfo.map((weeks, key) => (
          <Link key={key} to={`/testimonies/week/${weeks.Week}`}>
            <Card key={key} coverImg={weeks.Img} title={weeks.Week} secondaryText="2" />
          </Link>
        ))}
      </GridLayout>
    </>
  )
}