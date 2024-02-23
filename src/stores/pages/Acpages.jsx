import React from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const Acpages = () => {
  return (
    <>
          <Navbar/>
     <div className='pageSection'>
       {
        acData.map((item)=>{
            return(
                <div>
                   <Link to={`/ac/${item.id}`}>
                   <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                   </Link>
                    <div className='proModel'>
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })
       }

    </div>
    </>
  )
}

export default Acpages