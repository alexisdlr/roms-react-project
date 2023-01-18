import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";

import axios from "axios";
import { motion } from "framer-motion";
function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(Object.entries(inputs).values)
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      setErr("Registrado Correctamente");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setErr(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className="register">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
        className="card"
      >
        <div className="left">
          <h1>FREE ROMS</h1>

          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form>
            <input
              type="text"
              required
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
           
            <button onClick={handleClick}>Register</button>
            {err && <p style={{ color: "red" }}>{err}</p>}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
