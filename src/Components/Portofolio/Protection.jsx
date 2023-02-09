import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Protection = () => {
  const gambarProtection = [
    {
      id: "1",
      image: "./assets/pageHome.png",
      title: "Home",
    },
    {
      id: "2",
      image: "./assets/pageLogIn.png",
      title: "LogIn",
    },
    {
      id: "3",
      image: "./assets/pageDiscovery.png",
      title: "Discovery",
    },
  ];

  const Description =
    "This is a project to learn about protection page by access token.  The features is register, logIn, Log Out, and CRUD also.";
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
          {gambarProtection.map((value) => (
            <>
              <div>
                <img src={value.image} alt=" " />
                <h6 className="text-center pt-2">{value.title}</h6>
              </div>
            </>
          ))}
        </OwlCarousel>
        <h1>Protection Page by Token Access</h1>
        <p style={{ textAlign: "justify" }}>{Description}</p>
        <h6>Link github:</h6>
        <p>
          <a href="https://github.com/tomyad08/page-protection-by-token-access">
            Protection Page
          </a>
        </p>
      </div>
    </>
  );
};
export default Protection;
