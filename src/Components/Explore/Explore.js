import React,{useState,useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {

    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://floating-retreat-33100.herokuapp.com/allServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="pb-5 mb-5">
            <div className="text-center mt-5 mb-5">
                <h3 style={{color:"lightcoral"}}>Our Menu</h3>
                <h3 style={{fontSize:"3rem",fontFamily: 'Russo One'}}>Today's speciality</h3>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-5">
                    {
                       services.map(service=> <ServiceDetails service={service}></ServiceDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;