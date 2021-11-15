import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const{user}=useAuth()
    console.log(user)
    const [orders, setOrders]=useState([])
    const [control,setControl]=useState(false)
    useEffect(()=>{
        fetch(`https://floating-retreat-33100.herokuapp.com/myOrders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[control])

    const handleDelete=(id)=>{

        const sure=window.confirm("sure about to delete?");
        if (sure){
            fetch(`https://floating-retreat-33100.herokuapp.com/deleteOrders/${id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
            .then((res) => res.json())
            .then((data) => {
            if (data.deletedCount) {
              setControl(!control);
            } else {
              setControl(false);
            }
          });
        }

       
    console.log(id);
  };
        
    
    
    console.log(orders)
    return (
        
        <Table striped bordered hover variant="dark">

        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map((order,index)=>
            <tr>
              <td>{index+1}</td>
              <td>{order.name}</td>
              <td>{order.mail}</td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td><button onClick={()=>handleDelete(order._id)} className="btn btn-danger">Delete</button></td>
            </tr>
              )
          }
        </tbody>  
      </Table>
    );
};

export default MyOrders;