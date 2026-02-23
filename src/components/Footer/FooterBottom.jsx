import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <Container>
        <Row className="footerRow">
          <Col lg="6" md="6" sm="8">
            <p className="left-text">© 2026 Davlat mulki obyektlari markazi. </p>
          </Col>
          <Col lg="6" md="6" sm="8">
            <p className="right-text">
              Developed by <a href="#">sb</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FooterBottom;
