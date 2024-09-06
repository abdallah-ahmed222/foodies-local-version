import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Filter from '../components/Filter';
import HomeHeading from '../components/HomeHeading';


function Order()
{
    const homeData = {
        firstText :"Take a Look",
        secondText:"Fast Delivery",
        thirdText:"To Every Where",
        fourthText: "Our Menu Is Down There What are You Waiting For" ,
    }
    const { data: items } = useLoaderData()
    return (
        <div>
            <HomeHeading home = {homeData}/>  

        <Container>
            <Filter data={items} />
        </Container>
        </div>
    );
}

export default Order;

