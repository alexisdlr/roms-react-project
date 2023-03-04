import useAuth from '../../hooks/useAuth'
import defaultPic from "../../assets/userPicDefault.png";

import './Perfil.scss'
function Perfil() {
    const { auth } = useAuth()
    return (
        <div className="perfil">
            <h2>Gestionar Perfil</h2>
            <div className='container'>

                <div className="perfil-usuario">
                    <img src={
                        auth.picture === undefined || auth.picture === null
                            ? defaultPic
                            : auth.picture
                    } alt={auth.username} />
                    <h2>{auth.username}</h2>
                    <p>{auth.email}</p>
                </div>
                <div className=''>
                    <div className="form">
                        <div>
                            <p>Editar nombre de usuario:</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Editar correo electronico:</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Editar contraseña:</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Confirmar contraseña:</p>
                            <input type="text" />
                        </div>
                        <div className='buttons'>
                            <button>
                                Guardar cambios
                            </button>

                            <button class="eliminar">
                                Eliminar cuenta
                            </button>
                        </div>
                    </div>
                    <nav className="navegacion">

                    </nav>
                </div>
            </div>
        </div>


    )
}

export default Perfil