import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import Row from "react-bootstrap/Row";
import food from "./image/Food.jpg";
import LazyLoad from "react-lazy-load";
import Banner1 from "../Banner/Banner1";
import Banner2 from "../Banner/Banner2";
import Typical from "react-typical";
import Carousel from "../Sections/Carousel/Carousel";
import Review from "../Sections/Reviews/Review";
import RecipeReq from "../Sections/RecipeReq/RecipeReq";
import News from "../Sections/News&Articles/News";
import MessageUs from "../Sections/MessageUs/MessageUs";
import Subscribe from "../Sections/Subscribe/Subscribe";
import PublishRecipe from "../Sections/PublishRecipe/PublishRecipe";
const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/chef"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  useEffect(() => {
    fetch(
      "https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/news"
    )
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <LazyLoad>
              <img className="img-fluid" src={food} alt="" />
            </LazyLoad>
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <p style={{ fontSize: "50px" }}>
              👋 Hello,
              <Typical
                className="text-5xl"
                steps={[" Food Lovers", 2000, " Recipe hunters", 2000]}
                loop={Infinity}
                wrapper="b"
              />
            </p>
            <br />
            <p style={{ fontSize: "75px" }}>
              Welcome to{" "}
              <span style={{ color: "#FFA07A" }}>Exclusive Recipe Hub</span> 🍔
              🍕 🥞
            </p>
            <br />
            <p style={{ fontSize: "50px" }}>
              🔎 Find Your
              <Typical
                className="text-5xl"
                steps={[" Recipe", 2000, " Taste", 2000, " Food", 2000]}
                loop={Infinity}
                wrapper="b"
              />
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center my-5">Website Status:</h1>
      <Banner1></Banner1>
      <h2 className="text-center my-5">Meet With Our Chefs</h2>
      <Row style={{ paddingLeft: "5rem" }} lg={3} xs={1}>
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </Row>
      <div style={{ padding: "5rem 5rem 0 5rem" }}>
        <Carousel></Carousel>
      </div>
      <h1 className="text-center my-5">NEWS & ARTICLES</h1>
      <Row style={{ paddingLeft: "5rem" }} lg={3} xs={1}>
        {news.map((news) => (
          <News key={news.id} news={news}></News>
        ))}
      </Row>
      <h1 className="text-center m-5">Publish Your Recipe:</h1>
      <PublishRecipe></PublishRecipe>
      <RecipeReq></RecipeReq>
      <Subscribe></Subscribe>
      <MessageUs></MessageUs>
      <h1 className="text-center m-5">Website's Top Reviewers:</h1>
      <Banner2></Banner2>
      <Review></Review>
    </div>
  );
};

export default Home;
