import React from "react";
import "./CV.css";

const AboutMe = () => {
  return (
    <>
      <div className="px-4 mt-2">
        <h1>
          <strong>Tomy Adiansyah</strong>
        </h1>
        <h6 style={{ lineHeight: "15px" }}>
          Bachelor (Theoretical) Physics, Universitas Indonesia.
        </h6>
        <p style={{ lineHeight: "20px", textAlign: "justify" }}>
          I have a passion for learning and appreciation for art and tech, and I
          greatly enjoy working in a group.
        </p>

        <div className="border border-2 rounded-3 p-2 mt-3 text-center">
          <h3>Computational Skill</h3>
          <p>
            React JS Framework, Redux, Bootstrap, CSS, Javascript, and Python.
          </p>
        </div>
        <div className="border border-2 rounded-3 p-2 mt-2 text-center">
          <h3>Languange Skill</h3>
          <p>Bahasa Indonesia and English</p>
        </div>
        <div className="mt-3 text-center border border-2 rounded-2 p-3">
          <h3
            className="border border-0 rounded-2"
            style={{
              backgroundColor: "purple",
              color: "white",
            }}
          >
            <strong>Contact Me</strong>
          </h3>
          <h6>WhatsApp</h6>
          <p style={{ lineHeight: "10px" }}>085772390154</p>
          <h6>Email</h6>
          <p style={{ lineHeight: "10px" }}>tomyad08@gmail.com</p>
          <h6>LinkedIn</h6>
          <p style={{ lineHeight: "10px" }}> Tomy Adiansyah</p>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
