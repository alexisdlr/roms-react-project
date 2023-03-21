import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Alert from "../../components/alert/Alert";
import clientAxios from "../../axios/clientAxios";
import "./ConfirmAccount.scss";
function ConfirmAccount() {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(true);
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const confirmar = useCallback(async () => {
    try {
      const url = `auth/confirm/${token}`;
      const { data } = await clientAxios.get(url);
      setCuentaConfirmada(true);
      setAlerta({
        msg: data,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data,
        error: true,
      });
    }
    setLoading(false);
  },[setLoading, setAlerta, setCuentaConfirmada, token])

  useEffect(() => {
    confirmar();
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="confirm"
      >
        <h1>
          Confirma tu cuenta en <span>GameLoad.</span>
        </h1>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        className="confirm-nav"
      >
        <div>
          {!loading && <Alert err={alerta} />}
          {cuentaConfirmada && (
            <>
              <p>
                Has sido confirmado exitosamente, ya puedes acceder con tu
                cuenta
              </p>
              <Link to={"/"} className="link">
                <span>Inicia sesión.</span>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default ConfirmAccount;
