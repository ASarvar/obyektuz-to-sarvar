import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./stavka.css";
import { useTranslation } from "react-i18next";

//Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar
              // 1-chorak
import andijon from "../../assets/stavka/Andijon.pdf";
import buxoro from "../../assets/stavka/Buxoro.pdf";
import jizzax from "../../assets/stavka/Jizzax.pdf";
import fargona from "../../assets/stavka/Farg'ona.pdf";
import qashqadaryo from "../../assets/stavka/Qashqadaryo.pdf";
import surxondaryo from "../../assets/stavka/Surxondaryo.pdf";
import samarqand from "../../assets/stavka/Samarqand.pdf";
import sirdaryo from "../../assets/stavka/Sirdaryo.pdf";
import navoiy from "../../assets/stavka/Navoiy.pdf";
import namangan from "../../assets/stavka/Namangan.pdf";
import toshv from "../../assets/stavka/Tosheknt vil.pdf";
import toshkent from "../../assets/stavka/Toshkent.pdf";
import xorazm from "../../assets/stavka/Xorazm.pdf";
import qr from "../../assets/stavka/QR.pdf";


const StavkaPage = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Stavka.Title")}</h3>
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
      <td className="first">#</td>
      <td>Hudud</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>Qoraqalopg‘iston Respublikasi</td>
      <td><a href={qr} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">2</p></td>
      <td>Andijon viloyati</td>
      <td><a href={andijon} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr>
      <td ><p className="first">3</p></td>
      <td>Buxoro viloyati</td>
      <td><a href={buxoro} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">4</p></td>
      <td>Jizzax viloyati</td>
      <td><a href={jizzax} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr>
      <td ><p className="first">5</p></td>
      <td>Qashqadaryo viloyati</td>
      <td><a href={qashqadaryo} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">6</p></td>
      <td>Navoiy viloyati</td>
      <td><a href={navoiy} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr>
      <td ><p className="first">7</p></td>
      <td>Namangan viloyati</td>
      <td><a href={namangan} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">8</p></td>
      <td>Samarqand viloyati</td>
      <td><a href={samarqand} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr>
      <td ><p className="first">9</p></td>
      <td>Surxondaryo viloyati</td>
      <td><a href={surxondaryo} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">10</p></td>
      <td>Sirdaryo viloyati</td>
      <td><a href={sirdaryo} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr>
      <td ><p className="first">11</p></td>
      <td>Toshkent viloyati</td>
      <td><a href={toshv} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">12</p></td>
      <td>Toshkent shahar</td>
      <td><a href={toshkent} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr>
      <td ><p className="first">13</p></td>
      <td>Farg‘ona viloyati</td>
      <td><a href={fargona} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">14</p></td>
      <td>Xorazm viloyati</td>
      <td><a href={xorazm} target="_blank" rel="noreferrer">Yuklab olish</a></td>
    </tr>
  </tbody>
</table>

      </Container>
    </div>
  );
};

export default StavkaPage;
