import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import { NavLink } from 'react-router-dom'

import Vision from '../Images/OurVision.jpg';
import { Helmet } from 'react-helmet';


function AboutUs() {

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
    
    <div className="mainDiv">
      <Helmet>
        <title>AromaLane - About Us</title>
      </Helmet>
      <div id="navBar1" className="navbar">
        <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
      </div>


      <div className="AU-top-div">
        <h1>About Us</h1>
        <p>
          We believe that a great fragrance is a timeless accessory. Our passion
          for perfumery drives us to source the finest ingredients and craft
          exquisite scents that capture the essence of elegance and
          sophistication. Here, every bottle tells a story and every scent creates
          a lasting memory.
        </p>
      </div>
      <div className="AU-content-div">
        <div className="AU-image-container">
          <img src={Vision} alt="About Us Image" />
        </div>
        <div className="AU-text-container2">
          <h2>Our Vision</h2>
          <p>
            At AromaLane, our vision is to become the leading destination for
            luxury fragrances that inspire and delight. We aim to innovate and set
            trends in the world of perfumery, offering our customers unique and
            unforgettable scents. Our ultimate goal is to enrich lives with the
            power of scent, creating moments of beauty and elegance for everyone.
          </p>
        </div>
      </div>
      <div className="AU-boxes-container2">
        <div className="AU-box">
          <h3>Wide Range of Fragrances</h3>
          <p>
            AromaLane boasts an extensive collection of perfumes, ranging from
            timeless classics to contemporary blends.
          </p>
        </div>
        <div className="AU-box">
          <h3>Exceptional Customer Service</h3>
          <p>
            Our dedicated team is here to ensure your shopping experience is
            seamless and enjoyable.
          </p>
        </div>
        <div className="AU-box">
          <h3>Expertly Curated Collections</h3>
          <p>
            {" "}
            At AromaLane, our collections are expertly curated by experienced
            perfumers who bring a wealth of knowledge and passion to each
            creation.
          </p>
        </div>
        <div className="AU-box">
          <h3>High-Quality Ingredients</h3>
          <p>
            We pride ourselves on using only the finest, high-quality ingredients
            in our perfumes.
          </p>
        </div>
      </div>
      <div className="AU-background-div">
        <h2 className="AU-main-heading">What Are We Good At?</h2>
        <div className="AU-row">
          <div className="box">
            <h3>Innovating in Fragrance Design</h3>
            <p>
              AromaLane continually pushes the boundaries of traditional perfumery
              by experimenting with innovative fragrance combinations and
              techniques. We strive to bring fresh, contemporary scents that
              redefine the olfactory experience.
            </p>
          </div>
          <div className="box">
            <h3>Ensuring Sustainable Practices</h3>
            <p>
              {" "}
              We are committed to sustainability in every aspect of our business.
              From responsibly sourcing our ingredients to minimizing waste in our
              packaging, we prioritize eco-conscious practices to protect the
              environment for future generations.
            </p>
          </div>
        </div>
        <div className="AU-row">
          <div className="box">
            <h3>Cultivating a Community</h3>
            <p>
              This is more than just a perfume shop; it’s a community of fragrance
              enthusiasts. We foster a sense of belonging through engaging social
              media interactions, exclusive online forums, and collaborative
              initiatives with our loyal customers.
            </p>
          </div>
          <div className="box">
            <h3> Providing Exceptional Customer Care</h3>
            <p>
              Our dedicated team goes above and beyond to provide exceptional
              customer care. From expert advice on scent selection to prompt
              assistance with inquiries, we ensure that every customer feels
              valued and satisfied.
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

export default AboutUs;