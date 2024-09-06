
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

import { addToCart } from '../rtk/slices/CartSlice';

export default function ContentCard( props )
{
    const items = props.data;
    const dispatch = useDispatch()

    return (
        <>
            {
                items.map( ( item ) =>
                (
                    <Col key={ item.id } className="d-flex justify-content-center card-column">
                        < Card className='item-card d-flex justify-content-center align-items-center py-3 border-0'>
                            <Card.Img variant="top" src={ item.src } alt='img' className='w-100 card-img' />
                            <Card.Body className='w-100 d-flex align-items-start flex-column'>
                                <Card.Title className='fw-bold w-100 fs-3 text-start'>{ item.title }</Card.Title>

                                <Card.Text className='m-0 w-100 text-start'>
                                    { item.disc }
                                </Card.Text>
                              <p className='m-0 card-price pt-2 fs-5 text-black'>{ item.price } $</p>
                            </Card.Body>
                            <Card.Body className='d-flex justify-content-between align-items-center w-100'>
                                
                               
                                <button onClick={ () => dispatch( addToCart( item ) ) } className='border-3 px-4 py-2 w-100 bg-white fs-5'>Add To Cart</button>

                            </Card.Body>
                        </Card >
                    </Col>
                ) )
            }
        </>



    );
}