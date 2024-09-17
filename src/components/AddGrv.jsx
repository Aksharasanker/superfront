import React, { useContext, useEffect, useState, useRef } from 'react'
import { AddGrvResponseStatusContext } from '../Context/Context';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addGrvApi, getUserGrvApi } from '../services/allApi';
import log from '../Images/pic99.jpg'
import Header from './Header';
import emailjs from '@emailjs/browser';



function AddGreviance({ usergrev }) {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mqy89zo', 'template_fhqif8q', form.current, {
        publicKey: 'n2Jb0ThDqTexTy8ZO',

      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  const { AddResponse } = useContext(AddGrvResponseStatusContext)
  const [usergrv, setUserGrv] = useState([])


  const getusergrv = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserGrvApi(reqHeader)
      setUserGrv(result.data);
    }

  }

  const [data, setData] = useState({
    type: "",
    phone: "",
    greviance: ""

  })
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("")


  const handleClose = () => setShow(false);
  //function to open the modal
  const handleShow = () => setShow(true);
  //function to clear all data entered in the modal(cancel button)
  const handleClose1 = () => {
    setData({
      type: "",
      phone: "",
      greviance: ""
    })

  }
  useEffect(() => {
    getusergrv()
  }, [AddResponse])

  //function to add project details
  const handleAdd = async (e) => {
    e.preventDefault()
    const { type, phone, greviance } = data
    if (!type || !phone || !greviance) {
      toast.error('please fill the form completltly')
    } else {
      setData({
        type: '',
        phone: "",
        greviance: ""
      })


      if (token) {
        let reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

        const result = await addGrvApi(data, reqHeader)
        console.log(result);
        if (result.status >= 200) {
          toast.success('complaint registered successfully')

          handleClose1()
          handleClose()

        }
      }
      else {
        alert(result.reponse.data)
      }

    }
  }


  console.log(data);
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'))
    }
    else {
      setToken("")
    }
  }, [])





  return (

    <div className=' d-flex'>

      <div className='col-md-5'> <img className='mt-5 ms-5' src={log} onClick={handleShow} style={{ height: '80vh' }} /></div>

      

    
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title className='text-success'>Add New Greviance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
  
            <Form.Group className="mt-5 w-75 ms-5 ">
              <h3 className='mb-3 mt-3' >Add Your Complaints Here</h3>
              <Form.Select value={data.service} onChange={(e) => setData({ ...data, type: e.target.value })} >
                <label>Select Grieviance Type</label>
                <option >Select Grieviance Type</option>
                <option value={"Personel"}>Personel</option>
                <option value={"Social"}>Social</option>
                <option value={"Crime"}>Crime</option>
                <option value={"Irresponsiblities"}>Irresponsiblities</option>
  
              </Form.Select>
            </Form.Group>
  
            <label style={{ color: "white" }} htmlFor='date'></label>
            <input style={{ marginTop: '10px', width: '530px' }} placeholder='phone' type='phone' className='form-control ms-5' value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })} />
  
  
            <div>
  
  
              <FloatingLabel className='w-75 mt-5 ms-5' controlId="floatingTextarea2" label="Please brief your greiviance in short............." >
                <Form.Control as="textarea" placeholder="Enter Your Address" style={{ height: '250px' }} value={data.greviance} onChange={(e) => setData({ ...data, greviance: e.target.value })} />
              </FloatingLabel>
            </div>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose1}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleAdd} >
              Add
            </Button>
          </Modal.Footer>
  
          <p><i><span className='text-danger'>*For fast response please fill below form to send an email notificationv</span></i></p>
         
          <form ref={form} onSubmit={sendEmail} style={{marginLeft:'5px' ,marginTop:'-20px'}} >
            
            <input type="text" name="user_name" placeholder='name'style={{border:'1px solid black'}}/>
            <input type="email" name="user_email" placeholder='email'style={{border:'1px solid black'}} className='mt-3' /><br></br>
            <input type="submit"className='mt-3' value="Send" style={{border:'1px solid black', color:'red'}}/>
          </form>
        </Modal>
    

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

      <div className='col-md-12 mt-5'>
        <h3>My Greviances</h3>
        {usergrv?.length > 0 ?
          usergrv?.map((item) => (
            <div className="col-md-5 ">

              <ul>
                <li ><h4>{item.type}</h4></li>
                <li style={{ listStyle: 'circle' }}>{item.greviance}</li>
              </ul>
            </div>))
          :
          <p>No greviances</p>
        }
      </div>
    </div>



  )
}

export default AddGreviance