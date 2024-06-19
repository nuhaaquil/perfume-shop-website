import React, { useState } from "react";
import "../App.css";
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigateTo = useNavigate();
  const [data, setdata] = useState({
    cname: "",
    email_id: "",
    phone_number: "",
    pincode: "",
    message: "",
  });
  function handleinput(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }

  function getintouch(e) {
    console.log(data);
    axios
      .post("http://localhost:8000/Contact", data)
      .then((res) => {
        alert(res.data)
        if (res.data ==="Designer will soon contact you. \n Thank you for contacting us!") {
          alert("Designer will soon contact you. \n Thank you for contacting us!");
          navigateTo("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Helmet>
        <title>AromaLane - Contact Us</title>
      </Helmet>
        <div className="navbar" id="navBar1">
      <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
      </div>
      <div className="contactdiv">
      
        <form className="contactform">
          <h1>GET IN TOUCH</h1>
          <input
            type="text"
            placeholder="Name"
            name="cname"
            onChange={handleinput}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email_id"
            onChange={handleinput}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone_number"
            onChange={handleinput}
            required
          />
          <input
            type="number"
            placeholder="Enter your pincode"
            name="pincode"
            onChange={handleinput}
            required
          />
          <textarea
            placeholder="Message"
            onChange={handleinput}
            name="message"
            required
          ></textarea>
          <button type="submit" onClick={getintouch}>
            Get in Touch
          </button>
        </form>
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
  );
}
export default Contact;
