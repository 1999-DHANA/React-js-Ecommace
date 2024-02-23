import React from 'react'

import { mobileData } from '../stores/data/mobiles' 
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'

const Mobilesingle = () => {


  const {id}=useParams()

  const Product=mobileData.find((item)=>item.id===id)


  return (
  <>
  <Navbar/>
    <div className='ind-section'>
      <div className='ind-image'>
         <img src={Product.image} alt="" />
      </div>
     <div className='ind-details space'>
        <div className='ind-company'>
            <h2>{Product.company}</h2>
        </div>
     <div className='ind-model space'>
        <h3>{Product.model}</h3>
      </div>
      <div className='ind-price space'>
         <h2>{Product.price}</h2>
      </div>
      <div className='ind-desc space'>
        <p>
            {Product.description}
        </p>
      </div>
      <button>add to card</button>
     </div>
    </div>
  </>
  )
}

export default Mobilesingle