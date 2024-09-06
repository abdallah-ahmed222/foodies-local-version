import React from 'react'
import { Container ,Button } from 'react-bootstrap'
import secImg from "../assets/sec2.png"
import signter from "../assets/signeture.PNG"
import secArrow from "../assets/arrow-removebg-preview.png"
import {  } from 'bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
export default function SecTaste()
{
    useEffect(() => {
        Aos.init({duration : 1000})
    },[])
    return (
        <div className='main-container  mb-5 section'>
            <Container fluid className='  d-flex align-items-center flex-column flex-lg-row'>
                <div className='hone-container text-center mt-0 px-4 position-relative'>
                    <div className='position-absolute top-0 end-0 d-flex flex-column justify-content-end align-items-end w-50'>
                        <p className='text-center fs-3 w-100 text-delicious'>Simply Delicious</p>
                        <img src={secArrow} alt='section-img' className='w-75'/>
                    </div>
                    <img src={secImg} alt='section-img' className='w-75'/>
                    <Button to="ourmenu" as={ Link } data-aos-once="true" data-aos="zoom-in-down" className=' top-50 start-75 translate-middle position-absolute fw-bold rounded-circle text-uppercase bg-black border-0 text-center p-0 m-0  fs-4'>Order Now</Button>
                </div>
                <div className='hone-container py-5  text-center text-xl-start '>
                    <p className='sec-text fw-light'> <span className='fw-bold sec-text'> We are a small boutique catering company </span>
                        specializing in creating unique and personalized experiences to handle any of your event needs.</p>
                    <p className='title-text'>TASTE THE MEDITERRANEAN CULTURE</p>
                    <p className='sec-text'>Lorem ipsum dolor sit enim ametys consec atetur adipisicing elit  eiusmo tempors incididunts labore dolore magna aliqua enim mini veniam quis nostrud exercitation ullamcos laboris nisiut aliquip consequat reprehenderit.</p>
                    <img src={signter} alt='signter' />
                </div>
            </Container>
            
        </div>
    )
}
