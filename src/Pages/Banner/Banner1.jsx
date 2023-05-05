import React from 'react';
import './css/Banner1.css'
import { Card, Col, Row } from 'react-bootstrap';

const Banner1 = () => {
    return (
        <Row xs={1} lg={3} >
            <Col>
                <Card className="subscriber bg-danger bg-opacity-75 text-light">
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
                <Card className='bg-warning bg-opacity-50 text-danger'>
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
                <Card className='bg-primary bg-opacity-50 text-light'>
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