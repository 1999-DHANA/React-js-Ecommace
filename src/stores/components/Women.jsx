import React from 'react'
import { womanData } from '../data/woman'

const Women = () => {

    const firstFiveImages=womanData.slice(0,5)

  return (
    <>
        <div className='proTitle'>
        <h1>Women Dressing</h1>
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

export default Women