import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';
import { NavLink } from "react-router-dom";

import W1 from '../Images/W1(main)-Lustre1.png';
import W2 from '../Images/W2(main)-Serene (4).png';
import W3 from '../Images/W3(main)-Velvet (2).png';
import W4 from '../Images/W4(main)-Evoke (2).png';
import W5 from '../Images/W5(main)-Charm (3).png';
import W6 from '../Images/W6(main)-Grace (1).png';


function Women() {

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

    <div className="Women">
      <Helmet>
        <title>AromaLane - Women</title>
      </Helmet>
      <div className="navbar" id="navBar1">
      <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
      </div>

      <div className="content">
        <h1>Women's Perfume</h1>
        <div className="perfume-grid">
          <div className="perfume-box">
            <img src={W1} alt="Perfume 1" />
            <h2>
            <NavLink to="/Collections#W1"><a href="#">Lustre</a></NavLink>
            </h2>
            <p className="price">₹3,499</p>
            <p>
              Embrace the elegance of Lustre, a luxurious fragrance that combines
              the essence of blooming jasmine, delicate rose petals, and a hint of
              warm vanilla.
            </p>
          </div>


          <div className="perfume-box">
            <img src={W2} alt="Perfume 2" />
            <h2>
            <NavLink to="/Collections#W2"><a href="#">Serene</a></NavLink>
            </h2>
            <p className="price">₹2,999</p>
            <p>
              Serene captures the tranquility of a peaceful garden at dawn. With
              notes of fresh lavender, soft peony, and a subtle touch of
              sandalwood, this perfume exudes a calming and soothing aroma.
            </p>
          </div>


          <div className="perfume-box">
            <img src={W3} alt="Perfume 3" />
            <h2>
            <NavLink to="/Collections#W3"><a href="#">Velvet</a></NavLink>
            </h2>
            <p className="price">₹4,299</p>
            <p>
              Velvet is a sensual blend of rich amber, creamy musk, and sweet
              patchouli, creating a warm and inviting fragrance that feels like a
              luxurious embrace. Ideal for evenings and special occasions
            </p>
          </div>


          <div className="perfume-box">
            <img src={W4} alt="Perfume 4" />
            <h2>
            <NavLink to="/Collections#W4"><a href="#">Evoke</a></NavLink>
            </h2>
            <p className="price">₹3,199</p>
            <p>
              Evoke is a powerful and mesmerizing perfume that blends the
              mysterious notes of dark plum, exotic saffron, and smoky vetiver.
              This bold and intriguing fragrance is for the woman who wants to
              make a statement
            </p>
          </div>


          <div className="perfume-box">
            <img src={W5} alt="Perfume 5" />
            <h2>
            <NavLink to="/Collections#W5"><a href="#">Charm</a></NavLink>
            </h2>
            <p className="price">₹3,799</p>
            <p>
              Charm is a captivating fragrance that weaves together the delicate
              notes of cherry blossom, gentle lily of the valley, and a whisper of
              vanilla orchid. This enchanting scent is designed for the modern
              woman who exudes confidence and grace
            </p>
          </div>


          <div className="perfume-box">
            <img src={W6} alt="Perfume 6" />
            <h2>
            <NavLink to="/Collections#W6"><a href="#">Grace</a></NavLink>
            </h2>
            <p className="price">₹3,599</p>
            <p>
              Grace is a delicate and feminine fragrance that harmonizes the soft
              notes of white lily, gentle freesia, and a hint of creamy
              sandalwood. This elegant perfume is perfect for everyday wear,
              enhancing your natural grace and beauty
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

export default Women;