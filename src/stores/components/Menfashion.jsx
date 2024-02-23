import React from 'react'
import { menData } from '../data/men' 

const Menfashion = () => {

    const firstFiveImages= menData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
        <h1>Men Fashion</h1>
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

export default Menfashion