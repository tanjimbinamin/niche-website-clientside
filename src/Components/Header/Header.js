
import React from 'react';
import { Container, Nav, Navbar, Offcanvas,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2'

const Header = () => {
    const {user,setUser,logOut,name}=useAuth()

    const handleSignOut=()=>{
       
         logOut()
        .then(() => 
          {
          
            setUser("")
            Swal.fire(
                'Successfully!!',
                'Logged out!',
                'success'
              )
            
            
          }
            )
    }
    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container >
                    <NavLink style={{textDecoration:"none"}} to='/'> 
                    <Navbar.Brand href="#">Motobot</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header style={{backgroundColor:"#84bcbd"}} closeButton>
                       {!user?.email? <Offcanvas.Title id="offcanvasNavbarLabel">Menu </Offcanvas.Title>
                       :
                        <Offcanvas.Title id="offcanvasNavbarLabel">Welcome <b>{user.displayName || name}</b> </Offcanvas.Title>}
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{backgroundColor:"#18222d"}} >
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink  className="d-flex justify-content-center align-items-center" style={{textDecoration:"none"}} to='/explore'>
                            <Nav.Link  href="#action1"><Button style={{width:"200px"}} variant="btn btn-outline-info">Explore</Button></Nav.Link>
                        </NavLink>  
                        <NavLink className="d-flex justify-content-center align-items-center" style={{textDecoration:"none"}} to='/dashboard'>
                            <Nav.Link href="#action2"><Button style={{width:"200px"}} variant="btn btn-outline-info">Dashboard</Button></Nav.Link>
                        </NavLink>  
                        
                        
                       { !user?.email? <NavLink style={{textDecoration:"none"}} className="d-flex justify-content-center align-items-center" to='/login'>
                            <Nav.Link href="#action2"><Button style={{width:"200px"}} variant="btn btn-outline-info">Log in</Button></Nav.Link>
                        </NavLink>
                        :  
                        <Nav.Link onClick={handleSignOut}  className="d-flex justify-content-center align-items-center" href="#"><Button style={{width:"200px"}} variant="btn btn-outline-info">Log out</Button></Nav.Link>
                        }
                        
                        </Nav>
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
        </>
    );
};

export default Header;