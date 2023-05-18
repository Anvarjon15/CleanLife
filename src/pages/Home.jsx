import React from "react";
import Navbar from "../components/Navbar";
import Background from "../assets/home.png";
import "./Home.css";
import Blob from "../logos/blob.png";
import Trash from "../logos/trash.png";
import Tel from "../logos/tel.png";
import Union from "../logos/Union.png";
import CleanerPic from "../assets/cleaner.png";
import ClientComment from "./Client";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div
        className="homepic"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Navbar></Navbar>
        <div className="box__1">
          <h1 style={{ fontFamily: "Poppins" }}>
            Cleaning of apartments, private houses, cottages, offices
          </h1>
          <p style={{ fontFamily: "cursive" }} className="p">
            We are engaged in the organization of apartment, office moving,
            moving shops, salons, transportation of goods, etc.
          </p>
          <button
            className="buttons"
            style={{ fontFamily: "Gilroy", backgroundColor: "#00CA2C" }}
          >
            More
          </button>
          <button
            className="buttons"
            style={{ fontFamily: "Gilroy", backgroundColor: "#6F58FF" }}
          >
            Contact{" "}
          </button>
        </div>
      </div>
      <div className="icons">
        <div className="icon_s">
          <img
            className="iconpic"
            src={Blob}
            width="90"
            height="90"
            objectFit="cover"
          />
          <div className="icontext">
            <h1>Quality</h1>
            <p>We fix the deadline before the start of work</p>
          </div>
        </div>
        <div className="icon_s">
          <img
            className="iconpic"
            src={Trash}
            width="90"
            height="90"
            objectFit="cover"
          />
          <div className="icontext">
            <h1>Cleaning Experts</h1>
            <p>Early morning, afternoon, evening and late at night</p>
          </div>
        </div>
        <div className="icon_s">
          <img
            className="iconpic"
            src={Tel}
            width="90"
            height="90"
            objectFit="cover"
          />
          <div className="icontext">
            <h1>24|7 Contact</h1>
            <p>We provide 24/7 support</p>
          </div>
        </div>
      </div>
      <div className="About_us">
        <div className="union">
          <img src={Union} width="400px" height="400px" />
        </div>
        <div className="aboutus__text">
          <h3>ABOUT</h3>
          <h1 style={{ textColor: "#00187B" }}>CLEAN LIFE</h1>
          <p>
            Our mission is not only to meet your expectations but to exceed
            them, we also provide many more like condos and apartment cleaning.
            Our unique 22-Step Healthy Touch Deep Cleaning System will ensure
            you’ll receive a healthy, thorough housecleaning with every visit.
            We use cleaning products that are friendly to the environment.
          </p>
          <h2>
            10 Years <br />
            Experience
          </h2>

          <button className="buttons" style={{ backgroundColor: "#00CA2C" }}>
            More
          </button>
        </div>
      </div>
      <h3 className="imp">Important Information</h3>
      <h1 className="what">What products do we use?</h1>
      <div className="information">
        <div className="inf__text">
          <h3>Ecological and safe products for humans</h3>
          <p>
            We only use environmentally friendly products that are VOC-free,
            biodegradable, non-toxic, non-corrosive, non-toxic to electronics,
            and NSF-certified for “in and around food processing premises”
            without rinsing. It is important to note that the Environmental
            Protection Agency (EPA) regulates the use of disinfectants. in
            accordance with the Federal Insecticide, Fungicide, and Rodenticide
            Act (FIFRA), and therefore products cannot be labeled or sold as
            green. Third party environmental groups may certify disinfectants,
            but products may not bear their logos or seals of approval. Since
            there is no truly sustainable disinfectant yet, customers who want
            to create an environmentally friendly business are faced with a
            dilemma.
          </p>
        </div>
        <div className="cleaner__pic">
          <img src={CleanerPic} width="400px" height="300px" />
        </div>
      </div>
      <h1 className="what" style={{ color: "lightblue" }}>
        CLIENTS COMMENT
      </h1>
      <h3 className="imp">Some Reviews</h3>
      <div>
        <CarouselProvider 
          naturalSlideWidth={50}
          naturalSlideHeight={5}
          totalSlides={0}
        >
          
          <Slider>
            <div className="clnt_com">
              <ClientComment />
              <ClientComment />
              <ClientComment />
            </div>
          </Slider>
          {/* <ButtonBack>{"<"}</ButtonBack>
          <ButtonNext>{">"}</ButtonNext> */}
        </CarouselProvider>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
