import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../../assets/modals/aboutModal/profile.jpg";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal"
import Slide8 from "../../../assets/modals/contactModal/forSaleHome.jpg";
import Slide9 from "../../../assets/modals/contactModal/familyWave.jpg";


function ContactModal() {
    const [show, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    return (
        <>
        
        <Button variant="primary" onClick={handleShow}>
          Contact
        </Button>

        <Modal  size="lg" aria-labelled="contained-modal-title-vcenter" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Block Land Transfer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="pt-4 pb-4 align-items-center">
              <Col xs={12} md={6} lg={6}>
                <Image
                    className="profile justify-content-end"
                    alt="House for Sale"
                    src={Slide8}
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
                    Contact
                </Accordion.Toggle> 
                  <Accordion.Collapse eventKey="0" className="">
                    <Row className="pt-4 pb-4 align-items-center">
                    
                      <Image xs={12} md={12} lg={12}
                          className="profile justify-content-end"
                          alt="profile"
                          src={Slide9}
                          thumbnail fluid
                      />
                    
                    <Row xs={12} md={6} className="align-items-start p-2 m-2 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorum delectus. Ad modi error harum explicabo unde sed optio officiis. Tenetur libero magnam ad qui aut autem explicabo placeat aliquam.
                    </Row>
                    <div id="contact buttons" className="m-auto">
                          <a href="mailto:tloring.mullaney@gmail.com">
                            <Button className="m-4" variant="outline-primary">
                              Email
                            </Button>
                          </a>
                          <a href="tel:######">
                            <Button className="m-1" variant="outline-primary">
                              Call us at ###-###-###
                            </Button>
                          </a>
                    </div>
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




export default ContactModal;
