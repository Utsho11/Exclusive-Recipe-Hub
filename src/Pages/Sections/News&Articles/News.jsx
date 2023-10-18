import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = (props) => {
    const {id, image, date, author, title, details} = props.news;
  return (
    <Col>
      <Card style={{ width: "20rem",height: "27rem"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div>
            <p><span style={{color:"#f76f2a"}}>{date}</span> | <span style={{color:"#9a9a9a"}}>By {author}</span></p>
          </div>
          <Card.Text>
            {details.length > 100 ? <p>{details.slice(0,100)}...</p> : <p>{details}</p>}
          </Card.Text>
          
          <Link to={`/news/${id}`}><Button variant="warning">Show more</Button></Link>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
