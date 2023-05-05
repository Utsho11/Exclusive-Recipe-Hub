import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { FaThumbsUp } from 'react-icons/fa';

const ChefDetails = () => {    
    const cardShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    const { id } = useParams()
    const loadRecipes = useLoaderData();
    const [chefData, setChef] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://exclusive-recipe-hub-server-utsho11.vercel.app/chef');
                const data = await response.json();
                setChef(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const number = parseInt(id)

    const selectedChef = chefData.find(chefId => chefId.id == number);

    console.log(selectedChef);

    if(selectedChef){
        return (
            <div>
                <Row style={{boxShadow: cardShadow}} xs={1} lg={2} className='my-4'>
                    <Col>
                <div className='my-4 gap-4 px-4'>
                    <img src={selectedChef.chef_img} alt="" />
                    <h3>Chef name: {selectedChef.chef_name}</h3>
                </div>
                    </Col>
                    <Col>
                    <div className='p-4'>
                        <h5>Description:</h5>
                        <p><small>{selectedChef.description}</small></p>
                        <h5 className='text-success fw-bold'>{selectedChef.experience} experience</h5>
                        <div className='d-flex'>
                        <h5 className='flex-grow-1'>Numbers of recipe: {selectedChef.Numbers_of_recipes}</h5>
                        <div className='align-items-center text-primary fs-3'><FaThumbsUp></FaThumbsUp><span className='fw-bold'> {selectedChef.Likes}</span></div>
                    </div>
                    </div>
                    </Col>
                </Row>
                    <h3 className='text-center'>List of Recipes:</h3>
                <Row lg={3} xs={1} className='g-4 my-4'>
                    {
                        loadRecipes.map(recipeDetails => <RecipeCard
                            key={recipeDetails.id}
                            recipeDetails={recipeDetails}
                            number={number}></RecipeCard>)
                    }
                </Row>
            </div>
        );
    }

}

export default ChefDetails;