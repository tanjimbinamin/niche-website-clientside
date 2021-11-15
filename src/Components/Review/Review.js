import React, { useEffect, useState } from 'react';
import {  Container,Row,Col, Card,Button } from 'react-bootstrap';
import RatingStars from '../Dashboard/MakeReview/RatingStars/RatingStars';
import img from './img.svg'

const Review = () => {

    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('https://floating-retreat-33100.herokuapp.com/getReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
        
    },[])

    
    return (
        <Container>
           <h1 className="mt-5 pt-5 pb-5 text-center">Reviews</h1>
           <Row >

               <Col>
                    <div style={{border:"2px solid black",margin:"0 0 auto",height:"400px",overflowY:"scroll"}}>
                    <Card >
                        <Card.Header>reviews</Card.Header>
                       { reviews.map(review=> 

                                <Card.Body className="mb-5 mt-3" style={{backgroundColor:"#18222d",margin:"0 10px 0 10px",borderRadius:"20px"}} >
                                    <Card.Title style={{color:"white"}}>{review.firstName}</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    
                                    <RatingStars review={review}></RatingStars>
                                </Card.Body>
                       
                       
                       
                       )
                       
                       }
                    </Card>
                    </div>

               </Col>
               
               <Col className="d-flex justify-content-center align-items-center ps-3 pt-5">
                    <img style={{width:"450px"}} src={img} alt="" />
               </Col>
           </Row>
        </Container>
    );
};

export default Review;



/* <Col style={{borderRadius:"20px"}}>
                    <Carousel >
                    <Carousel.Item interval={1000}>
                        <img style={{borderRadius:"20px",overflow:"hidden"}}
                        className="d-block w-80 "
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img style={{borderRadius:"20px",overflow:"hidden"}}
                        className="d-block w-80"
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{borderRadius:"20px",overflow:"hidden"}}
                        className="d-block w-80"
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{borderRadius:"20px",overflow:"hidden"}}
                        className="d-block w-80"
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>      
               </Col> */