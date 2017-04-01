'use strict'

import React, { Component } from 'react'
import Ajax from '@fdaciuk/ajax'

class Authorize extends Component {

  constructor () {
    super()
    this.state = {
      shot: {}
    }
  }

  componentDidMount () {
    const code = this.getParameterByName('code', this.props.location.search)

    Ajax({
      headers: {
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).post('https://dribbble.com/oauth/token', {client_id: '5abe88edad4df084c983baca130b5d527e0c3761066c9177c3bdfd836b5dd36e', 'client_secret': '9a8b7818c0bc8e2248dbd9f864d4e0f19b4cb381a1807cd5273d30f71678cdbd', 'code': code}).then((result) => {
      console.log(result)
    })
  }

  getParameterByName (key, params) {
    key = key.replace('\\$&')

    let regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)')
    let results = regex.exec(params)

    if (!results) return null
    if (!results[2]) return ''

    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  render () {
    return <h1>Olá</h1>
  }
}

export default Authorize
