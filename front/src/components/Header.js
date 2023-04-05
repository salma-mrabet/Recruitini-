import React from 'react';
import {Nav, Navbar,Button, Form,NavDropdown, Container  } from 'react-bootstrap';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import './Header.css'

export default function Header(props) {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  
  return (
    <Navbar bg="light" expand="lg" className='nav'>
    <Container fluid>
      <Navbar.Brand href="/">Recruitini</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className='m-auto'>
       
        </Nav>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          {user && user.role==="Employee" &&(
            <>
             <Nav.Link href="/jobs">Job Offers</Nav.Link>
             <Nav.Link href="/recommendation">Recommendations</Nav.Link>
             <Nav.Link href="/advice">Advice</Nav.Link>
            
             </>
          )}
          {user && user.role==="Recruiter" &&(
            <>
             <Nav.Link href="/candidats">Candidats</Nav.Link>
             <Nav.Link href="/recruiter">My job offers</Nav.Link>
             <Nav.Link href="/jobs">jobs</Nav.Link>
             
             </>
          )}
          {user && (
          <NavDropdown title="Account" id="navbarScrollingDropdown">
          
            <NavDropdown.Item href="/profile">
              My profile
            </NavDropdown.Item>
            <NavDropdown.Item href="/updateprofile">
              Update
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleClick} href="/">
              Logout
            </NavDropdown.Item>
             
          </NavDropdown>
          )}
           {!user && (
          <NavDropdown title="Account" id="navbarScrollingDropdown">
          
            <NavDropdown.Item href="/login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/signup">
              Register
            </NavDropdown.Item>
             
          </NavDropdown>
          )}
        
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
