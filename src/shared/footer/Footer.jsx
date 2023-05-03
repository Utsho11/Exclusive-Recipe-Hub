import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import logo from '../header/img/logo.png'
import {  FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { Form } from 'react-router-dom';


const Footer = () => {
    return (
        <Container className='bg-dark text-light'>
            <Row>
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
                        <FaFacebookSquare style={{fontSize: '2rem'}}></FaFacebookSquare>
                        <FaTwitterSquare style={{fontSize: '2rem'}}></FaTwitterSquare>
                        <FaInstagramSquare style={{fontSize: '2rem'}}></FaInstagramSquare>
                        </div>
                    </div>
                </Col>
                <Col>
                <h4 className='text-center my-4'>Contact us</h4>
                <div>
                    <Form>
                        <p className='mb-0'>Email</p>
                        <input type="e-mail" size={49} required placeholder='Enter your email'/> <br />
                        <p className='mt-2 mb-0'>Message</p>
                        <textarea style={{width:'400px',height:'200px'}} placeholder='write your message...'></textarea> <br />
                        <Button className='my-2'>Submit</Button>
                    </Form>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;