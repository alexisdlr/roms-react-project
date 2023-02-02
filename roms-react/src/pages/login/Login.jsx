import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import "./Login.scss";
import Alert from "../../components/Alerta/Alert";
import clientAxios from "../../axios/clientAxios";
import useAuth from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth()
  const [err, setErr] = useState({});
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      setAuth(userInfo.data);

      navigate("/");
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    if([inputs.password, inputs.username].includes('')){
      setErr({
        msg:'Ningun campo puede estar vacio.',
        error: true
      })
      setTimeout(() => {
        setErr({})
      }, 2200)
      return
    }
    try {
      const { data } = await clientAxios.post("auth/login", inputs);
      localStorage.setItem('tokenRoms', data.token)
      setAuth(data)
      navigate("/");
    } catch (error) {
      setErr({
        msg: error.response.data,
        error: true
      });
    }
  };
  const {msg} = err
  return (
    <div className="login">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="card"
      >
        <div className="left">
          <h1>FREE ROMS</h1>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input
              type="text"
              required
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
            or
            <button onClick={() => loginGoogle()}>Sign in with Google</button>
            {msg && <Alert err={err} />}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
