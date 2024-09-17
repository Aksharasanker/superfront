
import React, { useContext, useState } from 'react'
import logo from '../Images/pic2.gif'
import { Button, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allApi';
import { Link, useNavigate } from 'react-router-dom';
import { isPersonContext } from '../Context/Context';



function Auth({ signup }) {
  const {setIsPerson}=useContext(isPersonContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",

  })

  const navigate = useNavigate()
  const register = async (e) => {
    e.preventDefault()
    const { username, email, password } = user
    if (!username || !email || !password) {
      toast.error('please fill the form completltly')
    } else {
      const result = await registerAPI(user)
      console.log(result);
      if (result.status == 200) {
        toast.success('registration successfull')
        setUser({
          username: '',
          email: "",
          password: ''
        })
        navigate('/signin')
      } else {
        alert(result.response.data)
      }
    }
  }

  const userLogin = async (e) => {
    e.preventDefault()
    const { email, password } = user
    if (!email || !password) {
      toast.info('please fill the form completly')
    }
    else {
      const result = await loginAPI(user)
      console.log(result);
      if (result.status == 200) {
        toast.success('Login successful')
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        setUser({
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate('/User')
        }, 2000)
        setIsPerson(true)
      }
      else{
        if (email === 'admin@gmail.com' && password == 'admin123') {
          setIsLoggedIn(true);
          toast.success('Login succefull')
          
          setTimeout(()=>{
            navigate('/admin')
        },2000)
        } else {
          toast.warning('Please check your credentials');
        }
      
          console.log(result);
      }

    }

  }

  console.log(user);
  const logged=userLogin?true:false
  const signupForm = signup ? true : false
  return (





    <>

      <div className='row main'>
        <Row className="mx-0 w-100 d-flex justify-content-center align-items-center mt-5 mb-5">
          <Col md={10} sm={12} className="px-4 px-md-0">
            <Row className="mx-0 w-100 d-flex justify-content-center align-items-center">
              <Col md={8} sm={12} className="shadow p-0 d-flex">
                <img className='px-4 py-5' src={logo} alt="signupImg" style={{ width: "330px", height: "470px" }} />

                <div className="d-flex flex-column justify-content-center align-items-center ms-4 mt-5 w-50 " style={{ width: "80vh" }} >

                  <>
                    {signupForm ? <h5 className='text-light'>Create New your Account</h5> :
                      <h5 className='text-light'>Sign in to your Account</h5>}


                    {signupForm && <input type="text" placeholder="Enter Full Name" className="form-control rounded-0 shadow border-0 fw-bold mb-4 mt-4" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />}


                    <input type="text" placeholder="Enter your Email" className="form-control rounded-0 shadow border-0 fw-bold mb-4" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /></>


                  <input type="password" placeholder="Password" className="form-control rounded-0 shadow border-0 fw-bold mb-4" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

                  {signupForm ? <div>
                    <Button onClick={register} variant="success" type="submit" className='w-50'> Register</Button>
                    <p className='text-dark'>Already a user? Click Here to <Link to={'/signin'} className='text-danger'>Login</Link></p>
                  </div>
                    :

                    <div>


                      <Button onClick={userLogin} variant="success" type="submit" className='w-50'> Login </Button>
                      <p className='text-dark'>New user? Click Here to <Link to={'/signup'} className='text-danger'>Register</Link></p>
                    </div>}

                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <ToastContainer theme='colored' autoClose={2000} position='top-center' />
    </>

  )
}

export default Auth