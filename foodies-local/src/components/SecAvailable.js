import React from 'react'
import { Button, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'
export default function SecAvailable() {
  return (
    <div>
        <Container className='d-flex align-items-center flex-column flex-lg-row px-0 mb-5 section'>
        <div className='avaliable-img d-none d-lg-block'></div>
            <div className='sec-flavor sec-avalible'>
                <div className='avalibale-container text-white'>
                    <div className='d-flex flex-column align-items-start justify-conyent-start'>
                        <div className='heading-wraber '>
                            <h2 className="text mb-4 ">Enjoy at home </h2>
                            <h3 className='sec-flavor-title text-white text-uppercase'>Takeout also</h3>
                            <h3 className='sec-flavor-title text-white text-uppercase'>available</h3>
                            <p className=' second-text p-2 fw-light'>In the summer, the lettuces I find at the farmers market are so soft & sweet that a big green summer salad is really a treat.</p>
                        </div>
                        <Button to="/ourmenu" as={ Link } className='app-nav__btn header mx-0 fw-bold text-uppercase'>View Takeout Menu</Button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}