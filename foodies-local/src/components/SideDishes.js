import React from 'react'
import { Container } from 'react-bootstrap'
import image from '../assets/homemade-small-vegetarian-pizza-on.jpg'
export default function SideDishes() {
  return (
    <div>
        <Container>
            <div className='side-dishes pt-5 section'>
                <div className='d-flex justify-content-center align-items-center gap-2 pb-3'>
                    <div className='border-top  border-dark sec-border'></div>
                    <div><h2 className='text'>Our Popular Menus</h2></div>
                    <div className='border-top border-dark sec-border'></div>
                </div>
                <div className='text-center mb-5'>
                    <h2 className='title'>Side Dishes</h2>
                </div>



                <div className='d-flex side-image-container flex-lg-row flex-column align-items-center gap-0 mx-5 mb-5'>
                    <div className='w-50  d-none d-lg-block'>
                        <img src={image} alt='vegetarian' className='img'/>
                    </div>
                    <div className='side-menu bg-black'>
                       <div className='d-flex align-items-center flex-wrap side-menu-content'>
                        <div className='text-center mb-4'>
                            <h2 className='side-header'>We cook simple food. For real</h2>
                        </div>
                        <div>
                            <div className='content mb-3'>
                                <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Carbonara</h3>
                                    <p className='fs-5 m-0'>$12.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>A comforting classic combines the wonderful flavors or fresh cream,</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-100'>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Bolognese</h3>
                                    <p className='fs-5 m-0'>$9.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Homemade bolognese sauce served with your choice of pasta.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Spaghetti Marinara</h3>
                                    <p className='fs-5 m-0'>$10.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Fresh prawns, calamari, NZ Green mussles, served in a homemade</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Arrabiata</h3>
                                    <p className='fs-5 m-0'>$8.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Literally translated as "angry" pasta in Italian, we make our own sauce</p>
                                </div>

                            </div>
                        </div>

                       </div> 
                    </div>


                </div>

                <div className='d-flex flex-lg-row flex-column align-items-center gap-4 mx-5 mb-5'>
                <div className='side-menu bg-black'>
                       <div className='d-flex align-items-center flex-wrap side-menu-content'>

                        <div>
                            <div className='content mb-3'>
                                <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Carbonara</h3>
                                    <p className='fs-5 m-0'>$12.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>A comforting classic combines the wonderful flavors or fresh cream,</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-100'>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Bolognese</h3>
                                    <p className='fs-5 m-0'>$9.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Homemade bolognese sauce served with your choice of pasta.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Spaghetti Marinara</h3>
                                    <p className='fs-5 m-0'>$10.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Fresh prawns, calamari, NZ Green mussles, served in a homemade</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Arrabiata</h3>
                                    <p className='fs-5 m-0'>$8.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Literally translated as "angry" pasta in Italian, we make our own sauce</p>
                                </div>

                            </div>
                        </div>

                       </div> 
                    </div>
                    <div className='side-menu bg-black'>
                       <div className='d-flex align-items-center flex-wrap side-menu-content'>
                        <div>
                            <div className='content mb-3'>
                                <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Carbonara</h3>
                                    <p className='fs-5 m-0'>$12.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>A comforting classic combines the wonderful flavors or fresh cream,</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-100'>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Bolognese</h3>
                                    <p className='fs-5 m-0'>$9.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Homemade bolognese sauce served with your choice of pasta.</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Spaghetti Marinara</h3>
                                    <p className='fs-5 m-0'>$10.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Fresh prawns, calamari, NZ Green mussles, served in a homemade</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='content mb-3'>
                            <div className='d-flex align=items-center text-white justify-content-between flex-column flex-lg-row'>
                                    <h3>Arrabiata</h3>
                                    <p className='fs-5 m-0'>$8.0</p>
                                </div>
                                <div>
                                    <p className='menu-content-desc'>Literally translated as "angry" pasta in Italian, we make our own sauce</p>
                                </div>

                            </div>
                        </div>

                       </div> 
                    </div>

                </div>

            </div>
        </Container>
    </div>
  )
}
