import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'


const AllOrders = () => {
    
    const [allOrders, setAllOrders]=useState([])
    // const[allServices,setAllServices]=useState([])
    const [control,setControl]=useState(false)
    // const [control2,setControl2]=useState(false)
    
    useEffect(()=>{
        fetch('https://floating-retreat-33100.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[control])
    
    

   
    const handleDelete1=(id)=>{
        const sure=window.confirm("sure about to delete?");
        if (sure){
            fetch( `https://floating-retreat-33100.herokuapp.com/deleteOrders/${id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
            .then((res) => res.json())
            .then((data) => {
            if (data?.deletedCount) {
              setControl(!control);
            } else {
              setControl(false);
            }
            });
        }
        
    }
  

    return (
       <div>
            <h1 className="text-center mt-4  pt-4">
                     Manage Orders
            </h1>
            <h1 style={{borderBottom:"5px dotted black ",width:"30%",margin:"auto",marginBottom:"20px"}}></h1>
           <div>
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
                            allOrders.map((order,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td>{order?.name}</td>
                            <td>{order?.mail}</td>
                            <td>{order?.title}</td>
                            <td>${order?.price}</td>
                            <td><button onClick={()=>handleDelete1(order?._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                            )
                        }
                        </tbody>  
                    </Table>
           </div>
           
       </div>
    );
};

export default AllOrders;