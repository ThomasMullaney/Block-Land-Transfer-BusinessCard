import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../../assets/modals/aboutModal/profile.jpg";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal"
import BLT from "../../../assets/modals/serviceModal/BLTservice.jpg";
import FamilySteps from "../../../assets/modals/serviceModal/familySteps.jpg";



function ServiceModal() {
  const [show, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Services
      </Button>

      <Modal size="lg" aria-labelled="contained-modal-title-vcenter" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How We Can be of Assistance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={BLT}
                  thumbnail fluid
                />
              </Col>
              <Col className="align-items-start p-2 my-details rounded">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorum delectus. Ad modi error harum explicabo unde sed optio officiis. Tenetur libero magnam ad qui aut autem explicabo placeat aliquam.
            </Col>
            </Row>
          </div>
          <div>
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant="outline-primary"
                eventKey="0"
                className="m-2 text-center"
              >
                Learn More
              </Accordion.Toggle>
              <Container>
                <Accordion.Collapse eventKey="0" className="text-left">
                  <Row className="pt-3 pb-5 align-items-center">
                    <Image
                      className="profile justify-content-end"
                      alt="profile"
                      src={FamilySteps}
                      thumbnail fluid
                    />
                  <Row xs={12} md={6} className="align-items-start p-2 my-details rounded">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorum delectus. Ad modi error harum explicabo unde sed optio officiis. Tenetur libero magnam ad qui aut autem explicabo placeat aliquam.
                  </Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="#contact">
                          <Button className="m-2" variant="outline-primary">
                            Contact
                          </Button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Container>
            </Accordion>
          </div>
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




export default ServiceModal;
