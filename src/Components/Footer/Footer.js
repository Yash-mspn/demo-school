import React from "react";
import { FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div class="main-footer">
        <div className="footer-top">
          <div className="footerlogo-img" >
            <img style={{backgroundColor: "transparent",
              borderRadius: "30%",}} src="logo.png" alt="" />
          </div>
          <div className="footer-content">
            <p>Have any questions?</p>
            <p>
              Call Us: +116254481 , Mail Us:
              info@titansinternationalschool.com
            </p>
            <p>
              <p>Visit us at:</p>
              <p>
              10 dowing street, West miniter, London.            
               </p>

            </p>
          </div>
          <div className="socialmedia-link">
            <div className="socialall">
              <div>
              <a
                // href="https://www.facebook.com/p/Shri-Nav-Niketan-School-100069862911849/"
                target="_blank"
              >
                <div className="alllink-soc">
                  <FaFacebook />
                </div>
              </a>
              </div>
              <a
                href="/"
                target="_blank"
              >
                {" "}
                <div className="alllink-soc">
                  <FaTwitter />
                </div>
              </a>
              <a
                // href="https://www.instagram.com/newwisdom.school/"
                target="_blank"
              >
                {" "}
                <div className="alllink-soc">
                  <FaInstagram />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© All Rights Reserved by, Titans International School</p>
          <p className="footer-made">
            Made with <i class=" ri-heart-3-fill"></i> by{" "}
            <a href="https://www.titans-inc.com/"> Titans Inc</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
