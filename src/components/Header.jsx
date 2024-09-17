import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { isPersonContext } from '../Context/Context';
import { Button } from 'react-bootstrap';



function Header({ dash }) {
  const navigate = useNavigate()
  const { setIsPerson } = useContext(isPersonContext)
  const handlelogout = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsPerson(false)
    navigate('/')
  }
  
  return (
    <div>
      <Navbar style={{ backgroundColor: 'rgb(8, 8, 55', height: '120px' }} >
    
          <img src="https://img.pikbest.com/png-images/letter-e-logo-template-in-gradients-style--e-letter-logo--e-font-style--e-letter-logo-_1621486.png!sw800" width="60px" height="100px" className="d-inline-block align-top ms-4" alt="React Bootstrap logo" />  <br />
          <h3 className='ms-3 text-light'>Exemplar</h3>
  
          <div className='ms-5 d-flex' >
            <Nav.Link href="#home" className='mx-5 text-light' style={{ fontSize: '20px' }}><b>Home</b></Nav.Link>
            <Nav.Link href="#abt" className='mx-5 text-light' style={{ fontSize: '20px' }}><b>About Us</b></Nav.Link>
            <Nav.Link href='/Details' className='mx-5 text-light' style={{ fontSize: '20px' }}><b>Services</b></Nav.Link>
            <Nav.Link href="ftr" className='mx-5 text-light' style={{ fontSize: '20px' }} ><bootstrap><b>Contact</b></bootstrap></Nav.Link>
            <Nav.Link href="faq" className='mx-5 text-light' style={{ fontSize: '20px' }} ><b>Faqs</b></Nav.Link>
          </div>
  
        <Dropdown className='ms-auto me-5'>
            <Dropdown.Toggle id="dropdown-basic">
  
              <FontAwesomeIcon icon={faUser} size='xl' className='ms-auto me-2' />
            </Dropdown.Toggle>
  
        <Dropdown.Menu>
              <Dropdown.Item href='/signup'>SignUp</Dropdown.Item>
              <Dropdown.Item href='/signin'>Login</Dropdown.Item>
              {dash&&  <Dropdown.Item href='/signin'>Login</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={handlelogout} className='btn btn-warning me-3'>Logout</Button>
          
    
      </Navbar>


    </div>
  )
}

export default Header