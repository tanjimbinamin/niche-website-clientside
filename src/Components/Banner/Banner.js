import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import img1 from './motorbike.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-image">
        <Container>
            <Row>
                <Col className="mt-5 pt-5">
                    <h3>Meet the biker</h3>
                    <h1>Motobots here</h1>
                    <p style={{color:"black",fontSize:"20px"}}>A motorcycle or motorbike is a vehicle used to transport people from one place to another. It does not have 4 wheels like a car. It has 2 wheels like a bicycle. But it has a motor like a car. A motorcycle is usually driven by one person.</p>
                </Col>
                <Col className="align-items-center d-flex justify-content-center" >
                    <img style={{width:"470px",height:"100%"}} src={img1} alt="" />
                </Col>
            </Row>
        </Container>    
        </div>
        
    );
};

export default Banner;