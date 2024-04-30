import React, { useState, useContext } from "react";
import "./Header.css";

import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Assets/xLogo.png";
import { RiMenu4Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <header className='Header'>
      <Link to='/'>
        <h1 className="logo">JiFunz</h1>
      </Link>

      {/* <div className='_cart_menu_div'>
     
        <div className={`navStuff ${isOpen ? "navStaff expand" : ""}`}>
          <div className='navButtons'>
            <nav className='_nav'>
              <Link to='/help'>
                <li className='_faq'>FAQ</li>
              </Link>

              <li>
                <Link to='/login' className='_login_text'>
                  Login
                </Link>
              </li>
              <button onClick={() => navigate("/signUp")}>
                Create Wishlist
              </button>
            </nav>
          </div>
        </div>
        <RiMenu4Line className='menuIcon' onClick={handleTrigger} />
      </div> */}
    </header>
  );
};

export default Index;
