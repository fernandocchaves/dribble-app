'use strict'

import { request } from '../Services/Request'

class Dribble {
  getShots (filter) {
    return request.get('/shots', filter).then((result) => {
      return result.data
    })
  }

  getShot (id) {
    return request.get('/shots/' + id).then((result) => {
      return result.data
    })
  }
}

export let dribble = new Dribble()
