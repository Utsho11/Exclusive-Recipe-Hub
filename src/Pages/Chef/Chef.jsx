import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = (props) => {

    const { id, chef_name, chef_img, Numbers_of_recipes, Likes, experience } = props.chef;

    return (
        <Col className='my-2'>
            <Card style={{width:"20rem",height:"27rem"}}>
                <LazyLoad height={300} offset={300}>
                <Card.Img style={{height: '300px'}} variant="top" src={chef_img} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>
                        <h5>{chef_name}</h5>
                    </Card.Title>
                    <p className='text-success fw-bold'>{experience} experience</p>
                    <div className='d-flex'>
                        <p className='flex-grow-1'>Numbers of recipe: {Numbers_of_recipes}</p>
                        <div className='align-items-center text-primary'><FaThumbsUp></FaThumbsUp><span className='fw-bold'> {Likes}</span></div>
                    </div>
                   <Link to={`/chef/${id}`}><Button variant='warning'>Show Recipes</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Chef;