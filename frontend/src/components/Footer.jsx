import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 absolute'>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* .........Left Section.............. */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel alias esse cumque culpa vitae. Minus perspiciatis deserunt recusandae odio, debitis quasi. Est optio quae nam fuga itaque, amet pariatur?</p>
        </div>

        {/* .........Center Section.............. */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>

        {/* .........Right Section.............. */}
        <div >
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>7905082606</li>
                <li>yabhisek915@gmail.com</li>
            </ul>
        </div>

     </div>
     {/*------------------------------ Copyright text--------------------------- */}
     <div>
       <hr />
       <p className='py-5  text-center '>Copyright 2024@ prescripto - All Right Reserved</p>
     </div>
    </div>
  )
}

export default Footer