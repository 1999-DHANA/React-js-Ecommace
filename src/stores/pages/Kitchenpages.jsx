import React from 'react'
import Navbar from '../components/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom' 

const Kitchenpages = () => {
  return (
    <>
             <Navbar/>
     <div className='pageSection'>
       {
        kitchenData.map((item)=>{
            return(
                <div>
                   <Link to={`/Kitchen/${item.id}`}>
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

export default Kitchenpages