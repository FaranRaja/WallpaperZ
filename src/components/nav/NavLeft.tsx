import React from 'react'
import Categories from './Categories'
import Search from './Search'
import Infinity from './Infinity'

const NavLeft = () => {
  return (
    <div className='nav-l'>
      <Categories />
      <Infinity />
      <Search />
    </div>
  )
}

export default NavLeft
