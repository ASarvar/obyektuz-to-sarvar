import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import StavkaPage from '../components/Stavka/Stavka'

const Stavka = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <StavkaPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Stavka;
