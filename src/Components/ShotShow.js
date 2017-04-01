'use strict'

import React, { Component } from 'react'
import Shot from '../Modules/Shot'
import Ajax from '@fdaciuk/ajax'

class ShotShow extends Component {

  constructor () {
    super()
    this.state = {
      shot: {}
    }
  }

  componentDidMount () {
    const shotId = this.props.match.params.shotId

    Ajax({
      headers: {
        'Authorization': 'Bearer 7c46b368a7022e77ef245e96fc9bccc401c1e1c92d2913303f031915fadd3ab8'
      }
    }).get('https://api.dribbble.com/v1/shots/' + shotId).then((result) => {
      this.setState({
        shot: result
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
