import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At FoodGo, we are passionate about bringing the world's flavors to
            your doorstep. Our food delivery service offers a diverse range of
            cuisines, including Indian, Chinese, Italian, Mexican, Thai, and
            many more. Whether you're craving a spicy curry, a hearty pasta, or
            a fresh sushi roll, FoodGo has something to satisfy every palate.
            Our commitment to quality and convenience ensures that you can enjoy
            delicious meals from the comfort of your home. Experience the best
            of global cuisine with FoodGo!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8130265893</li>
            <li>Contact @harshaggarwal361@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Foodgo.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
