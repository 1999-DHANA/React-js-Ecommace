import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom' 

const Menpages = () => {
  return (
    <>
        <Navbar/>
     <div className='pageSection'>
       {
        menData.map((item)=>{
            return(
                <div>
                  <Link to={`/men/${item.id}`}>
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

export default Menpages