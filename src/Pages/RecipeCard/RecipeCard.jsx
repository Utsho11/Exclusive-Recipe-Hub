import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({recipeDetails}) => {
    const { recipe_img, recipe_name, ingredients, cooking_method,rating } = recipeDetails;

    const [isOn, setIsOn] = useState(true);

    const handleClick = () => {
        toast('Added to favorite')
    setIsOn(!isOn);
    }
    return (
        <Col>
            <Card style={{ maxHeight: '600px', overflow: 'auto' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={recipe_img} />
                <Card.Body>
                    <Card.Title>
                        <h5>{recipe_name}</h5>
                    </Card.Title>
                    
                        <h5>Ingredients:</h5>
                        <p><small>{ingredients}</small></p>
                  
                        <h5>Cooking Method:</h5>
                        <p><small>{cooking_method}</small></p>

                        <div className='d-flex'>
                        <div className='d-flex align-items-center flex-grow-1'>
                        <Rating className='text-warning'
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}></Rating>
                        <small className='ms-2'>{rating}</small>
                    </div>
                    <div>
                        {isOn ? <div>
                            <button onClick={handleClick} variant='outline' className='border rounded' ><FaHeart></FaHeart></button> 
                        <ToastContainer/>
                        </div> : ''}
                    </div>
                        </div>
                    
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RecipeCard;