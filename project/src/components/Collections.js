import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../App.css';
import { NavLink } from 'react-router-dom'

import W1_1 from '../Images/W1(main)-Lustre1.png';
import W1_2 from '../Images/W1-Lustre2.png';
import W1_3 from '../Images/W1-Lustre3.png';
import W1_4 from '../Images/W1-Lustre4.png';

import W2_1 from '../Images/W2(main)-Serene (4).png';
import W2_2 from '../Images/W2-Serene (1).png';
import W2_3 from '../Images/W2-Serene (2).png';
import W2_4 from '../Images/W2-Serene (3).png';

import W3_1 from '../Images/W3(main)-Velvet (2).png';
import W3_2 from '../Images/W3-Velvet (1).png';
import W3_3 from '../Images/W3-Velvet (3).png';
import W3_4 from '../Images/W3-Velvet (4).png';

import W4_1 from '../Images/W4(main)-Evoke (2).png';
import W4_2 from '../Images/W4-Evoke (1).png';
import W4_3 from '../Images/W4-Evoke (3).png';
import W4_4 from '../Images/W4-Evoke (4).png';

import W5_1 from '../Images/W5(main)-Charm (3).png';
import W5_2 from '../Images/W5-Charm (1).png';
import W5_3 from '../Images/W5-Charm (2).png';
import W5_4 from '../Images/W5-Charm (4).png';

import W6_1 from '../Images/W6(main)-Grace (1).png';
import W6_2 from '../Images/W6-Grace (2).png';
import W6_3 from '../Images/W6-Grace (3).png';
import W6_4 from '../Images/W6-Grace (4).png';

import M1_1 from '../Images/M1(main)-Apex (2).png';
import M1_2 from '../Images/M1-Apex (1).png';
import M1_3 from '../Images/M1-Apex (3).png';
import M1_4 from '../Images/M1-Apex (4).png';

import M2_1 from '../Images/M2(main)-Noble (4).png';
import M2_2 from '../Images/M2-Noble (1).png';
import M2_3 from '../Images/M2-Noble (2).png';
import M2_4 from '../Images/M2-Noble (3).png';


import M3_1 from '../Images/M3(main)-Phoenix (3).png';
import M3_2 from '../Images/M3-Phoenix (1).png';
import M3_3 from '../Images/M3-Phoenix (2).png';
import M3_4 from '../Images/M3-Phoenix (4).png';

import M4_1 from '../Images/M4(main)-Titan (3).png';
import M4_2 from '../Images/M4-Titan (1).png';
import M4_3 from '../Images/M4-Titan (2).png';
import M4_4 from '../Images/M4-Titan (4).png';

import M5_1 from '../Images/M5(main)-Storm (3).png';
import M5_2 from '../Images/M5-Storm (1).png';
import M5_3 from '../Images/M5-Storm (2).png';
import M5_4 from '../Images/M5-Storm (4).png';

import M6_1 from '../Images/M6(main)-Valor (2).png';
import M6_2 from '../Images/M6-Valor (1).png';
import M6_3 from '../Images/M6-Valor (3).png';
import M6_4 from '../Images/M6-Valor (4).png';

function Collections() {

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
    <div className="Collections">
      <Helmet>
        <title>AromaLane - Collections</title>
      </Helmet>
      <div className="navbar" id="navBar1">
      <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
      </div>


      <div className="content">
        <h1>Women's Perfumes</h1>
        <div className="perfume" id="W1">
          <h2>Lustre - ₹3,499</h2>
          <div className="image-gallery">
            <img src={W1_1} alt="Lustre Image 1" className="perfume-img"/>
            <img src={W1_2} alt="Lustre Image 2" className="perfume-img"/>
            <img src={W1_3} alt="Lustre Image 3" className="perfume-img"/>
            <img src={W1_4} alt="Lustre Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Embrace the elegance of Lustre, a luxurious fragrance that combines
                the essence of blooming jasmine, delicate rose petals, and a hint of
                warm vanilla. Perfect for those who seek sophistication and grace,
                Lustre leaves a lasting impression with its enchanting and timeless
                scent
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Citrus, Green Apple<br />
                Heart Note: Jasmine, Rose<br />
                Base Note: Vanilla, Musk
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the elegance and glow of a sunset over a serene
                landscape, Lustre brings warmth and sophistication to any moment.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Best worn in the evening for formal events or intimate gatherings to
                leave a lasting impression.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Lustre is my go-to for special occasions. It's the perfect blend of
                elegance and warmth." – Emily R.
              </p>
            </div>
          </div>
          <NavLink to={"/Women#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="W2">
          <h2>Serene - ₹2,999</h2>
          <div className="image-gallery">
            <img
              src={W2_1} alt="Lustre Image 1" className="perfume-img"/>
            <img src={W2_2} alt="Lustre Image 2" className="perfume-img"/>
            <img src={W2_3} alt="Lustre Image 3" className="perfume-img"/>
            <img src={W2_4} alt="Lustre Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Serene captures the essence of a peaceful morning in a blooming
                garden, inviting tranquility and calm with every breath. Its
                delicate blend of florals and soft notes brings a moment of peace to
                your busy day.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Lavender, Bergamot<br />
                Heart Note: Peony, Iris<br />
                Base Note: Sandalwood, Amber
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Capturing the essence of a peaceful morning walk through a flower
                garden, Serene brings tranquility and grace.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Ideal for daily wear, especially during spring and summer to embrace
                the freshness of nature.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Serene is my daily scent. It's light, fresh, and perfect for any
                time of day." – Sarah K.
              </p>
            </div>
          </div>
          <NavLink to={"/Women#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="W3">
          <h2>Velvet - ₹4,299</h2>
          <div className="image-gallery">
            <img
              src={W3_1} alt="Lustre Image 1" className="perfume-img"/>
            <img src={W3_2} alt="Lustre Image 2" className="perfume-img"/>
            <img src={W3_3} alt="Lustre Image 3" className="perfume-img"/>
            <img src={W3_4} alt="Lustre Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Velvet wraps you in a luxurious embrace, with its rich and deep
                scent creating a warm and inviting atmosphere. Perfect for romantic
                evenings, this fragrance will make you feel endlessly sophisticated
                and alluring.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Plum, Red Fruits<br />
                Heart Note: Rose, Jasmine<br />
                Base Note: Patchouli, Vanilla
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the rich texture of velvet fabric, this fragrance is
                designed to envelop you in luxurious warmth.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Perfect for evening wear, especially in cooler months for a cozy and
                inviting aroma.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Velvet feels like a warm hug. It's my favorite for fall and winter
                evenings." – Laura B.
              </p>
            </div>
          </div>
          <NavLink to={"/Women#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>

        
        <div className="perfume" id="W4">
          <h2>Evoke - ₹3,199</h2>
          <div className="image-gallery">
            <img src={W4_1} alt="Lustre Image 1" className="perfume-img"/>
            <img src={W4_2} alt="Lustre Image 2" className="perfume-img"/>
            <img src={W4_3} alt="Lustre Image 3" className="perfume-img"/>
            <img src={W4_4} alt="Lustre Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Evoke's mesmerizing blend captures the essence of bold
                sophistication, perfect for making a memorable entrance. Its deep
                and intriguing notes make it the ultimate statement fragrance for
                the modern, confident woman.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Blackcurrant, Bergamot<br />
                Heart Note: Jasmine, Rose<br />
                Base Note: Oakmoss, Vanilla
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Designed to evoke powerful memories and emotions, this fragrance is
                both bold and sophisticated.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Perfect for business meetings or any occasion where you need to
                exude confidence and authority.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Evoke makes me feel so powerful and confident. It's perfect for
                work." – Natalie S.
              </p>
            </div>
          </div>
          <NavLink to={"/Women#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="W5">
          <h2>Charm - ₹3,799</h2>
          <div className="image-gallery">
            <img src={W5_1} alt="Lustre Image 1" className="perfume-img"/>
            <img src={W5_2} alt="Lustre Image 2" className="perfume-img"/>
            <img src={W5_3} alt="Lustre Image 3" className="perfume-img"/>
            <img src={W5_4} alt="Lustre Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Charm weaves a spell of elegance and mystery, making every day feel
                like a special occasion. This enchanting fragrance is your secret
                weapon for confidence and grace, turning heads and winning hearts.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Pear, Raspberry<br />
                Heart Note: Lily of the Valley, Freesia<br />
                Base Note: Patchouli, Vanilla
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the charm of a magical evening under the stars, this
                fragrance is both enchanting and graceful.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Best for romantic dates or special events where you want to make a
                lasting impression.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Charm is absolutely enchanting. It's my secret weapon for date
                nights." – Jessica H.
              </p>
            </div>
          </div>
          <NavLink to={"/Women#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="W6">
          <h2>Grace - ₹3,599</h2>
          <div className="image-gallery">
            <img src={W6_1} alt="Lustre Image 1" className="perfume-img"/>
            <img src={W6_2} alt="Lustre Image 2" className="perfume-img"/>
            <img src={W6_3} alt="Lustre Image 3" className="perfume-img"/>
            <img src={W6_4} alt="Lustre Image 4" className="perfume-img"
            />
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Grace is the epitome of understated elegance, with its soft and
                refined scent offering a touch of class to any occasion. Its
                delicate balance of florals and sandalwood creates a timeless
                fragrance that's always in vogue.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Mandarin, Pink Pepper<br />
                Heart Note: Rose, Magnolia<br />
                Base Note: Sandalwood, Musk
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Grace embodies timeless elegance and poise, perfect for any occasion
                where sophistication is key.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Suitable for both day and night, enhancing your elegance and charm
                effortlessly.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Grace is the epitome of elegance. I feel so sophisticated whenever
                I wear it." – Sophia L.
              </p>
            </div>
          </div>
          <NavLink to={"/Women#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <h1>Men's Perfumes</h1>
        <div className="perfume" id="M1">
          <h2>Apex - ₹3,999</h2>
          <div className="image-gallery">
            <img src={M1_1} alt="Image 1" className="perfume-img"/>
            <img src={M1_2} alt="Image 2" className="perfume-img"/>
            <img src={M1_3} alt="Image 3" className="perfume-img"/>
            <img src={M1_4} alt="Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Apex stands at the summit of sophistication and refinement. Perfect
                for individuals who strive for excellence in every facet of their
                lives, exuding unparalleled confidence.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Grapefruit, Mint<br />
                Heart Note: Ginger, Nutmeg<br />
                Base Note: Vetiver, Sandalwood
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the peak of mountain ranges, this fragrance aims to
                capture the essence of achieving greatness.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Perfect for business meetings and professional settings, conveying
                confidence and authority.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Apex is simply amazing! The scent lasts all day and gets me so many
                compliments." - Michael S.
              </p>
            </div>
          </div>
          <NavLink to={"/Men#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="M2">
          <h2>Noble - ₹3,799</h2>
          <div className="image-gallery">
            <img src={M2_1} alt="Image 1" className="perfume-img"/>
            <img src={M2_2} alt="Image 2" className="perfume-img"/>
            <img src={M2_3} alt="Image 3" className="perfume-img"/>
            <img src={M2_4} alt="Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Noble radiates the grandeur and elegance of true royalty. Crafted
                for those who command respect and admiration, carrying themselves
                with effortless grace and authority.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Mandarin, Blackcurrant<br />
                Heart Note: Jasmine, Rose<br />
                Base Note: Oud, Tonka Bean
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the grandeur of royal palaces, this fragrance is crafted
                to convey nobility and grace.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Ideal for special occasions and celebrations, adding a touch of
                elegance to your presence.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Noble is a truly elegant fragrance. It makes me feel like royalty
                every time I wear it." - Christopher B.
              </p>
            </div>
          </div>
          <NavLink to={"/Men#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="M3">
          <h2>Phoenix - ₹4,499</h2>
          <div className="image-gallery">
            <img src={M3_1} alt="Image 1" className="perfume-img"/>
            <img src={M3_2} alt="Image 2" className="perfume-img"/>
            <img src={M3_3} alt="Image 3" className="perfume-img"/>
            <img src={M3_4} alt="Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Phoenix ignites a fiery passion and transformative energy. Perfect
                for those who continuously reinvent themselves, rising above
                challenges with renewed vigor and enthusiasm.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Blood Orange, Ginger<br />
                Heart Note: Cinnamon, Clove<br />
                Base Note: Incense, Vanilla
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>Inspired by the mythical phoenix, this scent is crafted to embody transformation and resilience.</p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p> Ideal for making a bold statement at social events, exuding energy and renewal.</p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Phoenix is fiery and passionate. It’s perfect for making a bold
                statement." - Daniel W.
              </p>
            </div>
          </div>
          <NavLink to={"/Men#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


      
        <div className="perfume" id="M4">
          <h2>Titan - ₹4,599</h2>
          <div className="image-gallery">
            <img src={M4_1} alt="Image 1" className="perfume-img"/>
            <img src={M4_2} alt="Image 2" className="perfume-img"/>
            <img src={M4_3} alt="Image 3" className="perfume-img"/>
            <img src={M4_4} alt="Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Titan exudes an aura of strength and unyielding spirit. Made for
                those who embody resilience and tackle adversity with unwavering
                resolve and determination.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Bergamot, Pink Pepper<br />
                Heart Note: Violet, Clary Sage<br />
                Base Note: Leather, Oakmoss
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the mighty titans of mythology, this scent is designed
                to evoke a sense of invincibility.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Suitable for formal events and evenings out, leaving a lasting
                impression of strength.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Titan has a rich, robust scent that I absolutely love. It’s perfect
                for evening wear and special occasions." - David L.
              </p>
            </div>
          </div>
          <NavLink to={"/Men#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="M5">
          <h2>Storm - ₹3,499</h2>
          <div className="image-gallery">
            <img src={M5_1} alt="Image 1" className="perfume-img"/>
            <img src={M5_2} alt="Image 2" className="perfume-img"/>
            <img src={M5_3} alt="Image 3" className="perfume-img"/>
            <img src={M5_4} alt="Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Storm unleashes a whirlwind of energy and excitement. Suited for
                those who live for adventure, embracing spontaneity and the thrill
                of the unknown.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Lemon, Basil<br />
                Heart Note: Cardamom, Geranium<br />
                Base Note: Musk, Amber
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the untamed forces of nature, this scent is for the
                adventurous man who thrives on excitement.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Ideal for casual outings and sports activities, providing a
                refreshing burst of energy.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Storm is incredibly refreshing. It's perfect for casual outings and
                always gives me a boost of energy." - James H.
              </p>
            </div>
          </div>
          <NavLink to={"/Men#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
        </div>


        <div className="perfume" id="M6">
          <h2>Valor - ₹4,299</h2>
          <div className="image-gallery">
            <img src={M6_1} alt="Image 1" className="perfume-img"/>
            <img src={M6_2} alt="Image 2" className="perfume-img"/>
            <img src={M6_3} alt="Image 3" className="perfume-img"/>
            <img src={M6_4} alt="Image 4" className="perfume-img"/>
          </div>
          <div className="perfume-content">
            <div className="content-section">
              <h3>Description</h3>
              <p>
                Valor captures the essence of bravery and determination. Ideal for
                those who confront life's challenges with unwavering courage and a
                bold spirit.
              </p>
            </div>
            <div className="content-section">
              <h3>Notes</h3>
              <p>
                Top Note: Bergamot, Black Pepper<br />
                Heart Note: Lavender, Leather<br />
                Base Note: Cedarwood, Patchouli
              </p>
            </div>
            <div className="content-section">
              <h3>Inspiration</h3>
              <p>
                Inspired by the valor and bravery of ancient warriors, this scent is
                designed to evoke a sense of power and courage.
              </p>
            </div>
            <div className="content-section">
              <h3>Usage Tips</h3>
              <p>
                Ideal for evening wear and formal occasions, leaving a lasting
                impression wherever you go.
              </p>
            </div>
            <div className="content-section">
              <h3>Customer Reviews</h3>
              <p>
                "Valor is my go-to fragrance for business meetings. It exudes
                confidence and makes me feel invincible!" - John D.
              </p>
            </div>
          </div>
          <NavLink to={"/Men#navBar1"}><a href="#" className="back-button">Back</a></NavLink>
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

export default Collections;