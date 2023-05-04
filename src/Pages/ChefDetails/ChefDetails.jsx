import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefDetails = () => {
    const{id} = useParams()
    const loadRecipes = useLoaderData ();
    // const [chefData,setData] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/chef')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

    // const number = parseInt(id)
    // console.log(typeof number);

    // const chefDetails = chefData.find(chefId => chefId.id === number)
    // const chefArray = Array.of(chefDetails)


    // console.log(chefArray);

    return (            
        <Row lg={3} xs={1} className='g-4 my-4'>
            {
                loadRecipes.map(recipeDetails =><RecipeCard
                key={recipeDetails.id}
                recipeDetails={recipeDetails}></RecipeCard>)
            }
        </Row>
    );
};

export default ChefDetails;