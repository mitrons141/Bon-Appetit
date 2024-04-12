import "./Front.css";
import React from "react";
import Nav from "./nav";
import Menu from "./menu";
import Footer from "./footer";

const Front = () => {
  return (
    <>
      <div className="Front">
        <Nav />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default Front;
