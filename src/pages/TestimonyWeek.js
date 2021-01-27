
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { Link } from 'react-router-dom'

// import { importTestimonies } from '../paths/Api-paths'
import { Carousel } from '../components/Carousel'
import { Card } from '../lib/Card'

import {
  Container,
  GridLayout,
  Title
} from '../styles/Styles'

// opening a card to read it!

export const TestimonyWeek = (request) => {
  const [testimony, setTestimony] = useState([])
  const [page, setPage] = useState(1)

  const { week } = request.match.params

  useEffect(() => {
    // if ( moderator ) {
    //   const url = `http://localhost:8080/testimonies?when_weeks=${week}`
    // } else {
    //   const url = `http://localhost:8080/testimonies?when_weeks=${week}&status=accepted`
    // }
    fetch(`http://localhost:8080/testimonies?when_weeks=${week}`)
      .then((response) => response.json())
      .then((json) => setTestimony(json.allTestimonies))
  }, [week])

  const pageForward = () => {
    setPage(page + 1)
  }

  const pageBackward = () => {
    setPage(page - 1)
  }
  return (
    <>
      <Container>
        <Title> Week {week} </Title>
        <GridLayout>
          {testimony.map((weeks, key) => (
            <Link key={key} to={`/testimonies/week/${weeks.when_weeks}/${weeks._id}`}>
              <Card
                key={key}
                title={weeks.when_weeks}
                createdAt={moment(weeks.createdAt).format('ll')}
                secondaryText={weeks.name} />
              {/* // secondaryText={weeks.name ? week.name : 'Anonymous'} /> */}
              {/* <p tabIndex='0' className='time'>{message.name ? message.name : "Anonymous"}</p> */}
              {/* // ADD ANONYMOUS for default in front-end */}
            </Link>
          ))}
        </GridLayout>
        <div>
          <p>{`Page ${page} / ${page}`}</p>
          <button type="button" onClick={pageBackward} disabled={page === 1}>Previous Page</button>
          <button type="button" onClick={pageForward} disabled={page === 10}>Next Page</button>
        </div>
        <h3>Jump to another Week of testimonies</h3>
      </Container>
      <Carousel />
    </>
  )
}