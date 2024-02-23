import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navSection'>
        <div className='title'>
           <Link to="/"><h2>E-mart</h2></Link>
        </div>
        <div className='search'>
            <input type="text" placeholder='Search...' />
        </div>
        <div className='user'>
           <div className='userdetail'>SignIn/SignUp</div>
           <div className='Cart'>Cart</div>
        </div>
    </div>
    <div className='subMenu'>
       <ul>
        <Link to='/mobile'><li>Mobiles</li></Link>
         <Link to='/computer'><li>Computers</li></Link>
         <Link to='/watch'><li>Watches</li></Link>
         <Link to='/womenwear'><li>WomenWear</li></Link>
         <Link to='/men'><li>MenWear</li></Link>
         <Link to='/ac'><li>AC</li></Link>
          <Link to='/kitchen'><li>Kitchen</li></Link>
          <Link to='/tv'><li>TV</li></Link>
          <Link to='/furniture'><li>Furniture</li></Link>
          <Link to='/fridge'><li>Fridge</li></Link>
          <Link to='/speaker'><li>Speaker</li></Link>
          <Link to='/book'><li>Books</li></Link>
       </ul>
    </div>
    </>
  )
}

export default Navbar