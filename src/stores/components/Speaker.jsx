import React from 'react'
import { speakerData } from '../data/speaker'

const Speaker = () => {

    const firstFiveImages=speakerData.slice(0,5)

  return (
    <>
       <div className='proTitle'>
        <h1>Speaker</h1>
        </div>
          <div className='proSection'>{
            firstFiveImages.map((Item)=>{
              return(
                <div className='imgBox'>
                    <img className='proImage' src={Item.image} alt="" />
                </div>
            )
        })
        
        }</div>
    </>
  )
}

export default Speaker