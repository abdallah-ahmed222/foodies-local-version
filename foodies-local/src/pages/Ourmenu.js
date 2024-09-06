import { Container, Row } from "react-bootstrap";
import HomeHeading from "../components/HomeHeading";
import ContentCard from "../components/Card";
import SideDishes from "../components/SideDishes";
import SecFood from "../components/SecFood";
import { maincards } from "../helpers/data";

export default function Ourmenu() {
  const items = maincards;
  const homeData = {
    firstText: "MORE FLAVOR FOR LESS",
    secondText: "OUR SEASONAL",
    thirdText: "MENUS",
    fourthText: "Get Ready",
  };
  const show = false;
  return (
    <Container fluid className="text-black g-0">
      <HomeHeading home={homeData} />
      <div className="side-dishes">
        <div className="position-relative">
          <div className="d-flex justify-content-center align-items-center gap-2 pt-5 pb-3">
            <div className="border-top  border-dark sec-border"></div>
            <div>
              <h2 className="text">OUR MENU</h2>
            </div>
            <div className="border-top border-dark sec-border"></div>
          </div>
          <div className="text-center mb-5">
            <h2 className="title">OUR ITEMS</h2>
          </div>
        </div>
      </div>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4 py-4">
          <ContentCard data={items} />
        </Row>
        <SideDishes />
        <SecFood visible={show} />
      </Container>
    </Container>
  );
}
