import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./imtiyoz.css";
import { useTranslation } from "react-i18next";

//Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar
              // 1-chorak
import imtiyoz from "../../assets/imtiyoz/Imtiyoz.pdf";


const ImtiyozPage = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Imtiyoz.Title")}</h3>
            </div>
          </Col>
        </Row>
        <Row className="str-chart">
          </Row>
          <Row>
            <p className="title1">  </p>
            </Row>
            <table class="table table-sm">
  <thead>
  <tr>
      <td className="first"></td>
      <td>Nomi</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first"></p></td>
      <td>Ijara imtiyozlari</td>
      <td><a href={imtiyoz} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
  </tbody>
</table>

      </Container>
    </div>
  );
};

export default ImtiyozPage;
