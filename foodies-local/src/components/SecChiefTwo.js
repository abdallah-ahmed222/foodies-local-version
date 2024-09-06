import React from 'react'
import { Container } from 'react-bootstrap'

export default function SecChiefTwo() {
  return (
    <div>
        <Container fluid className='d-flex align-items-center flex-column flex-lg-row px-0 section'>
            <div className='sec-chief-two d-none d-lg-block'></div>
            <div className='sec-flavor-cheif'>
                <div className='flavor-container text-white'>
                    <div className='d-flex flex-column align-items-start justify-conyent-start flex-wrap'>
                        <div className='heading-wraber '>
                            <h2 className="text mb-5 ">Rowing, Then Pizza</h2>
                            <h3 className='sec-chief-title text-white text-uppercase'>Jonathan</h3>
                            <h3 className='sec-chief-title text-white text-uppercase'> Doerr</h3>
                            <p className=' second-text p-2 fw-light mb-5'>A big green salad is one of my go-to meals all year round. In the summer, the lettuces I find at the farmers market are so soft & sweet that a big green summer salad is really a treat.</p>
                            <h3 className='text-signature'>Jonathan Doerr</h3>
                        </div>
                    </div>
                </div>
            </div>
            
         </Container>
    </div>
  )
}

