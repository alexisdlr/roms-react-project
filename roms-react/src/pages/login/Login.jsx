import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {  motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import clientAxios from "../../axios/clientAxios";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import "./Login.scss";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [inputs, setInputs] = useState({
    email: "",
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

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    try {
      const { data } = await clientAxios.post("auth/login", inputs);
      localStorage.setItem("tokenRoms", data.token);
      setAuth(data);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data)
    }
  }, [inputs, toast, clientAxios])

  return (
    <div className="login">
      <motion.div
        animate={{ opacity: [0,1], scale: [0.8, 1]}}
        transition={{ duration: 0.3 }}
        className="card"
      >
        <div className="left">
          <h1>Game {""}Load X</h1>
          <span>Aún no tienes una cuenta?</span>
          <Link to={"/register"}>
            <button>Regístrate</button>
          </Link>
        </div>
        <div className="right">
          <motion.h2 layout>
            Inicia Sesión <BiLogIn />{" "}
          </motion.h2>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            layout
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
            <span>O</span>
            <button className="g-button" onClick={() => loginGoogle()}>
              Iniciar con Google <FcGoogle />{" "}
            </button>
          </motion.form>

          <span>
            Olvidaste tu contraseña?{" "}
            <Link className="Link" to={"/olvide-password"}>
              Recuperar Contraseña
            </Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
