import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import AntikorrupmediaPage from "../components/Antikorrup_media/Antikorrup_media";

const Antikorrup_media = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <AntikorrupmediaPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Antikorrup_media;
