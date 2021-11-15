import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'


const AllService = () => {
    
   
    const[allServices,setAllServices]=useState([])
    const [control,setControl]=useState(true)
  
    useEffect(()=>{
        fetch("https://floating-retreat-33100.herokuapp.com/allServices")
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[control])
    

   
    const handleDelete=(_id)=>{
        const sure2=window.confirm("sure about to delete?");
        if (sure2){
            fetch( `https://floating-retreat-33100.herokuapp.com/deleteServices/${_id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
            .then((res) => res.json())
            .then((data) => {
            if (data?.deletedCount) {
              setControl(false);
              
            } else {
              setControl(true);
            }
          });
        }
       
   
  };

    return (
       <div>
            
           <div>

                 <h1 className="text-center mt-4 pb-5 pt-4">
                     Manage Services
                 </h1>
                 <h1 style={{borderBottom:"5px dotted black ",width:"30%",margin:"auto",marginBottom:"20px"}}></h1>
                 <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allServices.map((order,index)=>
                            <tr>
                            <td>{index+1}</td>
                            
                            <td>{order.title}</td>
                            <td>${order.price}</td>
                            <td><button onClick={()=>handleDelete(order._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                            )
                        }
                        </tbody>  
                    </Table>
           </div>
       </div>
    );
};

export default AllService;