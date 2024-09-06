
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
function HomeHeading(props)
{
    const content  = props.home
    useEffect(() => {
        Aos.init({duration : 4000})
    },[])
    return (
        
        <div className='section main-head d-flex align-items-center'>
           <Container className="pt-4">
            <div className='d-flex align-items-center flex-column flex-lg-row'>
                <div className='hone-container '>
                    <div className='d-flex align-items-start'>
                        <div className="heading-wraber d-flex  flex-column">
                            <h2 className=" m-0 mt-2 pe-1 text mb-4 ">{content.firstText} </h2>
                              <h1 className='header-text text-white text-uppercase'>{content.secondText}</h1>
                              <h1 className='header-text text-white text-uppercase' data-aos ="fade-left" data-aos-once="true"  data-aos-duration="4000">{content.thirdText}</h1>
                        </div> 
                    </div>
                    <p className='second-text p-2 '>{content.fourthText}</p>
                    {content.visibe  ?  <Button to="ourmenu" as={ Link } className='app-nav__btn header p-3 mx-0 fw-bold text-uppercase'>view our menus</Button> : null}
                   
                </div>
            </div>
        </Container> 
    </div> 


      


    )
}
export default HomeHeading;