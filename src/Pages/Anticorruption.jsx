import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import AnticorruptionPage from '../components/Anticorruption/Anticorruption'

const Anticorruption = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <AnticorruptionPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Anticorruption;
