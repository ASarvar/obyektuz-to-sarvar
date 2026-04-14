import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import DirektorMurojaati from "../components/DirektorMurojaati/DirektorMurojaati";

const DirektorMurojaatiPage = () => {
  return (
    <>
      <Header position="menu_nav" />
      <DirektorMurojaati />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default DirektorMurojaatiPage;
