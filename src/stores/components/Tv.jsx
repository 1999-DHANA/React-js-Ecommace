import React from 'react'
import { tvData } from '../data/tv'

const Tv = () => {


    const firstFiveImages=tvData.slice(0,5)

  return (
    <>
         <div className='proTitle'>
        <h1>Tv</h1>
        </div>
          <div className='proSection'>{
             firstFiveImages.map((Item)=>{
                return(
                   <div className='imgBox'>
                      <img className='proImage' src={Item.image} alt="" />
                   </div>
            )
        })
        
        }
        </div>
    </>
  )
}

export default Tv