'use strict'

import React, { Component } from 'react'
import Shot from '../Modules/Shot'
import { dribble } from '../Services/Dribble'

class ShotShow extends Component {

  constructor () {
    super()
    this.state = {
      shot: {}
    }
  }

  componentDidMount () {
    const shotId = this.props.match.params.shotId

    dribble.getShot(shotId).then((response) => {
      this.setState({
        shot: response
      })
    })
  }

  render () {
    return <Shot
      shot={this.state.shot}
    />
  }
}

export default ShotShow
