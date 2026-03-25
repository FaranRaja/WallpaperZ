import React from 'react'


interface pageProps {
    setPage : (page:number) => void
}
const Pages = ({setPage}:pageProps) => {
  return (
    <div className='pages'>

        <button className='page-btn'>1</button>
        <button className='page-btn'>2</button>
        <button className='page-btn'>3</button>
        <button className='page-btn'>4</button>
        <button className='page-btn'>5</button>
        <button className='page-btn'>6</button>
        <button className='page-btn'>7</button>
        <button className='page-btn'>8</button>
        <button className='page-btn'>9</button>
        <button className='page-btn'>10</button>
        

      
    </div>
  )
}

export default Pages
