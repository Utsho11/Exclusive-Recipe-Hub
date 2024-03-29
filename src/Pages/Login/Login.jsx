import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [show, setShow] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const from = location.state?.from?.pathname || '/'

        setError('')
        setSuccess('')

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset('');
                setSuccess('Successfully logged in')
                navigate(from,{replace: true})
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    const handleShowPassword = event => {
        setShow(event.target.checked)
    }
    return (
        <Container className='w-50 mx-auto border'>
        <h3 className='text-center my-4'>Please Login</h3>
        <Form onSubmit={handleLogin}>
            <Form.Group className="my-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                {
                    show ?
                        <Form.Control type="text" name='password' placeholder="Password" required />
                        :
                        <Form.Control type="password" name='password' placeholder="Password" required />
                }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check onClick={handleShowPassword} type="checkbox" label="show password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>

            <Form.Group className='my-4'>
                <Form.Text className="text-dark">
                    Don't have an account ? <Link className='text-decoration-none text-danger fw-bold' to="/register">Register</Link>
                </Form.Text>
            </Form.Group>

            <Form.Group className='my-4'>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>

        </Form>
    </Container>
    );
};

export default Login;