import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./kadrlar.css";
import { useTranslation } from "react-i18next";

//Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar
// 1-chorak
import file from "../../assets/kadrlar/file.pdf";
import vacancy from "../../assets/kadrlar/vacancy.doc";

const KadrlarPage = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Kadrlar.title3")}</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="title1"> </p>
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
              <td>
                <p className="first"></p>
              </td>
              <td>Bo‘sh ish o‘rinlari haqida maʼlumot</td>
              <td>
                <a href={vacancy} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Kadrlar.title1")}</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="title1"> </p>
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
              <td>
                <p className="first"></p>
              </td>
              <td>Kadrlar masalasi</td>
              <td>
                <a href={file} target="_blank" rel="noreferrer">
                  Yuklab olish
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default KadrlarPage;
