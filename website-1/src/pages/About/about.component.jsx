import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/images/profile/profilePicture.png";
import Button from "react-bootstrap/Button";

import "./about.style.css";

function About() {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 pb-5 align-items-center">About</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image 
                                    className="profile justify-content-end"
                                    alt="profile"
                                    src={Profile}
                                    thumbnail fluid
                                    />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolorum delectus. Ad modi error harum explicabo unde sed optio officiis. Tenetur libero magnam ad qui aut autem explicabo placeat aliquam.
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-success">
                                                Contact
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a 
                                            href=""
                                            target="blank"
                                        >
                                            <Button className="m-2" variant="outline-success">
                                                Button
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a 
                                            href=""
                                            target="_blank"
                                        >
                                            <Button className="m-2" variant="outline-success">
                                                Button
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;