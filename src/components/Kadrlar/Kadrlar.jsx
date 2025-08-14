import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./kadrlar.css";
import { useTranslation } from "react-i18next";

//Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar
              // 1-chorak
import kadrlar from "../../assets/kadrlar/kadrlar.pdf";


const KadrlarPage = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Kadrlar.Title")}</h3>
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
      <td>Kadrlar masalasi</td>
      <td><a href={kadrlar} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
  </tbody>
</table>

      </Container>
    </div>
  );
};

export default KadrlarPage;
