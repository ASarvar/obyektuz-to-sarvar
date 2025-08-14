import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import KadrlarPage from "../components/Kadrlar/Kadrlar";

const Kadrlar = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <KadrlarPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Kadrlar;
