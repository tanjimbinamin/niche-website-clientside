import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Placeorder = () => {
    const{id}=useParams()
    const{user}=useAuth()
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch(`https://floating-retreat-33100.herokuapp.com/service/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
  
    const { register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = data =>{ 
        data.mail=user.email;
        fetch(`https://floating-retreat-33100.herokuapp.com/addUsers`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })

        

    };

    return (
        
        <Container>
            <Row className="mt-5 shadow-3">
                <Col sm={6} style={{backgroundColor:"#6062df", borderRadius:"10px",boxShadow: "7.0px 14.1px 14.1px hsl(0deg 0% 0% / 0.28)" ,overFlow:"hidden"}} >
                    <Col sm={4} className="text-center"><img className="mt-4 mb-3 mx-1" style={{width:"80%",height:"80%",borderRadius:"10px"}} src={details?.image} alt="a food image" /></Col>
                    <Col sm={8} style={{backgroundColor:"#8b8ba6", borderRadius:"10px",padding:"15px",marginBottom:"15px" }} >
                        <h5><span style={{color:"#ffff"}}>Name:</span> {details?.title}</h5>
                        <h5><span style={{color:"#ffff"}}>Description:</span> {details?.description}</h5>
                        <h5><span style={{color:"#ffff"}}>Price: </span>$ {details?.price}</h5>
                    </Col>
                </Col>
                <Col sm={5} xs={5}>
                        <div className="login-box w-25 m-auto mt-5">
                                <div className="event-box border border d-flex justify-content-center align-items-center">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("name")}
                                        placeholder="Your Name" value={user?.displayName}
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("title", { required: true })}
                                        placeholder="food title" 

                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("address", { required: true })}
                                        placeholder="address"
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    <input
                                        {...register("price", { required: true })}
                                        placeholder="price" 
                                        className="p-2 m-2"
                                    />
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}

                                   
                                    <input type="submit" placeholder="place" className="btn btn-danger w-50" />
                                    </form>
                                    
                                </div>
                                </div>
                            </div>
                </Col>
                
            </Row>
        </Container>
       
    );
};

export default Placeorder;