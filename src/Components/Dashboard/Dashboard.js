import React,{useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import AllOrders from './AllOrders/AllOrders';
import AllService from './AllServices/AllService';
import './Dashboard.css'
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay'
import AddOrders from './AddOrders/AddOrders'
import MakeReview from './MakeReview/MakeReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';


const Dashboard = () => {
    const {user,name}=useAuth()
    const [control, setControl] = useState(null);
    const [isAdmin,setIsAdmin]=useState(false)
    
    console.log(user.email)


    useEffect(()=>{
      fetch(`https://floating-retreat-33100.herokuapp.com/checkAdmin/${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        
        if(data[0]?.role==="admin"){
          setIsAdmin(true)
        }else{
          setIsAdmin(false)
        }
      })
    },[user?.email])
    

    console.log(isAdmin)




    
    return (
        <>
            <header>
                      
                <label for="check">
                  <i class="fas fa-bars" id="sidebar_btn"></i>
                </label>
            </header>
            <Row>
              
              <Col sm={2}>
                    <input type="checkbox" id="check"/>

                  <div class="sidebar">
                    <center>
                      {user?.photoURL? 
                          (<img src={user.photoURL} class="profile_image" alt=""/>)
                          :
                          (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AIzEG0497Y2hpo8Qrj6HPGx_TgdgEeK5Fg&usqp=CAU" class="profile_image" alt=""/>)
                      }
                      <h4>{user.displayName || name}</h4>
                    </center>
                    
                  {
                  isAdmin===true? 
                   (<div>
                    <a onClick={() => setControl("allOrders")} href="#"><i class="fas fa-info-circle"></i><span>All Orders</span></a>
                    <a onClick={() => setControl("addOrders")} href="#"><i class="fas fa-info-circle"></i><span>Add Orders</span></a>
                    <a onClick={() => setControl("allservices")} href="#"><i class="fas fa-sliders-h"></i><span>All Service</span></a>
                    <a onClick={() => setControl("makeAdmin")} href="#"><i class="fas fa-sliders-h"></i><span>Make Admin</span></a>
                   </div>)
                   :
                  ( 
                  <div>
                    <a onClick={() => setControl("pay")} href="#"><i class="fas fa-desktop"></i><span>Pay</span></a>
                    <a onClick={() => setControl("myOrders")} href="#"><i class="fas fa-cogs"></i><span>My orders</span></a>
                    <a onClick={() => setControl("review")} href="#"><i class="fas fa-table"></i><span>Review</span></a>
                   </div>
                   )
                   
                   }
                    
                  </div>
              </Col>
              <Col sm={10}>
                {control === "pay" && <Pay></Pay>}
                {control === "myOrders" && <MyOrders></MyOrders>}
                {control === "review" && <MakeReview></MakeReview>}
                {control === "allservices" && <AllService></AllService>}
                {control === "addOrders" && <AddOrders></AddOrders>}
                {control === "allOrders" && <AllOrders></AllOrders>}
                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
             

              </Col>

            </Row>
           
            
            
        
          </>
        
    );
};

export default Dashboard;
