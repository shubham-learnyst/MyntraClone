import React from "react";
import "./Footer.css";
import GoogleApp from "../Images/Google.png";
import AppStore from "../Images/app store.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AppsIcon from "@mui/icons-material/Apps";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import {Footer2} from "./Footer2";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider New</p>
        </div>
        <div className="footer-row">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Site Map</p>
        </div>
        <div className="footer-row">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="app">
            <img
              src={GoogleApp}
              alt="app"
              width="135px"
              className="appStore googleApp"
            />
            <img src={AppStore} alt="app" className="appStore" width="120px" />
          </div>
          <h3 className="social">KEEP IN TOUCH</h3>
          <div>
            <a href="https://www.facebook.com/" target="_blank"><FacebookIcon className="social1"></FacebookIcon></a>
            <a href="https://twitter.com/" target="_blank"><TwitterIcon className="social1"></TwitterIcon></a>
            <a href="https://www.youtube.com/" target="_blank"><YouTubeIcon className="social1"></YouTubeIcon></a>
            <a href="https://www.instagram.com/" target="_blank"><InstagramIcon className="social1"></InstagramIcon></a>
          </div>
        </div>
        <div className="footer-row">
          <div className="que">
            <AppsIcon />
            <p className="quality">
              <b>100% ORIGINAL</b> guarantee for all products at myntra.com
            </p>
          </div>
          <div className="que">
            <AutorenewIcon />
            <p className="quality">
              <b> Return within 30days</b> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};