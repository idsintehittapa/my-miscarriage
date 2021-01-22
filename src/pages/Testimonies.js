import React from 'react'
import { Helmet } from 'react-helmet'
import { Route, Link } from 'react-router-dom'

import { Card } from '../lib/Card'
import { GridLayout } from '../styles/Styles'
import { TestimonyWeek } from './TestimonyWeek'

// all images has to be tha same size, so I need a wrapper later
const cardInfo = [
  {
    Week: 'Week 6',
    Img: require('../assets/isa1.png') // unsure this will work live? or that required is a good approach here
  },
  {
    Week: 'Week 7',
    Img: require('../assets/14050.jpg')
  },
  {
    Week: 'Week 8',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 9',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 10',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 11',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 12',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 13',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 14',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 15',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 16',
    Img: 'https://www.fillmurray.com/300/200',
    Alt: 'Img of...'
  },
  {
    Week: 'Week 17',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 18',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 19',
    Img: 'https://www.fillmurray.com/300/200'
  },
  {
    Week: 'Week 20',
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
      <Link to="/testimonies/testimony">
        {/* <Link to={`/books/${book.bookID}`}>
      <Link to={`/testimonies${?when_weeks=}`}> */}
        <GridLayout>
          {cardInfo.map((weeks, key) => (
            <Card key={key} coverImg={weeks.Img} title={weeks.Week} secondaryText="2" />
          ))}
        </GridLayout>
      </Link>

      <Route path="/testimonies/testimony">
        <TestimonyWeek />
      </Route>

    </>
  )
}