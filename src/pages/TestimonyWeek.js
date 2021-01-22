
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { importTestimonies } from '../paths/Api-paths'
import { Card } from '../lib/Card'
import { GridLayout } from '../styles/Styles'

// useEffect()
// so here it should be a fetch connected to week..
// can this also be props then somehow?

// for specific week related to week {/* <Link to={`/movies/${id}`}> */}
// but how do I make it so it first only filters out weeks and then id related to that
// week?

export const TestimonyWeek = () => {
  const [testimony, setTestimony] = useState([])

  useEffect(() => {
    fetch(importTestimonies)
      .then((response) => response.json())
      .then((json) => setTestimony(json.allTestimonies))
  }, [])

  return (
    <div>
      <h1> Week X </h1>
      {/* {testimony.length} */}
      {/* {testimony.map((week) => week.when_weeks)} */}
      <GridLayout>
        {testimony.map((week, key) => (
          <Card
            key={key}
            title={week.when_weeks}
            createdAt={week.createdAt}
            secondaryText={week.name} />
          // <p tabIndex='0' className='time'>{message.name ? message.name : "Anonymous"}</p>
          // <p tabIndex='0' className='time'>{moment(message.createdAt).fromNow()}</p>
          // ADD ANONYMOUS for default in front-end
        ))}
      </GridLayout>
    </div>
  )
}
