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

  const handlePageClick = (page:number):void => {
    setActivePage(page)
    setPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='pages'>

        <button className={`page-btn ${getActivePage(1)}`} onClick = {() => {handlePageClick(1)}}>1</button>
        <button className={`page-btn ${getActivePage(2)} `} onClick = {() => {handlePageClick(2)}}>2</button>
        <button className={`page-btn ${getActivePage(3)}`} onClick = {() => {handlePageClick(3)}}>3</button>
        <button className={`page-btn ${getActivePage(4)}`} onClick = {() => {handlePageClick(4)}}>4</button>
        <button className={`page-btn ${getActivePage(5)}`} onClick = {() => {handlePageClick(5)}}>5</button>
        <button className={`page-btn ${getActivePage(6)}`} onClick = {() => {handlePageClick(6)}}>6</button>
        <button className={`page-btn ${getActivePage(7)}`} onClick = {() => {handlePageClick(7)}}>7</button>
        <button className={`page-btn ${getActivePage(8)}`} onClick = {() => {handlePageClick(8)}}>8</button>
        <button className={`page-btn ${getActivePage(9)}`} onClick = {() => {handlePageClick(9)}}>9</button>
        <button className={`page-btn ${getActivePage(10)}`} onClick = {() => {handlePageClick(10)}}>10</button>
        

      
    </div>
  )
}

export default Pages
