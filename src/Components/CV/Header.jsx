import React from "react";
import "./CV.css";

const Header = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
        <img src="./assets/UI.jpg" alt=" " className="border rounded-2" />
      </div>
      <div id="posisiFoto">
        <img src="./assets/Tomy.jpg" alt=" " id="fotoProfil" />
      </div>
    </div>
  );
};
export default Header;
