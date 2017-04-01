'use strict'

import axios from 'axios'
import api from '../Constants/Api'

class Request {
  get (params) {
    if (params === undefined) {
      params = {}
    }

    return axios.get(api.baseUrl + '/shots', {
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
