import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseInit"; 
import "../Styles/Registration.css";
import BaseLayout from "./BaseLayout";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); 

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
        alert("Registration successful!");
        navigate("/login");
      })
      .catch((error) => {
        console.error('Error registering user:', error.message);
        alert("Error registering user: " + error.message);
      });
  }

  return (
    <BaseLayout>
      <div className="Registration">
        <Form onSubmit={handleSubmit}>
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

          <Button className="w-100" size="lg" type="submit" disabled={!validateForm()}>
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

