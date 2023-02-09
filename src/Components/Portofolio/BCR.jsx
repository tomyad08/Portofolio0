import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const BCR = () => {
  const gambarBCR = [
    {
      id: "1",
      image: "./assets/BCR-1.png",
      title: "Menu",
    },

    {
      id: "3",
      image: "./assets/BCR-4.png",
      title: "Cars-List",
    },
    {
      id: "4",
      image: "./assets/BCR-5.png",
      title: "Filter",
    },
  ];

  const Description =
    "The Binar Academy v.01 car rental project uses React JS as javascript library and bootstrap and CSS for design. The react-router-dom module and its derivatives are used for navigating pages with SPA (Single Page Application) and inter-component data operations. Asynchronous functions and axios are used to retrieve data from the API, which is then processed with map and filter functions.";
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
          {gambarBCR.map((value) => (
            <>
              <div>
                <img src={value.image} alt=" " />
                <h6 className="text-center pt-2">{value.title}</h6>
              </div>
            </>
          ))}
        </OwlCarousel>
        <h1>Binar Car Rental </h1>
        <p style={{ textAlign: "justify" }}>{Description}</p>
        <h6>Link github:</h6>
        <p>
          <a href="https://github.com/tomyad08/Binar-Car-Rental-v01">
            Binar Car Rental v.01
          </a>
        </p>
      </div>
    </>
  );
};
export default BCR;
