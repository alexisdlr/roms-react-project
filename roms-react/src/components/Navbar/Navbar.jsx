import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import defaultPic from '../../assets/userPicDefault.png'
import './Navbar.scss'
function Navbar() {
  const {currentUser, logout} = useContext(AuthContext)
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
    <div className="Navbar">
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
            currentUser.picture === undefined ? defaultPic : currentUser.picture
          }
          alt="user"
        />
        <span>{currentUser.name}</span>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar