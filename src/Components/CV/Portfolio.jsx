import React from "react";
import Alien from "../Portofolio/Alien";
import BCR from "../Portofolio/BCR";
import Protection from "../Portofolio/Protection";
import Redux from "../Portofolio/Redux";
import Warcoff from "../Portofolio/Warcoff";

const Portofolio = () => {
  return (
    <div className="container-fluid">
      <div className="p-3">
        <h1 className="text-center" style={{ fontSize: "50px" }}>
          <strong>Portofolio</strong>
        </h1>
        <Warcoff />
        <Alien />
        <BCR />
        <Redux />
        <Protection />
      </div>
    </div>
  );
};
export default Portofolio;
