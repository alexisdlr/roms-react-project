import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import defaultPic from '../../assets/userPicDefault.png'
import {motion} from 'framer-motion'
import './Navbar.scss'
import useAuth from '../../hooks/useAuth';
function Navbar() {
  const {auth, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      
    }
  }
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, type: "tween" }}
    className="Navbar">
    <div className="left">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <span>FreeRoms</span>
      </Link>      
    </div>
    <div className="right">
      <div className='navigation'>
        <nav>
          <ul>
            {['Juegos', 'Consolas', 'Acerca de'].map((item, index) => (
              <li key={index}>
                <Link to={item.toLowerCase()} style={{textDecoration: 'none', color: 'inherit'}}>
                  <span>

                  {item}
                  </span>
                  </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="user">
        <img
          src={
            auth.picture === undefined || auth.picture === null? defaultPic : auth.picture
          }
          alt="user"
        />
        <span>{auth.name}</span>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </motion.div>
  )
}

export default Navbar