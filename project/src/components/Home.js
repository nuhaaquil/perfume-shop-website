import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";
import { NavLink } from "react-router-dom";

import HomeDiv4 from "../Images/HomeDiv4.jpg";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="HomeBGIMG">
      <Helmet>
        <title>AromaLane - Home</title>
      </Helmet>
      <div className="navbar" id="navBar1">
        <NavLink to={"/Men#navBar1"}>
          <a href="#">For Men</a>
        </NavLink>
        <NavLink to={"/Women#navBar1"}>
          <a href="#">For Women</a>
        </NavLink>
        <NavLink to={"/Collections#navBar1"}>
          <a href="">Collections</a>
        </NavLink>
      </div>

      {/* Image */}
      <div className="image-container">
        <div className="image-text">
          <p>SCENTS THAT CAPTIVATE</p>
        </div>
      </div>
      {/* 3 boxes */}
      <div className="boxes-container">
        <div className="box">
          <h2>Discover Your Signature Scent</h2>
          <p>
            Unlock the magic of fragrance with our carefully curated collection.
            Each scent is designed to reflect your unique personality and style.
          </p>
        </div>
        <div className="box">
          <h2>Experience Luxurious Aromas</h2>
          <p>
            Indulge in our range of perfumes crafted from the finest
            ingredients. Immerse yourself in the world of elegance and
            sophistication.
          </p>
        </div>
        <div className="box">
          <h2>The Art of Perfumery</h2>
          <p>
            Our perfumes are a testament to the art of scent-making. Discover
            the perfect blend that resonates with your senses and tells your
            story.
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="text-content">
          <h2>FRAGRANCE THAT DEFINES YOU</h2>
          <p>
            Find the perfect scent that speaks to your individuality and style.
            Our collection offers a variety of aromas, each with its own
            distinctive character. Allow your fragrance to be an extension of
            yourself, leaving a lasting impression wherever you go.
          </p>
        </div>
        <div className="image-content">
          <img src={HomeDiv4} alt="Image" />
        </div>
      </div>
      {/* 3 sections */}
      <div className="main-container">
        <h2>Categories</h2>
        <div className="horizontal-boxes">
          <div className="Womenbox2">
            <div className="box-content">
              <NavLink to={"/Women#navBar1"}>
                <a href="#">FOR WOMEN</a>
              </NavLink>
            </div>
            <a href="./women.html"></a>
          </div>
          <a href="./women.html"></a>
          <div className="Menbox2">
            <a href="./women.html"></a>
            <div className="box-content">
              <NavLink to={"/Men#navBar1"}>
                <a href="#">FOR MEN</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div className="footercontact">
          <div className="footertext">
            <h3>About Us</h3>
            <p>
              "We believe that a great fragrance is a timeless accessory. Our
              passion for perfumery drives us to source the finest ingredients
              and craft exquisite scents that capture the essence of elegance
              and sophistication. Here, every bottle tells a story and every
              scent creates a lasting memory."
            </p>
          </div>
          <div className="footertext">
            <h3>Contact Us</h3>
            <p>
              <b>Call us:</b> +91 72559 83220<br></br>
              <b>Email :</b> contact@aromalane.com<br></br>
              <b>AromaLane Office Address:</b> No. 789, 3rd Floor, High Rise
              Towers, 12th Cross, BTH Layout, Bangalore - 560102, Karnataka,
              India.
            </p>
          </div>
        </div>

        <div class="footer-container">
          <div class="footer-left">
            <ul class="footer-links">
              <li>
                <NavLink to={"/#navBar1"}>
                  <a href="#">Home</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Contact#navBar1"}>
                  <a href="#">Contact Us</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/AboutUs#navBar1"}>
                  <a href="#">About Us</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/FAQ#navBar1"}>
                  <a href="#">FAQs</a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 AromaLane. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
