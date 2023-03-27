import React from 'react';
import {Nav, Navbar,Button, Form,NavDropdown, Container  } from 'react-bootstrap';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Header() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  
  return (
    <Navbar bg="light" expand="lg">
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
          <Nav.Link href="#action2">About Us</Nav.Link>
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
