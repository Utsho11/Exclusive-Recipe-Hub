import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { FaGithub, FaGithubAlt, FaGithubSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../header/img/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { HiMail } from "react-icons/hi";
import ActiveLink from '../ActiveRoute/ActiveLink';

const NavigationBar = () => {

  const { logInWithGoogle,user,logOut } = useContext(AuthContext);
  const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    logInWithGoogle(provider)
      .then(result => {
        const user = result.user;
      })
      .catch(error => {
        console.log('error', error.message);
      })

  }

  const handleLogOut = () =>{
     logOut()
     .then()
     .catch(error => console.log(error))
  }
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar>
            <img style={{ width: '200px', height: '50px' }} src={logo} alt="" />
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 align-items-center text-decoration-none">
              <ActiveLink to='/'><span className='text-dark text-decoration-none'>Home</span></ActiveLink>
              <ActiveLink to='/blog'><span className='text-dark text-decoration-none'>Blog</span></ActiveLink>
              <ActiveLink to='/aboutUs'> <span className='text-dark text-decoration-none'>About us</span></ActiveLink>
              {
                user ?
                <Button onClick={handleLogOut} variant='secondary' >Sign out</Button>
              :<NavDropdown title="Login with" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to='/login' className='mx-auto text-decoration-none text-dark'><HiMail></HiMail> Email</Link></NavDropdown.Item>
                <NavDropdown.Item><Button onClick={handleGoogleSignIn} className='p-0 text-primary fw-semibold' variant='outline'><FaGoogle></FaGoogle> Google</Button>
                </NavDropdown.Item>
                <NavDropdown.Item><Button className='p-0 fw-semibold' variant='outline'><FaGithub></FaGithub> Github</Button></NavDropdown.Item>
              </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;