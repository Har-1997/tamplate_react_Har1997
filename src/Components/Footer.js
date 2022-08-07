import React from 'react';
import { Button, Container } from 'react-bootstrap';
import fb from "./fb.svg.png";
import insta from "./insta.svg";
import twitter from "./twitter.svg";

 function Footer() {
  return (
    <div className='main-footer'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 footerColDiv'>
                <div className='contPngDiv'>
                    <img src={fb} alt="Facebook logo" className='contLogo' />
                    <img src={insta} alt="Instagram logo" className='contLogo' />
                    <img src={twitter} alt="Twitter logo" className='contLogo' />
                </div>
                <div className='footerText'>
                    <b>The term originally referred to messages sent</b>
                    <b>using the Short Message Service (SMS).</b>
                    <b>© 2013-2022 React / JavaScript library</b>
                </div>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Footer;