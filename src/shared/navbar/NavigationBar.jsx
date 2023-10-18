import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { FaGithub, FaGithubAlt, FaGithubSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { HiMail } from "react-icons/hi";
import ActiveLink from '../ActiveRoute/ActiveLink';
import logo from '../header/img/logo.png';



const NavigationBar = () => {
  

  const { logInWithGoogle,user,logOut,logInWithGithub } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    logInWithGoogle(provider)
      .then(result => {
        const user = result.user;
      })
      .catch(error => {
        console.log('error', error.message);
      })

  }

  const handleGithubSignIn = () => {
    logInWithGithub(gitProvider)
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
    <div>
      <Navbar className='fixed-top' style={{backgroundColor: 'white'}}>
        <Container>
          <Navbar>
            <img style={{ width: '60px', height: '60px', borderRadius:'50%' }} src={logo} alt="" />
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 align-items-center">
              <ActiveLink to='/'>Home</ActiveLink> | 
              <ActiveLink to='/blog'>Blog</ActiveLink> | 
              <ActiveLink to='/aboutUs'>About us</ActiveLink> | 
              {
                user ?
                <Button onClick={handleLogOut} variant='secondary' >Sign out</Button>
              :<NavDropdown title="Login with" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to='/login' className='mx-auto text-decoration-none text-dark'><HiMail></HiMail> Email</Link></NavDropdown.Item>
                <NavDropdown.Item><Button onClick={handleGoogleSignIn} className='p-0 text-primary fw-semibold' variant='outline'><FaGoogle></FaGoogle> Google</Button>
                </NavDropdown.Item>
                <NavDropdown.Item><Button onClick={handleGithubSignIn} className='p-0 fw-semibold' variant='outline'><FaGithub></FaGithub> Github</Button></NavDropdown.Item>
              </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;