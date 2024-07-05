import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "http://localhost:4000/auth/register";

    const userData = { name, username: userName, email, password };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("name", result.data.name);
        localStorage.setItem("userId", result.data.UserId);
        alert("Login now");
        navigate("/signin");
        console.log("Registration successful:", result);
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="signin-container">
      <h1>Create a new account</h1>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">User name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Create account
        </button>
        <button
          className="nav-button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Go to Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;
