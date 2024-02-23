import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Mobilepages = () => {

 const[selectProduct,setselectProduct]=useState([])
    
 const companyHandler=(mango)=>{
  if(selectProduct.includes(mango)){
    setselectProduct(selectProduct.filter(item=>item!==mango))
  }else{
    setselectProduct([mango])
  }
 }

 const filteredproduct=selectProduct.length===0?
 mobileData:mobileData.filter((orange)=>{
  selectProduct.includes(orange.company)
 })


  return (
    <>
    <Navbar/>
    <div className='fullpage'>
      

    <div className='pro-selected'>
      {
        mobileData.map((phone)=>{
          return(
            <div className='pro-input'>
              <label>
                <input type="checkbox" 
                 checked={selectProduct.includes(phone.company)}
                 onChange={()=>companyHandler(phone.company)}

                />
                {phone.company}
              </label>
            </div>
          )
        })
      }

    </div>





     <div className='pageSection'>
       {
        mobileData.map((item)=>{
            return(
                <div>
                    <Link to={`/mobile/${item.id}`}>
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
    </div>
    </>
  )
}

export default Mobilepages