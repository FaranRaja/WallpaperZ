import React from 'react'
import { Flame , TrendingUp , Shuffle , Sparkles , MountainSnow } from 'lucide-react'
import { useState } from 'react'


enum Category {
  POPULAR = 'POPULAR',
  TRENDING = 'TRENDING',
  RANDOM = 'RANDOM',
  AESTHETIC = 'AESTHETIC',
  NATURE = 'NATURE'
}

const Top2 = () => {

  const [selected,setSelected] = useState<Category>(Category.POPULAR)

  const handleSelection = (category:Category):void => {
    setSelected(category)
  }

  const getActive = (category:Category):string => {
    return (selected === category ? "active-cat" : "")
  }

  return (
    <div className='top-2'>
        <button className={`diff-i ${getActive(Category.POPULAR)}`} onClick = {() => {handleSelection(Category.POPULAR)}}><Flame /> POPULAR</button>
        <button className={`diff-i ${getActive(Category.TRENDING)}`} onClick = {() => {handleSelection(Category.TRENDING)}}><TrendingUp /> TRENDING</button>
        <button className={` diff-i ${getActive(Category.RANDOM)}`} onClick = {() => {handleSelection(Category.RANDOM)}}><Shuffle /> RANDOM</button>
        <button className={`diff-i ${getActive(Category.AESTHETIC)}`} onClick = {() => {handleSelection(Category.AESTHETIC)}}><Sparkles /> AESTHETIC</button>
        <button className={`diff-i ${getActive(Category.NATURE)}`} onClick = {() => {handleSelection(Category.NATURE)}}><MountainSnow /> NATURE</button>
        
        
      
    </div>
  )
}

export default Top2
