import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/foodies.png"
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars, FaCartArrowDown  } from "react-icons/fa"


function AppNav()
{
    const cart = useSelector( state => state.cart );
    const [ show, setShow ] = useState( false );
    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );
    const [navbar,setNavbar] = useState(false);

const changeBackground =()=>{
 if(window.scrollY>=80){
    setNavbar(true)
 }
 else{
    setNavbar(false)
 }
}
window.addEventListener('scroll',changeBackground)




    return (
        <Navbar className={navbar ? 'main-nav active section' :'main-nav section'} sticky="top" expand="lg">
            <Container className='d-flex justify-content-between'>
                <Link to="/" className='d-flex align-items-center justify-content-between navbar-brand'>
                    <div className='d-flex flex-column align-itmes-center justify-content-center text-center app-nav__container text-light'>
                        <img className='nav-logo img-fluid' src={ logo } alt='logo' />
                    </div>
                </Link>
                <div className='nav-links__container d-flex justify-content-evenly align-items-center   d-none d-lg-flex  '>
                    <Link to="/" className='  nav-link app-nav__link'>Home<span></span></Link>
                    <Link to='ourmenu' className='  nav-link app-nav__link position-relative me-1'>OUR MENUS<span></span></Link>
                    <Link to='about' className='  nav-link app-nav__link position-relative me-1'>ABOUT US<span></span></Link>
                    <Link to='reservation' className='  nav-link app-nav__link position-relative me-1'>RESERVATION <span></span></Link>
                    <Link to='cart' className=' nav-link app-nav__link position-relative me-1'>Cart <FaCartArrowDown className='pb-1' /> <p className='cart-length position-absolute'>{ cart.length }</p> <span></span></Link>

                    <Button to="Ordermeal" as={ Link } className='app-nav__btn text-center'>ORDER MEAL</Button>
                </div>
                <div className='d-block d-lg-none'>
                    <Button variant="primary" onClick={ handleShow } className="border-0 bg-transparent fs-4">
                        <FaBars/>
                    </Button>
                    <Offcanvas show={ show } onHide={ handleClose } className="ofcanvas-set">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <div className='d-flex align-items-center justify-content-between navbar-brand'>
                                    <img className='nav-logo img-fluid' src={ logo } alt='logo' />
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='g-4'>
                                <Link to="/" className='mb-3 nav-canvas__link nav-link app-nav__link'>Home<span></span></Link>
                                <Link Link to='ourmenu' className='mb-3 nav-canvas__link nav-link app-nav__link position-relative me-1'>OUR MENUS<span></span></Link>
                                <Link to='about' className='mb-3 nav-canvas__link nav-link app-nav__link position-relative me-1'>ABOUT US<span></span></Link>
                                <Link to='reservation' className='mb-3 nav-canvas__link nav-link app-nav__link position-relative me-1'>RESERVATION <span></span></Link>
                                <Link to='cart' className='mb-3 nav-canvas__link nav-link app-nav__link position-relative me-1'>Cart <FaCartArrowDown className='pb-1' /> <p className='cart-length position-absolute'>{ cart.length }</p> <span></span></Link>
                                <Button to="Ordermeal" as={ Link } className='app-nav__btn mx-0  text-center'>ORDER MEAL</Button>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </Container>
        </Navbar >
    );
}

export default AppNav;