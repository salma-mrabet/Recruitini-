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
        {user && (
          <Nav className="justify-content-end  d-flex align-items-center">
            <span className="mx-2">{user.email}</span>
            <Button variant="outline-dark" onClick={handleClick}>Logout</Button>
            </Nav>
          )}
        </Nav>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Account" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              My profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
