import React from "react";
import Footer from "../Homepage/Footer";
import Pedia_hero from "./Pedia_hero";
import Pedia_info from "./Pedia_info";

const Pedia = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Pedia_hero />;
      <Pedia_info />;
      <Footer />;
    </>
  );
};

export default Pedia;
