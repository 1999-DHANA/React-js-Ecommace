import React from 'react'
import { useParams } from 'react-router-dom'
import { kitchenData } from '../stores/data/kitchen'
import Navbar from '../stores/components/Navbar'

const Kitchensingle = () => {


    
    const {id}=useParams()

    const Product=kitchenData.find((item)=>item.id===id)

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

export default Kitchensingle