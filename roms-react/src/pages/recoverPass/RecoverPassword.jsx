import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import clientAxios from "../../axios/clientAxios";
import "./RecoverPassword.scss";

const RecoverPassword = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("El email no puede estar vacio");
      return;
    }
    try {
      const { data } = await clientAxios.post("/auth/olvide-password", {
        email,
      });
      toast.success(data);
    } catch (error) {
      toast.error(error.response.data.toUpperCase());
    }
  };
  return (
    <>
      <motion.div className="recover-password">
        <h1>
          Recupera tu contraseña en <span>GameLoad.</span>
        </h1>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        exit={{ opacity: 0 }}
        className="recover-form"
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email de recuperación:</label>
            <input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu email de recuperación"
            />
          </div>
          <input type="submit" value="enviar instrucciones" />
        </form>
        <nav >
          <Link
            to={"/"}
            className="link"
          >
            Ya tienes una cuenta?{" "}
            <span >Inicia sesión.</span>
          </Link>
          <Link
            to={"/registrar"}
            className="link"
          >
            No tienes una cuenta?{" "}
            <span>Registrate.</span>
          </Link>
        </nav>
      </motion.div>
    </>
  );
};

export default RecoverPassword;
