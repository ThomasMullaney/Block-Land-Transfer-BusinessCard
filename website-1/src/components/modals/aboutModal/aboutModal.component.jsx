import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../../assets/modals/aboutModal/profile.jpg";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal"
import BLT from "../../../assets/modals/aboutModal/BLT.jpg";
import "./aboutModal.style.css";



function AboutModal() {
  const [show, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        About
      </Button>

      <Modal size="lg" aria-labelled="contained-modal-title-vcenter" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Block Land Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Row className="pt-4 pb-4 align-items-center">
            <Col xs={12} md={6}>
              <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail fluid
              />
            </Col>
            <Col className="align-items-start p-2 my-details rounded">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorum delectus. Ad modi error harum explicabo unde sed optio officiis. Tenetur libero magnam ad qui aut autem explicabo placeat aliquam.
            </Col>
          </Row>
            <Accordion>
              <Accordion.Toggle
                  as={Button}
                  variant="outline-primary"
                  eventKey="0"
                  className="text-center m-2"
              >
                  Learn More
              </Accordion.Toggle> 
                <Accordion.Collapse eventKey="0" className="">
                  <Row className="pt-4 pb-4 align-items-center">
                   <Col xs={12} md={6}>
                    <Image 
                        className="profile justify-content-end"
                        alt="family"
                        src={BLT}
                        thumbnail fluid
                    />
                    </Col>
                  <Col xs={12} md={6} className="align-items-start p-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorum delectus. Ad modi error harum explicabo unde sed optio officiis. Tenetur libero magnam ad qui aut autem explicabo placeat aliquam.
                  </Col>
                    
                     
                        <a  data-toggle="modal"  href="#contact">
                          <Button className="m-4" variant="outline-primary">
                            Contact
                          </Button>
                        </a>
                       
                    </Row>   
                  </Accordion.Collapse>      
              </Accordion>
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default AboutModal;






