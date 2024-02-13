import React from 'react';
import { FaFacebook, FaInstagram ,FaTiktok, FaTelegram,FaPhoneAlt, FaEnvelope,FaMapMarked } from 'react-icons/fa';
import "./footer.css";
const Footer = () => {
  return (
    <footer >
      <div className="left-footer">
        <h1 className='logo-footer'>ALPHA rent<span className='com'>.com</span></h1>
        <ul className='social-lists'>
          <li><a href="#" className='socialmedia'  style={{ color: '#fff' }}><FaFacebook size={30}/></a></li>
          <li><a href="# "className='socialmedia'style={{ color: '#fff'  }}><FaTiktok size={30}/></a></li>
          <li><a href="#" className='socialmedia'style={{ color: '#fff' }}><FaTelegram size={30}/></a></li>
          <li><a href="#" className='socialmedia'style={{ color: '#fff' }}><FaInstagram size={30}/></a></li>

        </ul>
      </div>
       <div class="building">
        <div class="floor">
          <div class="window"></div>
          <div class="window"></div>
        </div>
        <div class="floor">
          <div class="window"></div>
          <div class="window"></div>
        </div>
        
            <div class="door"></div>
            <div className="ground">
            </div>
            <h1 id="tree1">🌳</h1> 
            <h1 id="tree2">🌳</h1> 
            
        </div>
      
      <div className='right-footer'>
        <h4 className='right-footer-tactcon'>Contact Info</h4>
        <ul className='contact-information'>
            <li className="address-info"><FaMapMarked/> Piassa,Adiss Ababa</li>
            <li className="address-info"><FaPhoneAlt/> +251963500481</li>
            <li className="address-info"><FaEnvelope/> Alpharent@gmail.com</li>
        
        </ul>
       
      </div>
      <div className="copyright">
    <p className='copyright-text'>&copy; 2024 Alpha rent.com</p>
  </div>
  
        
    </footer>
       
  );
};

export default Footer;
