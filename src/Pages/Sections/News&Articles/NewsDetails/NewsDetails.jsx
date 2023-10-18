import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const loadnews = useLoaderData();
  const [newsData, setnews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/news"
        );
        const data = await response.json();
        setnews(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const number = parseInt(id);

  const selectedNews = newsData.find((newsData) => newsData.id == number);

  console.log(selectedNews);
  // const { image, date, author, title, details} = selectedNews;

  const divStyle = {
    backgroundImage:
      'url("https://fooddy.ancorathemes.com/wp-content/uploads/2016/12/home2_slide1.jpg?id=506")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "300px",
  };

  if (selectedNews) {
    return (
      <div>
        <div style={divStyle}>
          <p
            style={{
              color: "white",
              fontSize: "50px",
              textAlign: "center",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {selectedNews.title}
          </p>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <Image src={selectedNews.image} fluid />
        </div>
        <div className="p-md-5">
          <div className="px-md-5">
            <p className="px-md-5">
              <span style={{ color: "#f76f2a" }}>{selectedNews.date}</span> |{" "}
              <span style={{ color: "#9a9a9a" }}>{selectedNews.author}</span>
            </p>
          </div>
          <div className="px-md-5">
            <p className="p-md-5">{selectedNews.details}</p>
          </div>
          <div className="text-center">
            <Link to="/">
              <Button variant="warning">Go to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default NewsDetails;
