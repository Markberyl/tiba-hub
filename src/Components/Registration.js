import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/Registration.css";
import BaseLayout from "./BaseLayout";

export default function Registration() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 

  function validateForm() {
    return email.length > 0 && password.length > 0 && password === confirmPassword && phoneNumber.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <BaseLayout>
      <div className="Registration">
        <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>


          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          

          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button>
        </Form>

        <div className="login-options">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </BaseLayout>
  );
}
