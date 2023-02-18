import "./FooterStyles.css";
import React from 'react';
import { FaFacebook , FaInstagram, FaMailBulk, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
            <div className="email">
            <a href="mailto:cutshotconsulting@gmail.com" target="_blank"> <h4><FaMailBulk size={20} style={{ color:"#0072C6", marginRight:"2rem" }}/>
                cutshotconsulting@gmail.com</h4>  </a>
                <br></br>
                <p>Cutshot Consulting Inc.</p>
                <br></br>
                <p>©2022 by Cutshot Consulting Inc.</p>
            </div>
        </div>
            <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100089648028162&mibextid=LQQJ4d" target="_blank"> <FaFacebook size={30} style={{ color:"#3b5998", marginRight:"1rem" }}/> </a>
            <a href="https://twitter.com/CutShotAgency" target="_blank">  <FaTwitter size={30} style={{ color:"#00acee", marginRight:"1rem" }}/></a>
            <a href="https://www.instagram.com/cutshotconsulting/" target="_blank"> <FaInstagram size={30} style={{ color:"#8a3ab9", marginRight:"1rem" }}/></a>
            </div>
        </div>
  )
}

export default Footer
