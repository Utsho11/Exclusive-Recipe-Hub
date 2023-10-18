import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Col, Container, Row } from "react-bootstrap";

const MessageUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5xh1r5",
        "template_16vcdco",
        form.current,
        "Tks9ry0NQ6L3S9c2A"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text === "OK") {
            Swal.fire({
              icon: "success",
              title: "Successfully message sent",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="my-4">
      <h1 className="text-center text-5xl font-bold pt-20">
        📧 Connect with Us 📧
      </h1>
      <Container className="my-4">
        <Row>
          <Col lg={6}>
            <img
              className="mx-auto lg:mx-16 img-fluid"
              src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Col>
          <Col lg={6} className="p-4">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label for="name">Name:</label>
                <input type="text"
                  className="form-control my-2" id="name" name="user_name" required></input>
              </div>
              <div>
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control my-2"
                  id="email"
                  name="user_email"
                  required
                ></input>
              </div>
              <div>
                <label for="message">Message:</label>
                <textarea className="form-control my-2" id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="mt-md-2 btn btn-primary my-2">
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessageUs;
