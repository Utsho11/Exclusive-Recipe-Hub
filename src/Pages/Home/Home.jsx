import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import Row from 'react-bootstrap/Row';
const Home = () => {

    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])

    console.log(chefs);
    return (
        <div>
            <h2 className='text-center'>Meet With Our Chefs</h2>
            <Row lg={3} xs={6} className='g-4 my-4'>
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