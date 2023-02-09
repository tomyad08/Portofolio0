import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Warcoff = () => {
  const gambarWarcoff = [
    {
      id: "1",
      image: "./assets/warcoff-1.png",
      title: "Menu",
    },
    {
      id: "2",
      image: "./assets/warcoff-2.png",
      title: "Testimony",
    },
    {
      id: "3",
      image: "./assets/warcoff-3.png",
      title: "Filter",
    },
    {
      id: "4",
      image: "./assets/warcoff-4.png",
      title: "Edit and Delete",
    },
  ];

  const Description =
    "The Warcoff (Warunk Coffee) website is a project using React JS as javascript library and bootstrap and CSS for design. The data used here is an API running on a local host, so to run this website, the API must be run on a local host. For data processing using the CRUD (Create, Read, Update, and Delete) method, the aim is to make it easier for customers and sellers to process orders.";
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
          {gambarWarcoff.map((value) => (
            <>
              <div>
                <img src={value.image} alt=" " />
                <h6 className="text-center pt-2">{value.title}</h6>
              </div>
            </>
          ))}
        </OwlCarousel>
        <h1>Warcoff (Warunk Coffee)</h1>
        <p style={{ textAlign: "justify" }}>{Description}</p>

        <h6>Link github:</h6>
        <p>
          <a href="https://github.com/tomyad08/Warcoff-Warunk-Coffee-">
            Warcoff (Warunk Coffee)
          </a>
        </p>
      </div>
    </>
  );
};
export default Warcoff;
