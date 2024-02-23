

import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {

    const firstFiveImages=computerData.slice(0,5)

  return (
   <>
   <div className='proTitle'>
        <h1>Computers</h1>
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

export default Computers