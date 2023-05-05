import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Banner2 = () => {
    const cardShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    return (
        <Row xs={1} lg={3} className='mb-5'>
        <Col>
            <Card style={{boxShadow: cardShadow}}>
                <Card.Body>
                    <div className='text-center'>
                    <img style={{width:'100px'}} className='border rounded-circle' src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <Card.Title>
                        <h3 className='text-center'>Charlotte Hales</h3>
                    </Card.Title>
                    <Card.Text>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae dolores sunt. Provident, doloremque alias nesciunt accusantium quis nisi debitis inventore obcaecati itaque asperiores? Corrupti molestiae eveniet blanditiis provident rerum!</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{boxShadow: cardShadow}}>
                <Card.Body>
                    <div className='text-center'>
                    <img style={{width:'100px'}} className='border rounded-circle' src="https://www.storypick.com/wp-content/uploads/2022/12/16.jpeg" alt="" />
                    </div>
                    <Card.Title>
                        <h3 className='text-center'>Rishi Dhar</h3>
                    </Card.Title>
                    <Card.Text>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae dolores sunt. Provident, doloremque alias nesciunt accusantium quis nisi debitis inventore obcaecati itaque asperiores? Corrupti molestiae eveniet blanditiis provident rerum!</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{boxShadow: cardShadow}}>
                <Card.Body>
                    <div className='text-center'>
                    <img style={{width:'100px'}} className='border rounded-circle' src="https://static.generated.photos/vue-static/face-generator/landing/wall/20.jpg" alt="" />
                    </div>
                    <Card.Title>
                        <h3 className='text-center'>Jhon Rods</h3>
                    </Card.Title>
                    <Card.Text>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae dolores sunt. Provident, doloremque alias nesciunt accusantium quis nisi debitis inventore obcaecati itaque asperiores? Corrupti molestiae eveniet blanditiis provident rerum!</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    );
};

export default Banner2;