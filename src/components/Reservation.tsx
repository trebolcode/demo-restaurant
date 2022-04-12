import React from 'react'
import imgReservation from "../assets/img/imgReservation.jpg"
/* Nuevo pull */
const Reservation = () => {
  return (
  <section className="bg-[url('/src/assets/img/bgReservation.jpg')] bg-cover bg-bottom py-[70px] flex w-full h-auto justify-center">
  		  <div className="px-[15px] font-[Rubik]  w-[570px] h-[438.75]">
  				  <h2 className='font-medium text-[30px] pb-[10px] leading-[120%]'>Welcome To <span className='text-[#d65106]'>Live Dinner Restaurant</span></h2>
  				  <h4 className='font-medium text-base pb-[10px] leading-[120%]'>Little Story</h4>
  				  <p className='leading-[1.8] text-[18px] mb-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
  				  <p className='leading-[1.8] text-[18px] mb-[16px]'>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
  				  <a className="absolute px-[30px] py-[12px] text-[16px] bg-[#d65106] text-[#ffffff] uppercase cursor-pointer font-[600] border-[#d65106] border-[2px] border-transparent rounded-[3px] hover:bg-[#333333] transition duration-[300ms] ease-in-out" href="#">Reservation</a>
  		  </div>
  		  <div className="px-[15px]">
  			  <img src={imgReservation} alt="" className="w-[100%] h-[438.75px] shadow-[20px_20px_0px_0px_rgba(214,81,6,1)]" />
  		  </div>
  </section>
    )
  } 
  
export default Reservation
