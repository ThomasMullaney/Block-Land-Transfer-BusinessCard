import React, { useState, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.style.css";
import AboutModal from "../modals/aboutModal/aboutModal.component";
import ContactModal from "../modals/contactModal/contactModal.component";
import ServiceModal from "../modals/serviceModal/serviceModal.component";





const MyNavbar = () => {
    const [show, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    return (
        <>
        <Navbar 
            collapseOnSelect
            fixed="top"
            expand="md"
            variant="white"
            className="animate-navbar nav-theme justify-content-center "
        >
            {/* <Navbar.Brand href="#home">
                <img className="logo-image"
                 src={Logo} 
                 alt="website logo" />
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav>
                    <AboutModal  className="navbar-item" />
                    <ServiceModal  className="navbar-item" />
                    <ContactModal  className="navbar-item" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};


export default MyNavbar;
