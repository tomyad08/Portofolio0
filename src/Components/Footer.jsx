import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "purple", marginTop: "20px", color: "white" }}
    >
      {/* <h2 className="border border-0 rounded-2 text-center py-3">
        <strong>Contact Me</strong>
      </h2> */}
      <div className="d-md-flex justify-content-around mt-2">
        <div>
          <div className="d-flex">
            <div>
              <img
                src="./assets/WhatsAppLogo.png"
                alt=" "
                style={{ width: "50px" }}
              />
            </div>
            <div className="px-2">
              <h5>WhatsApp</h5>
              <p style={{ lineHeight: "10px" }}>085772390154</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div>
              <img
                src="./assets/EmailLogo.png"
                alt=" "
                style={{ width: "50px" }}
              />
            </div>
            <div className="px-2">
              <h5>Email</h5>
              <p style={{ lineHeight: "10px" }}>tomyad08@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div>
              <img
                src="./assets/WhatsAppLogo.png"
                alt=" "
                style={{ width: "50px" }}
              />
            </div>
            <div className="px-2">
              <h5>LinkedIn</h5>
              <p style={{ lineHeight: "10px" }}>Tomy Adiansyah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
