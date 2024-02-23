import React from 'react'
import { watchData } from "../data/watch"
const Watch = () => {

    const firstFiveImages=watchData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
        <h1>Watch</h1>
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

export default Watch