import React from 'react';
import './css/Banner1.css'
import { Card, Col, Row } from 'react-bootstrap';

const Banner1 = () => {
    return (
        <Row style={{paddingLeft:"5rem"}} xs={1} lg={3} >
            <Col>
                <Card style={{ width: "20rem",height: "10rem"}} className="mb-2 subscriber bg-danger bg-opacity-75 text-light">
                    <Card.Body>
                        <Card.Title>
                            <h1>Subscribers</h1>
                        </Card.Title>
                        <Card.Text>
                            <h4>1 millions +</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: "20rem",height: "10rem"}} className='mb-2 bg-warning bg-opacity-50 text-danger'>
                    <Card.Body>
                        <Card.Title>
                            <h1>Total views</h1>
                        </Card.Title>
                        <Card.Text>
                            <h4>10 millions +</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: "20rem",height: "10rem"}} className='mb-2 bg-primary bg-opacity-50 text-light'>
                    <Card.Body>
                        <Card.Title>
                            <h1>Likes</h1>
                        </Card.Title>
                        <Card.Text>
                            <h4>3 millions +</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Banner1;