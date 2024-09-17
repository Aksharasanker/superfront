
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function MyGrv({ grv }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <>

    
<div className="row p-2 my-4 d-flex">
  <div className="col-md-5 ">
    <ul>
      <li ><h2 className='text-warning'>{grv.type}</h2></li>
      <li style={{listStyle:'circle'}}>{grv.phone}</li>
      <li style={{listStyle:'circle',textAlign:'justify'}}>{grv.greviance}</li>
    </ul>
  </div>
  <div className='col-md-2'><FontAwesomeIcon icon={faPenNib} className='ms-4'/></div>
  <div className="col-md-1">
  <Button variant="success" className='ms-5' onClick={handleShow}>
        Reply
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body >Type Your Message Here........
        <InputGroup>
        
        <Form.Control as="textarea" aria-label="With textarea"className='mt-3' />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
</div>

    </>
  )
}

export default MyGrv

