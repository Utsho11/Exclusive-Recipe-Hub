import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const RecipeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., sending data to a server)
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const recipeName = form.recipeName.value;
    const details = form.details.value;

    const newRecipe = { name, email, recipeName, details };

    console.log(newRecipe);

    fetch(
      "https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/publish",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Recipe has been Submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your Recipe has not been Submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="container mt-4">
        <h2 style={{ fontSize: "50px" }} className="text-center my-4">
          Publish Your Recipe
        </h2>
        <Row>
          <Col lg={6}>
            <img
              src="https://149352091.v2.pressablecdn.com/wp-content/uploads/2014/09/Fotolia_20703315_Subscription_L-1024x944.jpg"
              alt="Review Image"
              className="img-fluid w-100"
            />
          </Col>

          <Col lg={6}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Recipe Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="recipeName"
                  placeholder="Recipe Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="details">Recipe Details</label>
                <textarea
                  className="form-control"
                  name="details"
                  rows="8"
                  placeholder="Write recipe details here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary my-2">
                Submit Recipe
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RecipeForm;
