import React from "react";
import "./title.style.css";
import Image from "react-bootstrap/Image";
import BLT from "../../assets/modals/aboutModal/BLT.jpg"
import Row from "react-bootstrap/Row";


const TitleMessage = () => (

   <Row className="justify-content-center">
    <Image 
    className="image justify-content-md-center"
    alt="land transfer logo"
    src={BLT}
    />
</Row>
);

export default TitleMessage;