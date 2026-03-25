import React from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'


const Search = () => {

  const [searchValue, setSearchValue] = useState<string>("")

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setSearchValue(e.target.value)
  }
  
  const handleSearch = () => {
    setSearchValue("")
  }
  return (
    <div className='search-div'>

      <input type="text" placeholder="Search" className='search-fld' value = {searchValue} onChange = {(e) => {
        updateValue(e)}}/>
      <SearchIcon onClick = {handleSearch}/>
      
    </div>
  )
}

export default Search
