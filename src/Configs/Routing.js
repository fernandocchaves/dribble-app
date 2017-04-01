import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShotList from '../Components/ShotList'
import ShotShow from '../Components/ShotShow'

const router = (
  <Router>
    <div>
      <Route exact path='/' component={ShotList} />
      <Route path='/shot/:shotId' component={ShotShow} />
    </div>
  </Router>
)

export default router
