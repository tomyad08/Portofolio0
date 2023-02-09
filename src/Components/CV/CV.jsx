import React from "react";
import Footer from "../Footer";
import Portofolio from "./Portfolio";
import AboutMe from "./ShortProfile";

const CV = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around">
        <div className="col-md-3  mt-1 p-2">
          <AboutMe />
        </div>
        <div className="col-md-8 border border-2 rounded-2 mt-2 p-2 mx-3">
          <Portofolio />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default CV;
