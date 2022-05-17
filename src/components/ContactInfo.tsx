import React from 'react'

import {FaPhoneVolume,FaAngleDoubleRight} from "react-icons/fa"
import {MdEmail,MdLocationPin} from "react-icons/md"


const Contact = () => {
  return (
    <section className='w-full min-h-fit px-8 py-4 flex items-center my-2 justify-between rounded-b-full rounded-t-full bg-primary-orange'>
      <div className='text-white flex w-4/12 items-center'>
        <FaPhoneVolume className='text-primary-orange bg-white w-10 h-10 p-2 rounded-md'/>
        <div  className='ml-2 flex flex-col justify-center items-start'>
          <p className='font-bold'>Phone</p>
          <a href="tel:+011234564590" className='text-xs'>+01 123-456-4590</a>
        </div>
      </div>
      <div className='text-white flex w-4/12'>
        <div className='flex justify-start items-center'>
          <FaAngleDoubleRight className='text-white w-8 h-8'/>
          <MdEmail className='text-primary-orange bg-white w-10 h-10 p-2 rounded-md'/>          
        </div>
        <div className='ml-2 flex flex-col justify-center items-start'>
          <p className="font-bold">Email</p>
          <a href="mailito:youremail@gmail.com" className='text-xs'>youremail@gmail.com</a>
        </div>
      </div>
      <div className='text-white flex w-4/12'>
        <div className='flex justify-start items-center'>
          <FaAngleDoubleRight className='text-white w-8 h-8'/>
          <MdLocationPin className='text-primary-orange bg-white w-10 h-10 p-2 rounded-md'/>
        </div>
        <div  className='ml-2 flex flex-col justify-center items-start'>
          <p className="font-bold">Location</p>
          <a href="https://www.google.com/maps/place/Bogot%C3%A1/@4.6486259,-74.2478966,11z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9bfd2da6cb29:0x239d635520a33914!8m2!3d4.7109886!4d-74.072092" className='text-xs'>800, Lorem Street, US</a>
        </div>
      </div>
    </section>
  )
}

export default Contact