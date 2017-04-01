'use strict'

import React, { PropTypes } from 'react'
import Details from '../Modules/Details'
import Title from '../Modules/Title'
import Figure from '../Modules/Figure'
import { Link } from 'react-router-dom'

const ShotCard = ({shot}) => (
  <div className='col-md-4 shot-card'>
    <div className='thumbnail'>
      <Link to={'/shot/' + shot.id}>
        <Figure shot={shot} />
      </Link>
      <div class='caption'>
        <Link to={'/shot/' + shot.id}>
          <Title shot={shot} />
        </Link>
        <Details shot={shot} />
      </div>
    </div>
  </div>
)

ShotCard.defaultProps = {
  shot: PropTypes.object.isRequired
}

export default ShotCard
