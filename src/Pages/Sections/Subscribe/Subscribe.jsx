import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const divStyle = {
    backgroundImage:
      'url("https://foodhub.modeltheme.com/wp-content/uploads/2020/02/call-to-action-v2.jpg?id=20778")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "500px",
  };
  return (
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
        >Subscribe to our Newsletter</h1>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20%",
          }}
        >Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed erosat orci congue vestibulum.</p>
        <div className="text-center">
        <Link to="/register"><Button variant="danger">Subscribe</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
