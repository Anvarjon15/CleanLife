import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceUS from "../assets/AboutUS.png";
import Cleanermac from "../assets/cleanermac.png";
import Swiper from "../assets/swipermac.png";
import Clothes from "../assets/clothes.png";
import "./Service.css";
import Read from "./Read";

function Service() {
  return (
    <div>
      <Navbar />
      <div className="about_page">
        <img src={ServiceUS} />
        <h1>SERVICE</h1>
      </div>
      <div className="company">
        <h1 style={{ textTransform: "uppercase" }}>
          We provide our clients with the following services
        </h1>
        <div className="service_container">
          <div className="container_item">
            <img src={Cleanermac} width="200px" height="150px" />
            <h2>CLEANING</h2>
            <p>
              Imagine that you are returning <br /> home to a perfectly clean,{" "}
              <br />
              fresh-smelling house after a long…
            </p>
            <Read />
          </div>
          <div className="container_item">
            <img src={Cleanermac} width="200px" height="150px" />
            <h2>CLEANING</h2>
            <p>
              Imagine that you are returning <br /> home to a perfectly clean,{" "}
              <br />
              fresh-smelling house after a long…
            </p>
            <Read />
          </div>
          <div className="container_item">
            <img src={Cleanermac} width="200px" height="150px" />
            <h2>CLEANING</h2>
            <p>
              Imagine that you are returning <br /> home to a perfectly clean,{" "}
              <br />
              fresh-smelling house after a long…
            </p>
            <Read />
          </div>
        </div>
      </div>
      <div>
        <h3>Best Expertise</h3>
        <h1
          style={{
            color: "greenyellow",
            textAlign: "center",
            textTransform: "uppercase",
            maxWidth: "50%",
          }}
        >
          Our craftsmanship makes your business shine
        </h1>
        <div>
          <div className="column col-left reveal">
          <div class="bar">
          <div class="info">
            <span>Commercial Cleaning</span>
            <span>90%</span>
          </div>
          <div class="line commercial"></div>
          </div>
          <div class="bar">
          <div class="info">
          <span>House Cleaning</span>
            <span>80%</span>
          </div>
          <div className="line house"></div>
          </div>
          <div class="bar">
          <div class="info">
          <span>Outdoor Cleaning</span>
            <span>70%</span>
          </div>
          <div class="line outdor"></div>
          </div>
            
          </div> 
          
           
          
          
           
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
