import React from 'react'
import Navbar from '../components/Navbar'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom' 

const Watchespages = () => {
  return (
    <>
          <Navbar/>
     <div className='pageSection'>
       {
        watchData.map((item)=>{
            return(
                <div>
                  <Link to={`/watch/${item.id}`}>
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

export default Watchespages