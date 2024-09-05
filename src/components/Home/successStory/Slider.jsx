import React from 'react'
import { SuccesStories } from '../../../Data/data'

const Slider = () => {
  return (
    <div>
        {SuccesStories.map((story) => {
          return <div key={story.image}>

          </div>
        })}
    </div>
  )
}

export default Slider
