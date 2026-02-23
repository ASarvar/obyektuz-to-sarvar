import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import AntikorrupsiyaManfaatPage from "../components/AntikorrupsiyaManfaat/AntikorrupsiyaManfaat";

const AntikorrupsiyaManfaat = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <AntikorrupsiyaManfaatPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default AntikorrupsiyaManfaat;
