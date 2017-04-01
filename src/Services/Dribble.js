'use strict'

import { request } from '../Services/Request'

class Dribble {
  getShots (filter) {
    return request.get(filter).then((result) => {
      return result.data
    })
  }
}

export let dribble = new Dribble()
