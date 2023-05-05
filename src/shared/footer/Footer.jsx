import React from 'react';
import { Col, Container, Row, Button, FormGroup, Form } from 'react-bootstrap';
import logo from '../header/img/logo.png'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container className='bg-dark text-light rounded'>
            <Row xs={1} lg={2}>
                <Col>
                    <div className='my-4'>
                        <img style={{ width: '200px', height: '50px' }} src={logo} alt="" />
                        <h3 className='my-2'>About us</h3>
                        <p><small>
                            This is an indian latest recipe cooking website which contains recipe of some of india's  most famous chef. All of recipes are created with the famous chef in mind, and I strive to make them as simple and straightforward as possible. Each recipe includes detailed instructions and ingredient lists, as well as photos to guide you through the cooking process.
                            But my website is more than just a collection of recipes. I also share cooking tips and tricks, ingredient substitutions, and nutrition information to help you make informed choices about the food you eat. Whether you're a seasoned chef or just starting out in the kitchen, my recipe website is the perfect resource for anyone looking to add some variety and excitement to their meals. So come on in, explore the recipes, and let's get cooking together!
                        </small></p>
                        <div>
                            <h4>Follow us on</h4>
                            <FaFacebookSquare style={{ fontSize: '2rem' }}></FaFacebookSquare>
                            <FaTwitterSquare style={{ fontSize: '2rem' }}></FaTwitterSquare>
                            <FaInstagramSquare style={{ fontSize: '2rem' }}></FaInstagramSquare>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h4 className='text-center my-4'>Message us</h4>
                    <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter message" />
                            </Form.Group>

                            <Button className='my-2' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;