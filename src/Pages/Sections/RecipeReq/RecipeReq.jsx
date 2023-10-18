import React, { useState } from "react";
import Swal from "sweetalert2";

const RecipeReq = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const recipeName = form.recipeName.value;
    const chefName = form.chefName.value;

    const newRequestedRecipe = { name, email, recipeName, chefName };

    console.log(newRequestedRecipe);

    fetch(
      "https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/requestRecipe",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newRequestedRecipe),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Request has been send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your Request has not been send",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container mt-4">
      <h2 style={{ fontSize: "50px" }} className="text-center my-4">
        Recipe Request Form
      </h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group my-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group my-2">
              <label htmlFor="chefName">Chef Name</label>
              <input
                type="text"
                className="form-control"
                name="chefName"
                placeholder="Chef's Name"
                required
              />
            </div>

            <div className="form-group my-2">
              <label htmlFor="recipeName">Recipe Name</label>
              <input
                type="text"
                className="form-control"
                name="recipeName"
                placeholder="Recipe Name"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary my-2">
              Submit Recipe Request
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <img
            src="https://imgs.search.brave.com/wIzu1OC4Do2k38p8_H3taVTJTGzhJxzismmNJSct4eE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b29kLWRlbGl2ZXJ5/LW1hbi13aXRoLWJv/eGVzLXdpdGgtZm9v/ZF8xMzAzLTI3NzIz/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
            alt="Recipe Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeReq;
