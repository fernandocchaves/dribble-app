'use strict'

import React, { PropTypes } from 'react'

const Title = ({shot}) => (
  <h3 className='shot-title'>{shot.title}</h3>
)

Title.defaultProps = {
  shot: PropTypes.object.isRequired
}

export default Title
