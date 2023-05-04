import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import Row from 'react-bootstrap/Row';
import food from './image/Food.jpg';
import text from './image/Text.png'
import LazyLoad from 'react-lazy-load';
import { Button } from 'react-bootstrap';
const Home = () => {

    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('https://exclusive-recipe-hub-server-utsho11.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])

    console.log(chefs);
    return (
        <div>
            <div className='my-4 d-flex'>
                <LazyLoad>
                <img style={{height:'450px'}} className='img-fluid w-100' src={food} alt="" />
                </LazyLoad>
                <div className='bg-dark  w-50 text-light text-center'>
                    <img style={{height:'450px'}} className='img-fluid w-100' src={text} alt="" />
                    <Button style={{position:'absolute',bottom:'-100px',right:'460px'}} variant='warning'>Find Out Recipe</Button>
                </div>
            </div>
            <h2 className='text-center'>Meet With Our Chefs</h2>
            <Row lg={3} xs={1} className='g-4 my-4'>
                    {
                        chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}></Chef>)
                    }               

            </Row>
        </div>
    );
};

export default Home;