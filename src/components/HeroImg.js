import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from '../assets/intro-video.mp4';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video loop className="intro-img"  source src={IntroImg}  type="video/mp4" alt="Alternative text for hero video" autoPlay />
      </div>
      <div className="content">
      <h1>Expand with Cutshot Consulting</h1>
        <h2>A No-Limits Digital Media Agency</h2>
        <br></br>
        <br></br>
      </div>
      <br></br>
        <br></br>
        <div className="aboutsec">
        <h5>About us</h5>
        <br></br>
            <p>Cutshot Consulting started off as a marketing agency that specialized in helping companies in the web3 space with their digital marketing efforts. Our team of experienced marketers has a deep understanding of the latest trends and technologies in the space, and we have been helping businesses navigate the digital landscape and develop effective marketing strategies to promote their products and services online. As we have grown, we have expanded our services to include helping chiropractic businesses and massage therapists with their marketing and consulting needs. We understand the unique challenges these businesses face and have developed strategies to help them expand and increase their revenue. We work closely with our clients to understand their business objectives and develop a customized strategy that delivers results. Whether you're looking to increase your online visibility, drive more traffic to your website, or establish a strong brand, we have the expertise and resources to help you succeed. Learn more about our services in the <b><a href="/project">Work</a> </b> section.
</p>
        </div>
      <div className="frontpage">
        <h5>Get to Know Us</h5>
        <br></br>
        <p>
        At CutShot Consulting, our vision is to aid chiropractic businesses and massage therapists, providing social media marketing and consulting services to help them grow their presence, expand, attract more customers and increase their monthly revenue. Our team of experienced marketers is well-versed in the latest digital marketing trends and techniques, and we are dedicated to helping our clients achieve their business objectives.
        </p>
      </div>
    </div>
  )
}

export default HeroImg
