import React from 'react'
import { useState } from 'react'

interface pageProps {
    setPage : (page:number) => void
}
const Pages = ({setPage}:pageProps) => {

  const [activePage, setActivePage] = useState<number>(1)

  const getActivePage = (page:number):string => {
    return (activePage === page ? "active-page" : " ")
  }
  return (
    <div className='pages'>

        <button className={`page-btn ${getActivePage(1)}`}>1</button>
        <button className={`page-btn ${getActivePage(2)}`}>2</button>
        <button className={`page-btn ${getActivePage(3)}`}>3</button>
        <button className={`page-btn ${getActivePage(4)}`}>4</button>
        <button className={`page-btn ${getActivePage(5)}`}>5</button>
        <button className={`page-btn ${getActivePage(6)}`}>6</button>
        <button className={`page-btn ${getActivePage(7)}`}>7</button>
        <button className={`page-btn ${getActivePage(8)}`}>8</button>
        <button className={`page-btn ${getActivePage(9)}`}>9</button>
        <button className={`page-btn ${getActivePage(10)}`}>10</button>
        

      
    </div>
  )
}

export default Pages
