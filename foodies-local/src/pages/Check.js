import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import HomeHeading from "../components/HomeHeading";
import { toast } from "react-toastify";
import { clearCart } from "../rtk/slices/CartSlice";
import { useNavigate } from "react-router-dom";
export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homeData = {
    firstText: "MORE FLAVOR FOR LESS",
    secondText: "check out",
  };

  const handleSupmit = (e) => {
    e.preventDefault();
    toast.success("Check Out Done");
    localStorage.clear();
    dispatch(clearCart());
    navigate("/");
  };
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((acc, item) => {
    acc += +item.price * item.quantity;
    return acc;
  }, 0);
  return (
    <div className=" ">
      <HomeHeading home={homeData} />
      <Container className="my-4">
        <Form
          className="d-flex justify-content-between align-items-center flex-column flex-lg-row"
          onSubmit={handleSupmit}>
          <div className="w-50 mx-3">
            <h3>Checkout</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>your name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>country</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>street address</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>phone</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>email address</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                payment
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Direct bank transfer "
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  required
                />
                <Form.Check
                  type="radio"
                  label="Check payments"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Cash on delivery"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="summry w-25">
            <h3 className="fs-2">Summry</h3>
            <div className=" ">
              <p className="d-flex align-items-center justify-content-between fs-4">
                <span>Original:</span> <span> ${total}</span>
              </p>
              <p className="border-bottom m-0 d-flex align-items-center justify-content-between fs-4">
                <span>Discounts</span> <span> ${0}</span>
              </p>
              <p className="fs-4">total is ${total}</p>
              <Button type="submit" className="form-btn m-0 fs-4 text-black">
                Proceed
              </Button>
              <p className=" mt-3  -50 fs-4">30-Day Money-Back Guarantee</p>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}
