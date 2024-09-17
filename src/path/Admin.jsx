import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MyGrv from '../components/MyGrv';
import { getallgrvApi } from '../services/allApi';



function Admin() {

  const [mygrv, setMyGrv] = useState([])
  useEffect(() => {
    getallgrv()
  }, [])

  const getallgrv = async () => {
    const result = await getallgrvApi()
    setMyGrv(result.data)
  }
  console.log(mygrv)


 
  return (
    <p>

      <div>
        <Navbar style={{ backgroundColor: '#2e9a2e' }} height={"600px"} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibN6ndmk4ir8BsD2OMn6quLWtWuYL5iahxxITw5ekFOgmAMWRIfPsUn9JzJ8fEO3MqZ4&usqp=CAU" width="60" height="60" className="d-inline-block align-top ms-5" alt="React Bootstrap logo" />
          <Nav.Link href="#home" className='mx-5'></Nav.Link>
          <h1 className='text-light m-5'>Welcome Exemplar</h1>
          <Link to='/'> <FontAwesomeIcon icon={faHouse} size='2xl' className=' ' color='white' /></Link>

        </Navbar>


      </div>
      <div>


        <div className='row p-5 my-4'>
          <div className='col-md-12 p-3'>
            <h3><span className='text-primary'>Greviances</span></h3>
            {mygrv?.map((item) => (
            <MyGrv grv={item}/>
            ))}
          </div>

          
        </div>






      </div>

    </p>

  )
}

export default Admin