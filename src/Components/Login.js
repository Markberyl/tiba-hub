import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import BaseLayout from "./BaseLayout";
import Button from "react-bootstrap/Button";
import "../Styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <BaseLayout>
      <div className="container">
        <div className="form-container">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group email-input" controlId="email">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="form-group password-input" controlId="password">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </Form.Group>

            <Button className="btn-login" size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
          </Form>
          <div className="login-options">
            <p>Don't have an account?</p>
            <Link to="/register" className="register-link">Register</Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
