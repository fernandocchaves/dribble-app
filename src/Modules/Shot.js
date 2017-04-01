'use strict'

import React, { PropTypes } from 'react'
import Header from '../Modules/Header'
import Details from '../Modules/Details'
import Title from '../Modules/Title'
import Figure from '../Modules/Figure'
import { Link } from 'react-router-dom'

const Shot = ({ shot }) => (
  <div className='container'>
    <Header title={'Shot - ' + shot.title} />

    <ul className='breadcrumb'>
      <li><Link to='/'>Listagem</Link></li>
      <li className='active'>Shot</li>
    </ul>

    <div className='row shot-card'>

      <div className='col-md-4'>
        {!!shot.images && <Figure shot={shot} />}
      </div>

      <div className='col-md-8'>
        <Title shot={shot} />
        <Details shot={shot} />
      </div>

    </div>
  </div>
)

Shot.propTypes = {
  shot: PropTypes.object.isRequired
}

export default Shot
