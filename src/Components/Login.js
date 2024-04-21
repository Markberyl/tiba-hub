import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import BaseLayout from "./BaseLayout";
import Button from "react-bootstrap/Button";
import Registration from "../Pages/Registration";
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
      <div className="Login">
        <div className="form-container">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
          </Form>
          <div className="login-options">
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

