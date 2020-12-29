import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import { StartPage } from 'pages/StartPage'
import { About } from '../pages/About'
import { Share } from '../pages/Share'

// Q: How making this update not inside the header? - check damien's video
// it does so if you go into the path directly but not when clicking on links..
// is it because it's outside of main?

export const Header = () => {
  return (
    <header>
    <Router>
    <div>+</div>
      <nav>
        <ul>
        {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <Route path='/'>
          <li>
            <Link to="/about">About</Link>
          </li>
          </Route>
          <li>
            <Link to="/share">Share</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      {/* <Route path="/">
          <StartPage /> */}
        {/* </Route> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/share">
          <Share />
        </Route>
      </Switch>
  </Router>
  </header>
)
}