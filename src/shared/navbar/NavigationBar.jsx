import React from 'react';
import { Container, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { FaGithub, FaGithubAlt, FaGithubSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../header/img/logo.png'
const NavigationBar = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
        <img style={{ width: '200px', height: '50px' }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 align-items-center">
            <Nav><Link className='text-decoration-none text-dark'>Home</Link></Nav>
            <Nav><Link className='text-decoration-none text-dark'>Blog</Link></Nav>
            <Nav><Link className='text-decoration-none text-dark'>About us</Link></Nav>            
            <NavDropdown title="Login with" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/login' className='mx-auto text-decoration-none text-dark'>Email</Link></NavDropdown.Item>
              <NavDropdown.Item><Button className='p-0 text-primary fw-semibold' variant='outline'><FaGoogle></FaGoogle> Google</Button>
              </NavDropdown.Item>
              <NavDropdown.Item><Button className='p-0 fw-semibold' variant='outline'><FaGithub></FaGithub> Github</Button></NavDropdown.Item>             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;