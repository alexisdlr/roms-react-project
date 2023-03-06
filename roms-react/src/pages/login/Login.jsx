import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";
import Alert from "../../components/alert/Alert";
import clientAxios from "../../axios/clientAxios";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [err, setErr] = useState({});
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

  const handleLogin = async (e) => {
    e.preventDefault();

    if ([inputs.password, inputs.email].includes("")) {
      setErr({
        msg: "Ningun campo puede estar vacio.",
        error: true,
      });
      setTimeout(() => {
        setErr({});
      }, 3000);
      return;
    }
    try {
      const { data } = await clientAxios.post("auth/login", inputs);
      localStorage.setItem("tokenRoms", data.token);
      setAuth(data);
      navigate("/");
    } catch (error) {
      setErr({
        msg: error.response.data,
        error: true,
      });
    }
  };
  const { msg } = err;
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
          <h1>Game {""}Load X</h1>
          <span>Aún no tienes una cuenta?</span>
          <Link to={"/register"}>
            <button>Regístrate</button>
          </Link>
        </div>
        <div className="right">
          {msg && <Alert err={err} />}
          <h2>
            Inicia Sesión <BiLogIn />{" "}
          </h2>
          <form>
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
            <button onClick={handleLogin}>Iniciar sesión</button>
            <span>O</span>
            <button className="g-button" onClick={() => loginGoogle()}>
              Iniciar con Google <FcGoogle />{" "}
            </button>
          </form>
          <p>
            Olvidaste tu contraseña?{" "}
            <Link className="Link" to={"/olvide-password"}>Recuperar Contraseña</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
