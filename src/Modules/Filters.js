'use strict'

import React, { PropTypes } from 'react'

const Filters = ({filter, search, handleFilter, handleSearch}) => (
  <div className='row'>
    <div className='col-md-12'>
      <div className='form-group'>
        <label>Ordenação</label>
        <select value={filter.sort} className='form-control' onChange={(event) => {
          handleFilter({sort: event.target.value})
        }}>
          <option value=''>Popular</option>
          <option value='recent'>Recent</option>
          <option value='views'>Most Views</option>
          <option value='comments'>Most Comments</option>
        </select>
      </div>
    </div>

    <div className='col-md-12'>
      <div className='form-group'>
        <label>Listar por</label>
        <select value={filter.list} className='form-control' onChange={(event) => {
          handleFilter({list: event.target.value})
        }}>
          <option value=''>Shots</option>
          <option value='debuts'>Debuts</option>
          <option value='teams'>Team Shots</option>
          <option value='playoffs'>Playoffs</option>
          <option value='rebounds'>Rebounds</option>
          <option value='animated'>Animated GIFs</option>
          <option value='attachments'>Shots with Attachments</option>
        </select>
      </div>
    </div>

    <div className='col-md-12'>
      <div className='form-group'>
        <label>Periodo</label>
        <select value={filter.timeframe} className='form-control' onChange={(event) => {
          handleFilter({timeframe: event.target.value})
        }}>
          <option value=''>Now</option>
          <option value='week'>This Past Week</option>
          <option value='month'>This Past Month</option>
          <option value='year'>This Past Year</option>
          <option value='ever'>All Time</option>
        </select>
      </div>
    </div>

    <div className='col-md-12'>
      <div className='form-group'>
        <label>Limite</label>
        <select value={filter.per_page} className='form-control' onChange={(event) => {
          handleFilter({per_page: event.target.value})
        }}>
          <option value='12'>12</option>
          <option value='24'>24</option>
          <option value='60'>60</option>
          <option value='120'>120</option>
        </select>
      </div>
    </div>

    <hr />

    <div className='col-md-12'>
      <label>Palavra chave (Somente cards ja carregados)</label>
      <input type='text' className='form-control' value={search} onChange={handleSearch} onKeyUp={handleSearch} placeholder='buscar' />
    </div>

  </div>
)

Filters.defaultProps = {
  filter: PropTypes.object.isRequired
}

export default Filters
