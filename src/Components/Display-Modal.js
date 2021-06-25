import React, {useState} from 'react'
import {Modal, Button, Container} from 'react-bootstrap'
import Display from '../utils/DisplayText'

export const TextModal = (props) =>{
    const [show, setShow] = useState(false);
    const [state, setState] = useState(props.employee)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <Container>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Text Messages</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Display employee={state} type="text" />
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
