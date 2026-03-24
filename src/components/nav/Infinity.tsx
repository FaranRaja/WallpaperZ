import React from 'react'
import { useState } from 'react'
import { Infinity as InfinityIcon} from 'lucide-react'

const Infinity = () => {

    const [isEnable, setEnable] = useState<boolean>(false)

    const handleInfi = () => {
        setEnable(!isEnable)
    }
  return (
    <div className={`infi ${isEnable ? "active-infi" : ""}`} onClick = {handleInfi}>
      <InfinityIcon className='infi-i '/>
    </div>
  )
}

export default Infinity
