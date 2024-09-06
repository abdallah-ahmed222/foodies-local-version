import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SecServingUp() {
  return (
    <div>
        <Container fluid className='d-flex align-items-center flex-column flex-lg-row px-0 mb-5 section'>
        <div className='sec-serving-up d-none d-lg-block'></div>
            <div className='sec-flavor'>
                <div className='flavor-container text-white'>
                    <div className='d-flex flex-column align-items-start justify-conyent-start'>
                        <div className='heading-wraber '>
                            <h2 className="text mb-4 ">Serving up Soul </h2>
                            <h3 className='sec-flavor-title text-white text-uppercase'>Satisfy your soul with our Creole cuisine</h3>
                            <p className=' second-text p-2 fw-light'>A big green salad is one of my go-to meals all year round. In the summer, the lettuces I find at the farmers market are so soft & sweet that a big green summer salad is really a treat.</p>
                        </div>
                        <Button to="reservation" as={ Link } className='app-nav__btn header p-3 mx-0 fw-bold text-uppercase'>View Our Locations</Button>
                    </div>
                </div>
            </div>
         </Container>
    </div>
 
  )
}
