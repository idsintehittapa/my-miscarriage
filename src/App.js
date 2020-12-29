import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
// import { StartPage } from './pages/StartPage'

import { Footer } from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Switch>
        <Route path='/' exact>
          <StartPage />
        </Route>
      </Switch> */}
      <Footer />
    </BrowserRouter>
  )
}
