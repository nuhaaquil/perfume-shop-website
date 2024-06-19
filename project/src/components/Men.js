import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';
import { NavLink } from "react-router-dom";

import M1 from '../Images/M1(main)-Apex (2).png';
import M2 from '../Images/M2(main)-Noble (4).png';
import M3 from '../Images/M3(main)-Phoenix (3).png';
import M4 from '../Images/M4(main)-Titan (3).png';
import M5 from '../Images/M5(main)-Storm (3).png';
import M6 from '../Images/M6(main)-Valor (2).png';


function Men() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    <div className="Men">
      <Helmet>
        <title>AromaLane - Men</title>
      </Helmet>
      <div className="navbar" id="navBar1">
        <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
      </div>

      <div className="content">
        <h1>Men's Perfume</h1>
        <div className="perfume-grid">
          <div className="perfume-box">
            <img src={M1} alt="Perfume 1" />
            <h2>
              <NavLink to="/Collections#M1"><a href="#">Apex</a></NavLink>
            </h2>
            <p className="price">₹3,999</p>
            <p>
              Apex is a sophisticated and refined fragrance that represents the
              pinnacle of elegance and style.
            </p>
          </div>


          <div className="perfume-box">
            <img src={M2} alt="Perfume 2" />
            <h2>
              <NavLink to="/Collections#M2"><a href="#">Noble</a></NavLink>
            </h2>
            <p className="price">₹3,799</p>
            <p>
              Noble is a regal and majestic fragrance that embodies the essence of
              royalty and sophistication.
            </p>
          </div>


          <div className="perfume-box">
            <img src={M3} alt="Perfume 3" />
            <h2>
              <NavLink to="/Collections#M3"><a href="#">Phoenix</a></NavLink>
            </h2>
            <p className="price">₹4,499</p>
            <p>
              Phoenix is a vibrant and invigorating fragrance that symbolizes
              rebirth and renewal, perfect for the man who rises above challenges.
            </p>
          </div>


          <div className="perfume-box">
            <img src={M4} alt="Perfume 4" />
            <h2>
              <NavLink to="/Collections#M4"><a href="#">Titan</a></NavLink>
            </h2>
            <p className="price">₹4,599</p>
            <p>
              Titan is a strong and enduring fragrance that symbolizes power and
              resilience, perfect for the man who stands tall.
            </p>
          </div>


          <div className="perfume-box">
            <img src={M5} alt="Perfume 5" />
            <h2>
              <NavLink to="/Collections#M5"><a href="#">Storm</a></NavLink>
            </h2>
            <p className="price">₹3,499</p>
            <p>
              Storm is an invigorating and dynamic fragrance that embodies the raw
              energy of a powerful storm.
            </p>
          </div>


          <div className="perfume-box">
            <img src={M6} alt="Perfume 6" />
            <h2>
              <NavLink to="/Collections#M6"><a href="#">Valor</a></NavLink>
            </h2>
            <p className="price">₹4,299</p>
            <p>
              Valor is a bold and captivating fragrance that exudes confidence and
              strength. Perfect for the modern man who commands attention.
            </p>
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
              <li><NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink></li>
              <li><NavLink to={"/Contact#navBar1"}><a href="#">Contact Us</a></NavLink></li>
              <li><NavLink to={"/AboutUs#navBar1"}><a href="#">About Us</a></NavLink></li>
              <li><NavLink to={"/FAQ#navBar1"}><a href="#">FAQs</a></NavLink></li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 AromaLane. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Men;