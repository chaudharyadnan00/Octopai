import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "http://localhost:4000/auth/login";

    const userData = { email, password };

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
        localStorage.setItem("userId", result.data.user._id);
        navigate("/");
        console.log("Login successful:", result);
      } else {
        console.error("Login failed:", result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="signin-form">
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
          Sign In
        </button>
        <button
          className="nav-button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Go to Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignIn;
