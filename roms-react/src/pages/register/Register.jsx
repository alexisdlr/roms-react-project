import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clientAxios from "../../axios/clientAxios";
import { toast } from "react-toastify";
import { HiUserAdd } from "react-icons/hi";
import "./Register.scss";
function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = useCallback(async (e) => {
    e.preventDefault();
    const { username, email, password, name } = inputs;
    try {
      await clientAxios.post("/auth/register", {
        username,
        email,
        password,
        name,
      });
      toast.success("Creado correctamente, revisa tu email!")
    } catch (error) {
      console.log(error.response.data[0].msg || error.response.data)
      toast.error(error.response.data[0].msg || error.response.data)
    }
  }, [inputs, toast])

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
