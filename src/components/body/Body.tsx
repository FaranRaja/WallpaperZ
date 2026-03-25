import React from 'react'
import { useState } from 'react'
import Top2 from './Top2'

const Body = () => {

    const [selected,setSelected] = useState<string>("popular")
  return (
    <div className='body'>
      

      <Top2 />
    </div>
  )
}

export default Body
