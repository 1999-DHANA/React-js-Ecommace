import React from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'

const Bookpages = () => {
  return (
    <>
           <Navbar/>
        <div className='pageSection'>
       {
           booksData.map((item)=>{
            return(
                <div>
                    <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='proModel'>
                        {item.title}
                    </div>
                </div>
            )
        })
       }

    </div>
    </>
  )
}

export default Bookpages