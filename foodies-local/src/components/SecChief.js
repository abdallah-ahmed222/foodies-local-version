import React from 'react'
import { Container } from 'react-bootstrap'

export default function SecChief() {
  return (
    <div>
        <Container fluid className='d-flex align-items-center flex-column flex-lg-row px-0 section mb-5'>
            <div className='sec-flavor-cheif'>
                <div className='flavor-container text-white'>
                    <div className='d-flex flex-column align-items-start justify-conyent-start flex-wrap'>
                        <div className='heading-wraber '>
                            <h2 className="text mb-5 ">Pizza Power</h2>
                            <h3 className='sec-chief-title text-white text-uppercase'>Peter</h3>
                            <h3 className='sec-chief-title text-white text-uppercase'> Gilmore</h3>
                            <p className=' second-text p-2 fw-light mb-5'>Not your average pasta salad! Tossed in a tangy sesame-ginger dressing and piled with green veggies and avocado, this soba noodle salad is a light, refreshing summer meal.</p>
                            <h3 className='text-signature'>Peter Gilmore</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec-chief-flavor d-none d-lg-block'></div>
         </Container>
    </div>
  )
}
