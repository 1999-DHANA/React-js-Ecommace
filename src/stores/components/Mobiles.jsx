import React from 'react'

import { mobileData } from '../data/mobiles'

const Mobiles = () => {
   
    const firstFiveImages=mobileData.slice(0,5)

  return (
   <>
   <div className='proTitle'>
        <h1>Moblies</h1>
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

export default Mobiles