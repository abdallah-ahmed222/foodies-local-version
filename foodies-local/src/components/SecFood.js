import React from 'react'
import DefcoImg from '../assets/pizza-deco1 (1).png'
import DefcoImgTwo from '../assets/pizza-deco2 (1).png'
import { Button, Container } from 'react-bootstrap'
import secArrow from "../assets/arrow-removebg-preview.png"
import { Link } from 'react-router-dom'
import secImg from "../assets/delicious-pizza-png.png"
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
 function SecFood(props) {
    const show = props.visible
    useEffect(() => {
        Aos.init({duration : 2000})
    },[])
  return (
    <div className='pt-5 section'>
        <Container>
         <div className='d-flex align-items-center justify-content-evenly'>
            <div className='move' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <img src={DefcoImg} alt='pizza-defco'/>
            </div>
            <div className='text-center'>
                <h2  data-aos="zoom-in-left" data-aos-once="true" className='sec-food-header mb-0'>
                    <span>DELICIOUS</span>
                
                </h2>
                <h2 className='sec-food-header mb-0'>Food With</h2>
                <h2 className='sec-food-header'>Meaning</h2>
            </div>
            <div>
                <img data-aos="fade-down"  data-aos-anchor-placement="bottom-bottom" src={DefcoImgTwo} alt='pizza-defco'/>
            </div>
        </div>
        <div className='position-relative'>
            <div className='text-center'>
               <div className='position-absolute top-0  start-0 ms-5 d-flex flex-column justify-content-end align-items-start w-50'>
                        <p className='text-start fs-3 w-100 text-delicious'>Savor the flavors</p>
                        <img src={secArrow} alt='section-img' className='w-50 food-arrow'/>
                </div>
                <img src={secImg} alt='section-img' className='w-75 sec-food-img '/>
                {show === true ?  <Button to="ourmenu" as={ Link } className='top-50 start-75 translate-middle position-absolute rounded-circle text-uppercase border-0 sec-food-btn'>Order Now </Button> : null}
               
            </div>

        </div>

        </Container>


    </div>
  )
}
export default  SecFood;
