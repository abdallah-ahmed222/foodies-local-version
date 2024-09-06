import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart ,increase, decrease } from '../rtk/slices/CartSlice';
import Table from 'react-bootstrap/Table';
import HomeHeading from '../components/HomeHeading';

function Cart()
{
    const homeData = {
        firstText :"MORE FLAVOR FOR LESS",
        secondText:"Your Cart",
        fourthText: "We're Waiting for your visit" ,
    };
    const cart = useSelector( state => state.cart )
    const total = cart.reduce( ( acc, item ) =>
    {
        acc += +item.price * item.quantity ;
        return acc
    }, 0 )
    const dispatch = useDispatch()
    return (
        <div>
        <HomeHeading home = {homeData}/> 

        <Container className='cart pt-3'>
            { cart.length ? <div className='d-flex position-relative justify-content-between align-items-center flex-column flex-lg-row'>
                <Table bordered hover  className='w-75 my-4
                '>
                    <thead className='text-center'>
                        <tr className='fs-4'>
                            <th>Id</th>
                            <th>Item Name</th>
                            <th>Item picture</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody className="g-4 text-center">
                        { cart.map( ( item, index ) =>
                        (
                            <tr key={ item.id }>
                                <td className='fs-4'>{ index + 1 }</td>
                                <td className='fs-3'>{ item.title }</td>
                                <td>
                                    <img src={ item.src } alt='img' className='img-fluid' />
                                </td>
                                <td className='fs-5'>{ item.price }</td>
                                <td className='fs-5'>{item.quantity}  <button onClick={() => dispatch(increase(item))} className='mb-3 cart-btn'>+</button>
                                <button onClick={() => dispatch(decrease(item))} className='cart-btn'>-</button></td>
                                <td className='cart py-5 align-items-center'>
                                    <button onClick={ () => dispatch( removeFromCart( item ) ) } className='cart-btn' >remove</button>
                                </td>
                            </tr>
                        ) ) }
                    </ tbody>
                </Table>
                <div className='w-25 text-center d-flex flex-column align-items-center cart mb-3'>
                    <h2 className='fs-1'>checkout</h2>
                    <p className='fs-4'>total price is { total } $</p>
                    <Button as={ Link } className="form-btn fs-4 px-3 m-auto" to="/checkout">Buy</Button>
                </div>
            </div> : <div className='d-flex justify-content-center align-items-center flex-column last-div'>
                <h3 className='  text-center '>You don't have any items to Check </h3>
                <Button as={ Link } className="app-nav__btn" to="/">Order</Button>
            </div>
            }
        </Container>
        </div>
    );
}

export default Cart;
