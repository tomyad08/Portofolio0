import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Alien = () => {
  const gambarAlien = [
    {
      id: "1",
      image: "./assets/Alien-1.png",
      title: "Cover",
    },
    {
      id: "2",
      image: "./assets/Alien-2.png",
      title: "Register & Login",
    },
    {
      id: "3",
      image: "./assets/Alien-4.png",
      title: "Game",
    },
  ];
  const Description =
    "The game 'Alien Ditembakin' utilizes React JS and several hooks, such as useRef for creating a parallax effect on the cover, useState for storing local data, and useEffect as the location to run time and other functions.  ";
  return (
    <>
      <div className="mt-5">
        <OwlCarousel
          className="owl-theme"
          center={true}
          loop={true}
          margin={10}
          nav={true}
          dots={false}
          autoplay={false}
          autoplayTimeout={4000}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          }}
        >
          {gambarAlien.map((value) => (
            <>
              <div>
                <img src={value.image} alt=" " />
                <h6 className="text-center pt-2">{value.title}</h6>
              </div>
            </>
          ))}
        </OwlCarousel>
        <h1>Game "Alien Ditembakin"</h1>
        <p style={{ textAlign: "justify" }}>{Description}</p>
        <h6>Link github:</h6>
        <p>
          <a href="https://github.com/tomyad08/Game-Alien-Ditembakin-Using-React-Js">
            Game Alien Ditembakin
          </a>
        </p>
      </div>
    </>
  );
};
export default Alien;
