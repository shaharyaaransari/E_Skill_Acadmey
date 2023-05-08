import React from "react";
// import img1 from "../images/tendercut.jpg"
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
//import "../component/style/Footer.css"
import "../component/styles/Footer.css"

export const Footer = () => {
  return (
   <>
   <footer>
   <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em"
            }}
          >
           {/* <img src={img1} alt="logo" /> */}
          </h3>
          <p className="ex">EXPERIENCE LICIOUS APP ON MOBILE</p>
          <div className="play">
          <div >
            <img src="https://www.licious.in/image/rebranding/png/app-store-homepage.png" alt="Appstore" />
          </div>
          <div>
            <img src="https://www.licious.in/image/rebranding/png/playstore-homepage.png" alt="" />
          </div>
          </div>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
             <p className="ex">USEFUL LINKS</p>
              <ul className="li">
                
                <li>Refer & Earn </li>
                <li>Tendercuts Cash & Cash +</li>
                <li> Career</li>
              </ul>
            </div>
             <ul className="li">
                <li>Abouts us</li>
                <li> Bug Bounty Guidlines</li>
                <li> T&C</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>FSSC 22000 Certfication</li>
                <li>SA8000 Certification</li>
                <li>Sitemap</li>
             </ul>
            <div>
                <p>CONTACT US</p>
             <ul className="li">
              <li>Call: 1800-4190-786</li>  
              <li>talktous@licious.com</li>   
              
              <li><img  width="100px" src="https://www.licious.in/image/rebranding/png/3-dsecure.png" alt="Master" /></li>
              <li>HAVE SECURITY CONCERN?</li>
              <li>Mail us to: security@licious.com</li>
             </ul>
            </div>
            <div>
              <b>Social links</b>
              <div className="so">
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
                <AiFillApple />
                <FaGooglePlay />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   </footer>
   </>
  );
};
