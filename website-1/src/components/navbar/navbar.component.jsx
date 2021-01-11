import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "./../../assets/icons/TLMlogo.png";
import "./navbar.style.css";

const MyNavbar = () => {
    return (
        <>
        <Navbar 
            collapseOnSelect
            fixed="top"
            expand="md"
            variant="white"
            className="animate-navbar navbar-custom nav-theme justify-content-between bg-img"
        >
            <Navbar.Brand href="#home">
                <img className="logo" src={Logo} alt="website logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href="#apply">Apply</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.link href="#contact">Contact</Nav.link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default MyNavbar;
