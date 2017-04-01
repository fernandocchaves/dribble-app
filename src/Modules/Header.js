'use strict'

import React, { PropTypes } from 'react'

const Header = ({title}) => (
  <div className='page-header'>
    <h1>{title}</h1>
  </div>
)

Header.defaultProps = {
  title: PropTypes.string.isRequired
}

export default Header
