import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.style.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">Contact</h1>
        <Jumbotron className="contact-jumbotron">
            <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <div className="m-2">
                        <a
                            href="mailto:"
                            target="_blank"
                            rel="noopener no referrer"
                        >
                            <Button variant ="outline-dark" title="email">
                                <i className="btn fas fa-envelope-square"></i>
                            </Button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a 
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant='outline-dark' title="contacttarg">
                                <i className="btn fab">contact targ</i>
                            </Button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Jumbotron>
        </div>
    );
};

export default ContactForm;