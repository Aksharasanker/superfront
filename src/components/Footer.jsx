import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
       
       <div className='mt-5 w-100 p-4' style={{ backgroundColor: 'rgb(8, 8, 55'}}id='ftr' >
            <div className="row mx-md-5 mx-3">
            <img src="https://img.pikbest.com/png-images/letter-e-logo-template-in-gradients-style--e-letter-logo--e-font-style--e-letter-logo-_1621486.png!sw800" style={{height:"80px",width:'100px'}}></img>
                <div className="col-md-2">
                 
                  <h4 className='text-white'>Exempler<br/>You are your own superHero</h4>
                    
                    <div className='d-flex mt-4 justify-content-between'>
                    <FontAwesomeIcon icon={faInstagram} className='fa-xl text-light' />
                    <FontAwesomeIcon icon={faFacebook} className='fa-xl text-light' />
                    <FontAwesomeIcon icon={faTwitter} className='fa-xl text-light' />
                    <FontAwesomeIcon icon={faLinkedin} className='fa-xl text-light'  />

                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                    <h4 className='text-light'>Useful Links</h4>
                   <Link className='mt-3' style={{textDecoration:'none',color:'white'}} to={'/'}> <p></p></Link>
                    <Link style={{textDecoration:'none',color:'white'}}to={'faq'}><p>Testimonials</p></Link>
                   <Link style={{textDecoration:'none',color:'white'}}to={'/dashboard'}> <p>Contact Us</p></Link>
                   <Link style={{textDecoration:'none',color:'white'}}to={'/dashboard'}> <p>Our Services</p></Link>
                   <Link style={{textDecoration:'none',color:'white'}}to={'/dashboard'}> <p>Faqs</p></Link>
                </div>
                
                
                <div className="col-md-2">
                    <h4 className='text-light'>Address And Location</h4>
                    <p className='text-light'>15/17 Marvel aveniew,Trivandrum
                       Phone: 9854647541
                       Email:teamexemplar@gmail.com
                       Office Time: 10AM- 5PM<br/>
                       <FontAwesomeIcon icon={faPhone} />Available 24*7</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <h4 className='text-light'>Newsletter</h4>
                    <div className='d-flex mt-3'>
                        <p className='text-light' >Get instant news<br/>
                        about offers and packages</p>
                        
                    </div>
                    <button className='btn btn-light ms-2 w-75'>Subscribe</button>
                    
                </div>
               
            </div>
        <p className='text-center text-light'>Copyright ©️ 2024 @Team Exempler</p>
        </div>
        
    </>
  )
}


export default Footer