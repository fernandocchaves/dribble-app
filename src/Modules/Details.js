'use strict'

import React, { PropTypes } from 'react'

const Details = ({shot}) => (
  <ul className='list-unstyled'>
    <li>Views: {shot.views_count}</li>
    <li>Comments: {shot.comments_count}</li>
    <li>Likes: {shot.likes_count}</li>
  </ul>
)

Details.defaultProps = {
  shot: PropTypes.object.isRequired
}

export default Details
