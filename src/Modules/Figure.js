'use strict'

import React, { PropTypes } from 'react'

const Figure = ({shot}) => (
  <figure>
    <img className='shot-image' src={shot.images.normal} alt={shot.title} />
  </figure>
)

Figure.defaultProps = {
  shot: PropTypes.object.isRequired
}

export default Figure
