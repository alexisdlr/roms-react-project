import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Login.scss";
import { AuthContext } from "../../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";


function Login() {
  const { login, setCurrentUser } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  
const loginGoogle = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    console.log(tokenResponse);
    const userInfo = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
    );
    
    setCurrentUser(userInfo.data)
    navigate("/");
  },
  onError: errorResponse => console.log(errorResponse),
});




  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="login">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
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
            {err && err}
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
