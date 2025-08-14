import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import ImtiyozPage from '../components/Imtiyoz/Imtiyoz'

const Imtiyoz = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <ImtiyozPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Imtiyoz;
