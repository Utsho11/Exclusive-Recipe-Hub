import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PublishRecipe = () => {
    const divStyle = {
        backgroundImage:
          'url("https://foodhub.modeltheme.com/wp-content/uploads/2020/02/foodhub-slider-main-food-v4.jpg?id=20741")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "600px",
      };
    return (
        <div>
            <div className='my-4'>
      <div style={divStyle}>
        <h1
          style={{
            color: "white",
            fontSize: "50px",
            textAlign: "center",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
          }}
        >Start Your Cooking <br /> Journey with us</h1>
        <p className='px-4'
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20%",
          }}
        >Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed erosat orci congue vestibulum. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat unde odio laudantium doloremque itaque <br /> repudiandae nostrum modi quidem fuga? Impedit, debitis numquam. Provident velit illo ratione obcaecati. Id, soluta?</p>
        <div className="text-center">
        <Link to="/publish"><Button variant="danger">Publish Your Recipe</Button></Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PublishRecipe;