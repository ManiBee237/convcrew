import React, { useState } from "react";
import "./login.css";
import { signup, login } from "../../config/firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password || (isSignUp && !userName)) {
      alert("Please fill in all fields.");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the terms of use & privacy policy.");
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        await signup(userName, email, password);
        alert("Account created successfully!");
      } else {
        await login(email, password);
        alert("Logged in successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-content">
        <div className="logo-top">
          <img src="./Brand-dark.png" alt="logo" />
        </div>
        <div className="deco">
          <img src="./body-img.png" alt="" />
        </div>
      </div>
      <div className="login-body">
        <div className="title">
          <form onSubmit={onSubmitHandler} className="login-form">
            <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

            {isSignUp && (
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                placeholder="Username"
                className="form-input"
                required
              />
            )}

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email address"
              className="form-input"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="form-input"
              required
            />
            <button type="submit" disabled={loading}>
              {loading
                ? "Processing..."
                : isSignUp
                ? "Create Account"
                : "Login Now"}
            </button>
            <div className="login-term">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forgot">
              {isSignUp ? (
                <p className="login-toggle">
                  Already have an account?{" "}
                  <span onClick={() => setIsSignUp(false)}>Click here</span>
                </p>
              ) : (
                <p className="login-toggle">
                  Create an account?{" "}
                  <span onClick={() => setIsSignUp(true)}>Click here</span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
