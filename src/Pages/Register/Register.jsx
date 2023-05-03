import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [accepted, setAccepted] = useState();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password');
            return;
        }
        setSuccess('')
        setError('')
        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            form.reset('');
            setSuccess('Successfully Added')
        })
        .catch(error => console.log(error.message))


    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className='w-50 mx-auto my-4 border'>
            <h3 className='text-center my-3'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link to="/terms">terms and conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>

                <Form.Group className='my-4'>
                    <Form.Text className="text-dark">
                        Already have an account ? <Link className='text-decoration-none text-danger fw-bold' to="/login">Login</Link>
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

export default Register;