'use strict'

import axios from 'axios'
import api from '../Constants/Api'

class Request {
  get (route, params) {
    if (params === undefined) {
      params = {}
    }

    return axios.get(api.baseUrl + route, {
      headers: {
        'Authorization': 'Bearer ' + api.token
      },
      params: params
    }).then((result) => {
      return result
    })
  }
}

export let request = new Request()
