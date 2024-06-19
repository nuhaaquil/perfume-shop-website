import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';
import { NavLink } from 'react-router-dom'



function FAQ(){

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
        
        <div className="faq-page">
          <Helmet>
        <title>AromaLane - FAQ</title>
      </Helmet>
    <div id="navBar1" className="navbar">
      <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
        <NavLink to={"/Login"}><a href="#">Login</a></NavLink>
    </div>
    <h1>Frequently Asked Questions</h1>
    <div className="faq-container">
      <div className="faq-box">
        <h2>What types of fragrances does AromaLane offer?</h2>
        <p>
          {" "}
          AromaLane offers a wide range of fragrances, including floral, woody,
          oriental, fresh, and citrus scents. Our collection is designed to
          cater to diverse preferences, ensuring that everyone can find their
          perfect scent.
        </p>
      </div>
      <div className="faq-box">
        <h2>How can I find my signature scent?</h2>
        <p>
          Finding your signature scent can be a delightful journey. We recommend
          exploring different fragrance families and identifying notes that you
          are naturally drawn to. Our website features detailed descriptions and
          notes for each perfume to help you make an informed choice.
        </p>
      </div>
      <div className="faq-box">
        <h2>
          Do you provide any tips on how to apply perfume for long-lasting wear?
        </h2>
        <p>
          Yes! To make your fragrance last longer, apply it to your pulse points
          such as your wrists, neck, and behind your ears. These areas emit
          heat, which helps to diffuse the scent throughout the day.
          Additionally, layering your fragrance with matching body products can
          enhance its longevity.
        </p>
      </div>
      <div className="faq-box">
        <h2>Can I sample the fragrances before making a purchase?</h2>
        <p>
          While we currently do not offer online samples, we provide detailed
          descriptions and customer reviews for each fragrance on our website.
          We encourage you to visit our store to experience the scents firsthand
          and find the perfect match.
        </p>
      </div>
      <div className="faq-box">
        <h2>Are your products cruelty-free and environmentally friendly?</h2>
        <p>
          Yes, AromaLane is committed to ethical practices. Our products are
          cruelty-free, and we prioritize using sustainable and eco-friendly
          ingredients and packaging whenever possible. We believe in creating
          beautiful scents while being kind to the planet.
        </p>
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

export  default FAQ;