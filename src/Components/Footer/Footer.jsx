import React from "react";
import footerImage from "../../assets/C002-assets/logo-footer.png";
import footerFacebook from "../../assets/C002-assets/facebook.png";
import footerLinkedin from "../../assets/C002-assets/linkedin.png";
import footerInstagram from "../../assets/C002-assets/social.png";
import footerYoutube from "../../assets/C002-assets/youtube.png";
import { NavLink, Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white max-w-screen-2xl mx-auto p-8">
      <aside>
        <div className="flex items-center mt-12">
          <img src={footerImage} alt="" />{" "}
          <span className="mulish font-extrabold text-3xl text-white">
            Law.BD
          </span>
        </div>
        <ul className="flex gap-4 mt-8">
          <li className="text-lg font-medium text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-medium text-white">
            <Link to="/my-booking">My-Bookings</Link>
          </li>
          <li className="text-lg font-medium text-white">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="text-lg font-medium text-white">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </aside>
      <div style={{ width: "100%", borderTop: "1px dashed #FFFFFF30" }} />
      <nav>
        <div className="grid grid-flow-col gap-4 mb-12">
          <a href="https://www.facebook.com/nazmulxdev/" target="_blank">
            <img src={footerFacebook} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={footerInstagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nazmulxdev/" target="_blank">
            <img src={footerLinkedin} alt="" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={footerYoutube} alt="" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
