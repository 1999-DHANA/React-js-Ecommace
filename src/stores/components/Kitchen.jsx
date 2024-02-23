import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {


    const firstFiveImages= kitchenData.slice(0,5)

  return (
    <>
       <div className='proTitle'>
           <h1>Kitchen</h1>
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

export default Kitchen