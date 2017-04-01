'use strict'

import { render } from 'react-dom'
import router from './Configs/Routing'

const rootElement = document.querySelector('[data-js="app"]')

render(router, rootElement)
