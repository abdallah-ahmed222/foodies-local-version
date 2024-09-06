import React from "react";
import { Container, Row } from "react-bootstrap";
import ContentCard from "../components/Card";
import HomeHeading from "../components/HomeHeading";
import { Link } from "react-router-dom";
import SecTaste from "../components/SecTaste";
import SecNewFlavor from "../components/SecNewFlavor";
import SecServingUp from "../components/SecServingUp";
import SideDishes from "../components/SideDishes";
import SecFood from "../components/SecFood";
import { maincards } from "../helpers/data";
export default function Home() {
  const data = maincards;
  const homeData = {
    firstText: "More flavor for less",
    secondText: "Taste for",
    thirdText: "everyone",
    fourthText:
      "My veggie-packed take on a deli-style pasta salad! I swap spiralized summer squash for half the noodles and a creamy tahini dressing.",
    btnText: "view our menus",
    visibe: true,
  };
  const newItems = data.filter((item) => item.id < 5);
  const show = true;

  return (
    <>
      <HomeHeading home={homeData} />
      <SecTaste />
      <SecNewFlavor />
      <Container className="side-dishes">
        <div className="position-relative">
          <div className="d-flex justify-content-center align-items-center gap-2 pt-5 pb-3">
            <div className="border-top  border-dark sec-border"></div>
            <div>
              <h2 className="text">OUR MENU</h2>
            </div>
            <div className="border-top border-dark sec-border"></div>
          </div>
          <div className="text-center mb-5">
            <h2 className="title">OUR TOP ITEMS</h2>
          </div>
          <Link
            to="ourmenu"
            as={Link}
            className="text-decoration-none position-absolute top-25 new-btn end-0 fw-bold text-uppercase">
            view our menus
          </Link>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4 py-4">
          <ContentCard data={newItems} />
        </Row>
      </Container>
      <SecServingUp />
      <SideDishes />
      <SecFood visible={show} />
    </>
  );
}
