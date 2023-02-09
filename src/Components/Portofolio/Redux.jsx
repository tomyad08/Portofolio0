import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Redux = () => {
  const gambarRedux = [
    {
      id: "1",
      image: "./assets/CRUD1.png",
      title: "Menu",
    },
    {
      id: "2",
      image: "./assets/CRUD2.png",
      title: "Edit",
    },
    {
      id: "3",
      image: "./assets/CRUD3.png",
      title: "Delete",
    },
  ];

  const Description =
    "This is a project to learn about state management using redux toolkit.  The features used are CRUD (Create, Read, Update, and Delete).";
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
          {gambarRedux.map((value) => (
            <>
              <div>
                <img src={value.image} alt=" " />
                <h6 className="text-center pt-2">{value.title}</h6>
              </div>
            </>
          ))}
        </OwlCarousel>
        <h1>State Management (Redux)</h1>
        <p style={{ textAlign: "justify" }}>{Description}</p>
        <h6>Link github:</h6>
        <p>
          {" "}
          <a href="https://github.com/tomyad08/Redux">Redux</a>
        </p>
      </div>
    </>
  );
};
export default Redux;
