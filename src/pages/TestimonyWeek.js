
import React, { useEffect, useState } from 'react'
import moment from 'moment'
// import { Link } from 'react-router-dom'

import { importTestimonies } from '../paths/Api-paths'
import { Card } from '../lib/Card'
import {
  Container,
  GridLayout,
  GridLayoutSmall,
  Title
} from '../styles/Styles'

// opening a card to read it!

export const TestimonyWeek = (request) => {
  const [testimony, setTestimony] = useState([])
  const [page, setPage] = useState(1)

  const { week } = request.match.params

  useEffect(() => {
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
            <Card
              key={key}
              title={weeks.when_weeks}
              createdAt={moment(weeks.createdAt).format('ll')}
              secondaryText={weeks.name} />
            // secondaryText={weeks.name ? week.name : 'Anonymous'} />
            // <p tabIndex='0' className='time'>{message.name ? message.name : "Anonymous"}</p>
            // ADD ANONYMOUS for default in front-end
          ))}
        </GridLayout>
      </Container>
      <div className="page-buttons-container">
        <p>{`Page ${page} / ${page}`}</p>
        <button type="button" onClick={pageBackward} disabled={page === 1}>Previous Page</button>
        <button type="button" onClick={pageForward} disabled={page === 10}>Next Page</button>
      </div>
      {/* this is nit working yet */}
      <Container>
        <h3>Jump to another Week of testimonies</h3>
        <GridLayoutSmall>
          {testimony.map((weeks, key) => (
            <Card>
              key={key}
              title={weeks.when_weeks}
            </Card>
          ))}
        </GridLayoutSmall>
      </Container>
    </>
  )
}
