import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from '../Images/bg5.gif'
import Counter from '../components/Counter';

import Header from '../components/Header';
import Chatbot from '../components/Chatbot';


function Home() {

  return (
    <>
      <Header/>

      <div>
        <div>
          <img src={photo} style={{ height: '90vh', width: "100%" }}></img>

          <h2 style={{ marginTop: '-400px', marginLeft: '50px',color:'white' }} >Your Problems <span className="text-success">our concerns</span></h2>
          <h5 className='ms-5 ps-1 text-light'>Provides solutions for your day to day Problems.<br />Thousands Choose us because of our reputation for excellence.</h5>
          <button className='btn btn-warning ms-5 p-2 mt-3'>Get Started</button>

        </div>

        </div>


<div className='row p-5 my-5' >
      <div className='col-md-2'></div>
      <div className='col-md-4 p-5'style={{marginTop:'150px'}}>
    
    <Card style={{ width: '25rem' ,height:'300px',borderRadius:'0% 50% 0% 0%' }}>
         
          <Card.Body >
            <h1>Our Vision</h1>
            <Card.Text >
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

  <Card style={{ width: '18rem',borderRadius:'50%',height:'280px',marginTop:'-150px',marginLeft:'-250px'}}>
          <Card.Img variant='top' src={photo}  style={{borderRadius:'50%',height:'280px',width: '18rem'}} />
        </Card>
        <Card style={{ width: '25rem' ,height:'300px',borderRadius:'0% 0% 0% 50%' ,marginTop:'-100px'}}>
         
          <Card.Body >
            <h1>Our Mission</h1>
            <Card.Text >
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div> 
         
      <div className="col-md-6"style={{marginTop:'150px'}}>
        
      <div className='mt-5 p-5'>
             <h1>Who We Are?</h1>
              <p style={{textAlign:'justify'}}>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content.Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content.Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content.Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content.Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content. Some quick example text to build on the card title and make up the
                 bulk of the card's content.
              </p>
          </div>
      </div>
    </div>
    <div className='row p-5 my-5'>
      <div className='col-md-6'>
      <img src="https://img.freepik.com/free-vector/flat-contact-us-background_23-2148181316.jpg" style={{height:'450px',width:'100%'}}></img>
      </div>
   
      <div className='col-md-6'>
     <a href='signup'> <img src="https://www.shutterstock.com/image-photo/man-using-virtual-touchscreen-clicks-600nw-2240924075.jpg" style={{height:'450px',width:'100%',borderRadius:'50%'}}></img></a>
      </div>
     
     
    </div>
<Counter/>
<Chatbot/>

      </>
      )
}

      export default Home