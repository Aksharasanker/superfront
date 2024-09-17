import React, { useState } from 'react'
import Header from '../components/Header'
import AddGreviance from '../components/AddGrv'
import { Col, Row } from 'react-bootstrap'


function Dashboard({dashboard}) {
  const dash=dashboard
  const [username,setUsername]=useState("")
  useEffect(()=>{
   if(sessionStorage.getItem('existingUser')){
    let existingUser=JSON.parse(sessionStorage.getItem('existingUser'))
    console.log(existingUser)
    setUsername(existingUser.username)
}
  },[])
  console.log(username);
  
  return (
    <div>
          <Header dash={dash}/>
          <h3 className='ms-4'>Welcome {username}</h3>
          <Row className="mt-4">
            <Col sm={12} md={8}>
              <AddGreviance/>
            </Col>
          
          </Row>
         
    </div>
  )
}

export default Dashboard