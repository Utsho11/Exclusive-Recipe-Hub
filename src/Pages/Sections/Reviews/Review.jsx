import React, { useState } from "react";
import Swal from "sweetalert2";

const Review = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here (e.g., sending data to a server)
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;

    const newReview = { name, email, review };

    console.log(newReview);

    fetch(
      "https://exclusive-recipe-hub-server-fnbgdwo75-utsho11.vercel.app/review",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your review has been send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your Review has not been send",
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
          Write a Review
        </h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVlZGJhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Review Image"
              className="img-fluid w-100"
            />
          </div>

          <div className="col-md-6">
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
                <label htmlFor="review">Review</label>
                <textarea
                  className="form-control"
                  name="review"
                  rows="5"
                  placeholder="Write your review here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary my-2">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
