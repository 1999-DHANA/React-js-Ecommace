import React from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniturepages = () => {
  return (
    <>
      <Navbar/>
        <div className='pageSection'>
       {
        furnitureData.map((item)=>{
            return(
                <div>
                  <Link to={`/furniture/${item.id}`} >
                  <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                  </Link>
                    <div className='proModel'>
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })
       }

    </div>
    </>
  )
}

export default Furniturepages