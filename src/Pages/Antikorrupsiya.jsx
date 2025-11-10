import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import AntikorrupsiyaPage from "../components/Antikorrupsiya/Antikorrupsiya";

const Antikorrupsiya = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <AntikorrupsiyaPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Antikorrupsiya;
