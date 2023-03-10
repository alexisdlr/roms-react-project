import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Alert from "../../components/alert/Alert";
import clientAxios from "../../axios/clientAxios";
import { HiUserAdd } from "react-icons/hi";
import "./Register.scss";
function Register() {
  const [err, setErr] = useState({});
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { username, email, password, name } = inputs;

    try {
      if ([username, email, password, name].includes("")) {
        setErr({
          msg: "Ningun campo debe estar vacio",
          error: true,
        });
        setTimeout(() => {
          setErr({});
        }, 3000);
        return;
      }

      await clientAxios.post("/auth/register", {
        username,
        email,
        password,
        name,
      });
      setErr({
        msg: "Creado correctamente, revisa tu email!",
        error: false,
      });
      setTimeout(() => {
        setErr({});
      }, 2500);
    } catch (error) {
      setErr({
        msg: error.response.data[0].msg || error.response.data,
        error: true,
      });
      setTimeout(() => {
        setErr({});
      }, 2500);
    }
  };

  return (
    <div className="register">
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        className="card"
      >
        <div className="left">
          <h1>Game {""}Load X</h1>

          <span>Ya tienes una cuenta?</span>
          <Link to="/login">
            <button>Inicia Sesión</button>
          </Link>
        </div>
        <div className="right">
          <AnimatePresence>{err.msg && <Alert err={err} />}</AnimatePresence>
          <motion.h2 layout>
            Crear nueva cuenta <HiUserAdd />
          </motion.h2>
          <motion.form layout>
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

            <button onClick={handleClick}>Crear cuenta</button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
