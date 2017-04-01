'use strict'

import React, { PropTypes } from 'react'
import Header from '../Modules/Header'
import Filters from '../Modules/Filters'
import ShotCard from '../Modules/ShotCard'

const Shots = ({ shots, filter, search, handleFilter, handleSearch }) => (
  <div className='container'>
    <Header title='Listando Shots' />

    <ul className='breadcrumb'>
      <li className='active'>Listagem</li>
    </ul>

    <div className='row'>

      <div className='col-md-4'>
        <Filters filter={filter} search={search} handleFilter={handleFilter} handleSearch={handleSearch} />
      </div>

      <div className='col-md-8 shot-list'>
        <div className='row'>
          {shots.map(shot =>
            <ShotCard key={shot.id} shot={shot} />
          )}
        </div>
      </div>
    </div>
  </div>
)

Shots.propTypes = {
  shots: PropTypes.array.isRequired
}

export default Shots
