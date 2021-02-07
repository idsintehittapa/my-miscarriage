import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { StartPage } from './pages/StartPage'
import { About } from './pages/About'
import { Testimonies } from './pages/Testimonies'
import { TestimonyWeek } from './pages/TestimonyWeek'
import { TestimonyDetails } from './pages/TestimonyDetails'
import { Share } from './pages/Share'
import { Moderator } from './pages/Moderator'
import { SignUp } from './pages/SignUp'
import { TestimoniesModerator } from './pages/TestimoniesModerator'
import { ModeratorInspect } from './pages/TestimoniesModeratorInspect'
import { Contact } from './pages/Contact'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={StartPage} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={Testimonies} path="/testimonies" exact />
        <Route component={TestimonyWeek} path="/testimonies/week/:week" exact />
        <Route component={TestimonyDetails} path="/testimonies/week/:week/:id" exact />
        <Route component={Share} path="/share" exact />
        <Route component={Moderator} path="/moderator" exact />
        <Route component={SignUp} path="/moderator/signup" exact />
        <Route component={TestimoniesModerator} path="/moderator/posts" exact />
        <Route component={ModeratorInspect} path="/moderator/posts/:id" exact />
        <Route component={Contact} path="/contact" exact />
      </Switch>
    </BrowserRouter>
  )
}
