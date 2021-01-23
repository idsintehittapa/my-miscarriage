import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { Card } from '../lib/Card'
import { GridLayout } from '../styles/Styles'

// all images has to be tha same size, so I need a wrapper later
const cardInfo = [
  {
    Week: 6,
    Img: require('../assets/isa1.png') // unsure this will work live? or that required is a good approach here
  },
  {
    Week: 7,
    Img: require('../assets/14050.jpg')
  },
  {
    Week: 8,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 9,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 10,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 11,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 12,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 13,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 14,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 15,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 16,
    Img: 'https://www.fillmurray.com/300/200',
    Alt: 'Img of...'
  },
  {
    Week: 17,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 18,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 19,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 20,
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Unknown Week',
    Img: 'https://www.fillmurray.com/300/200'
  }
]

export const Testimonies = () => {

  const TITLE = 'Testimonies'
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <GridLayout>
        {cardInfo.map((weeks, key) => (
          <Link key={key} to={`/testimonies/${weeks.Week}`}>
            <Card key={key} coverImg={weeks.Img} title={weeks.Week} secondaryText="2" />
          </Link>
        ))}
      </GridLayout>
    </>
  )
}