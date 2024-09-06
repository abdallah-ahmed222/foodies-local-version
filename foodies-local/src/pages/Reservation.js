import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaMobileAlt,
  FaStore,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SecAvailable from "../components/SecAvailable";
import HomeHeading from "../components/HomeHeading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom/dist";

export default function Reservation() {
  const navigate = useNavigate();
  const homeData = {
    firstText: "MORE FLAVOR FOR LESS",
    secondText: "MAKE A",
    thirdText: "RESERVATION",
  };
  const handleSupmit = (e) => {
    e.preventDefault();
    toast.success("Reservation Complete");
    navigate("/");
  };
  return (
    <div className="sec-reservation">
      <HomeHeading home={homeData} />
      <Container>
        <div className="d-flex flex-column text-center text-lg-start flex-lg-row pt-5 align-items-center mb-5 justify-content-between gap-5">
          <div className="contact-info">
            <h2 className="mb-4">Our Address</h2>
            <p className="mb-0">Lake House, 13 Hanway,</p>
            <p className="mb-4">Square, London, UK</p>
            <h2 className="mb-4">Reserve by Phone</h2>
            <div className="d-flex align-items-center gap-3 mb-2">
              <FaStore />
              <span>Restaurant : +45 453 3432</span>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <FaMobileAlt />
              <span>Cellphone : +45 453 3445</span>
            </div>
            <ul className="footer-list  list-unstyled w-75 ">
              <li className="reservation-contact d-flex justify-content-center w-75 m-auto gap-3 me-2 mt-2">
                <Link
                  to="/"
                  className="d-flex rounded-circle text-black d-block p-2 align-items-center justify-content-center">
                  <FaWhatsapp />
                </Link>
                <Link
                  to="/"
                  className="d-flex rounded-circle text-black d-block p-2 align-items-center justify-content-center">
                  <FaFacebookF />
                </Link>
                <Link
                  to="/"
                  className="d-flex rounded-circle text-black d-block p-2 align-items-center justify-content-center">
                  <FaTwitter />
                </Link>
                <Link
                  to="/"
                  className="d-flex rounded-circle text-black d-block p-2 align-items-center justify-content-center">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <Form className="flex-grow-1 ms-5" onSubmit={handleSupmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                xl={6}
                lg={6}
                xs={12}
                md={12}
                sm={12}
                controlId="formGridName">
                <Form.Label className="form-label">Your Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group
                as={Col}
                xl={6}
                lg={6}
                xs={12}
                md={12}
                sm={12}
                controlId="formGridEmail">
                <Form.Label className="form-label">Your Email</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                xl={6}
                lg={6}
                xs={12}
                md={12}
                sm={12}
                controlId="formGridPhone">
                <Form.Label className="form-label">Phone Number</Form.Label>
                <Form.Control type="number" required />
              </Form.Group>
              <Form.Group
                as={Col}
                xl={6}
                lg={6}
                xs={12}
                md={12}
                sm={12}
                controlId="formGridPassword">
                <Form.Label className="form-label">Type of Event</Form.Label>
                <Form.Select defaultValue="Choose..." required>
                  <option>—Please choose an option—</option>
                  <option>Open House</option>
                  <option>Wedding</option>
                  <option>Business Event</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                xl={6}
                lg={6}
                xs={12}
                md={12}
                sm={12}
                controlId="formGridEmail">
                <Form.Label className="form-label">
                  {" "}
                  Number of Guests
                </Form.Label>
                <Form.Select defaultValue="Choose..." required>
                  <option>—Please choose an option—</option>
                  <option>0-25</option>
                  <option>26-50</option>
                  <option>51+</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                xl={6}
                lg={6}
                xs={12}
                md={12}
                sm={12}
                controlId="formGridPassword">
                <Form.Label className="form-label"> Date of Event</Form.Label>
                <Form.Control type="date" timeFormat="yyy-mm-dd" required />
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="form-btn py-3 px-4">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <SecAvailable />
    </div>
  );
}
