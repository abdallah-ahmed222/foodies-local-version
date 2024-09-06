import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SecNewFlavor() {
  return (
    <div>
         <Container fluid className='d-flex align-items-center flex-column flex-lg-row px-0 section'>
            <div className='sec-flavor'>
                <div className='flavor-container text-white'>
                    <div className='d-flex flex-column align-items-start justify-conyent-start flex-wrap'>
                        <div className='heading-wraber '>
                            <h2 className="text mb-4 ">A Fresh Perspective </h2>
                            <h3 className='sec-flavor-title text-white text-uppercase'>New flavors and old memories</h3>
                            <p className=' second-text p-2 fw-light'>Not your average pasta salad! Tossed in a tangy sesame-ginger dressing and piled with green veggies and avocado, this soba noodle salad is a light, refreshing summer meal.</p>
                        </div>
                        <Button to="about" as={ Link } className='app-nav__btn header p-3 mx-0 fw-bold text-uppercase'>more about us</Button>
                    </div>
                </div>
            </div>
            <div className='sec-pizza-flavor d-none d-lg-block'></div>
         </Container>
    </div>
  )
}
