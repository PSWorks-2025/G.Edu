import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { signUp } from "../../services/service";
import "./styles.css";

import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigation = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSignUp = async () => {
    await signUp(email, password, username);
    navigation("/");
  };
  return (
    <div className="authContainer">
      <div className="wrapper">
        <form action="">
          <h1>Sign up</h1>
          <div className="input-box">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              required
            />
            <MdAlternateEmail className="icon" />
          </div>

          <div className="input-box">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>

          <button onClick={handleSignUp} type="submit">
            Sign up
          </button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
