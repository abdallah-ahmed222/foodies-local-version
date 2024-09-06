import { Container } from 'react-bootstrap'
import HomeHeading from '../components/HomeHeading'
import SecServingUp from '../components/SecServingUp'
import SecNewFlavor from '../components/SecNewFlavor'
import SecFood from '../components/SecFood';
import FlavorLife from '../components/FlavorLife'
import SecChief from '../components/SecChief'
import SecChiefTwo from '../components/SecChiefTwo'

function About()
{
    const homeData = {
        firstText :"MORE FLAVOR FOR LESS",
        secondText:"About",
        thirdText:"Our Team",
        fourthText: "They are the best ever,The restaurants in Hangzhou also catered to many northern Chinese." ,
    }
    return (
        <div>
            <Container fluid className='text-black g-0'>
                <HomeHeading home = {homeData}/> 
                <h1 className='text-black fs-1 text-center mt-0 pt-0 mb-3'>Meet Our World Class Chiefs</h1>
                <SecNewFlavor/>
                <FlavorLife/>
                <SecServingUp/>
                < SecChief/>
                <SecChiefTwo/>
                <SecFood/>
            </Container>
        </div>
    );
}

export default About;
