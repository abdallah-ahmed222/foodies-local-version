import React from 'react'
import { Container  } from 'react-bootstrap'
import secImg from "../assets/dlf.pt-pizza-png-4930314.png"
import secArrow from "../assets/arrow-removebg-preview.png"
import {  } from 'bootstrap';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function FlavorLife() 

    {
        useEffect(() => {
            Aos.init({duration : 1000})
        },[])
  return (
    <div>
        <Container fluid className='  d-flex align-items-center flex-column flex-lg-row my-5'>
                <div className='hone-container text-center mt-0 px-4 position-relative'>
                    <div className='position-absolute top-0 end-0 d-flex flex-column justify-content-end align-items-end w-50'>
                        <p className='text-center fs-3 w-100 text-delicious'>Simply Delicious</p>
                        <img src={secArrow} alt='section-img' className='w-75'/>
                    </div>
                    <img src={secImg} alt='section-img' className='w-75'/>
                </div>
                <div className='hone-container py-3  text-center text-xl-start '>
                    <p className='title-text'>The flavors of life are just a bite away</p>
                    <p className='sec-text'>Lorem ipsum dolor sit enim ametys consec atetur adipisicing elit  eiusmo tempors incididunts labore dolore magna aliqua enim mini veniam quis nostrud exercitation ullamcos laboris nisiut aliquip consequat reprehenderit.</p>
                </div>
         </Container>
    </div>
  )
}
