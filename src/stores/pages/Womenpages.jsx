import React from 'react'
import Navbar from '../components/Navbar'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom' 
const Womenpages = () => {
  return (
    <>
          <Navbar/>
     <div className='pageSection'>
       {
        womanData.map((item)=>{
            return(
                <div>
                  <Link to={`/womenwear/${item.id}`}>
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

export default Womenpages