'use strict'

import React, { Component } from 'react'
import Shots from '../Modules/Shots'
import { dribble } from '../Services/Dribble'

class ShotList extends Component {

  constructor () {
    super()
    this.state = {
      shots: [],
      data: [],
      filter: {
        per_page: 12,
        sort: '',
        list: '',
        timeframe: ''
      },
      search: ''
    }
  }

  handleFilter (object) {
    const merge = Object.assign(this.state.filter, object)
    this.setState({
      filter: merge,
      search: ''
    })

    dribble.getShots(merge).then((response) => {
      this.setState({
        shots: response,
        data: response
      })
    })
  }

  handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const value = e.target.value

    this.setState({
      search: value
    })

    if (keyCode === ENTER) {
      this.setState({
        shots: this.state.data.filter((shot) => {
          const regex = new RegExp(value, 'i')
          return regex.test(shot.title)
        })
      })
    }
  }

  componentDidMount () {
    dribble.getShots(this.state.filter).then((response) => {
      this.setState({
        shots: response,
        data: response
      })
    })
  }

  render () {
    return <Shots
      shots={this.state.shots}
      filter={this.state.filter}
      search={this.state.search}
      handleFilter={(object) => this.handleFilter(object)}
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

export default ShotList
