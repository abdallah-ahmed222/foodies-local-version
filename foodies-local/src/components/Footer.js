import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../assets/foodies.png"
import { FaFacebookF, FaTwitter, FaWhatsapp ,FaInstagram } from "react-icons/fa";

export default function Footer()
{
    return (
        <footer>
            <Container className="section py-5">
                <div className="footer__upper-footer d-flex justify-content-evenly text-white pb-2 mb-4 d-none d-md-flex gap-5">
                    <ul className="footer-list  w-25 list-unstyled pt-4 mb-5">
                        <li className='mb-4'><h2>Opening Hours</h2></li>
                        <li><p className='mb-1 text-time'>Monday-Wednesday: 11a-9p</p></li>
                        <li><p className='mb-1 text-time'>Thursday-Saturday: 11a-10p</p></li>
                        <li><p className='mb-0 text-time'>Happy Hour: Everyday 2p-6p</p></li>
                    </ul>
                    <ul className="footer-list  w-25 list-unstyled">
                       <li className="logo mb-5 w-100">
                            <Link to="/" className='d-flex  navbar-brand d-block w-100 align-items-center justify-content-center'>
                                <img className='footer-logo  ' src={ Logo } alt='logo' />
                            </Link>
                        </li>
                        <li><p className='mb-0 text-time w-75 m-auto'>Lake House, 13 Hanway,Square, London, UK</p></li>
                    </ul>

                    <ul className="footer-list  w-25 list-unstyled pt-4">
                        <li className='mb-4'><h2>Connect with Us</h2></li>
                        <li className="footer-contact d-flex justify-content-around w-75 m-auto">
                            <Link  to="/" className='d-flex rounded-circle  d-block p-2 align-items-center justify-content-center'>
                                <FaWhatsapp />
                            </Link>
                            <Link  to="/" className='d-flex rounded-circle  d-block p-2 align-items-center justify-content-center'>
                                <FaFacebookF />
                            </Link>
                            <Link  to="/" className='d-flex rounded-circle  d-block p-2 align-items-center justify-content-center'>
                                <FaTwitter />
                            </Link>
                            <Link  to="/" className='d-flex rounded-circle  d-block p-2 align-items-center justify-content-center'>
                                <FaInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom-footer d-flex align-items-center justify-content-between flex-column">
                <div className='nav-links__container d-flex justify-content-center gap-4 align-items-center text-white m-auto mb-3 fs-6  d-none d-lg-flex  '>
                    <Link to="/" className='  nav-link app-nav__link'>Home<span></span></Link>
                    <Link to='ourmenu' className='  nav-link app-nav__link position-relative me-1'>OUR MENUS<span></span></Link>
                    <Link to='about' className='  nav-link app-nav__link position-relative me-1'>ABOUT US<span></span></Link>
                    <Link to='reservation' className='  nav-link app-nav__link position-relative me-1'>RESERVATION <span></span></Link>
                </div>
                <p className='text-white text-time'>Copyright © 2022 Grand Restaurant Theme Demo</p>
                </div>
            </Container>
        </footer>
    )
}
