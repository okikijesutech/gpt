import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#wgpt3'>What is GPT?</a>
    </p>
    <p>
      <a href='#posibility'>Open AI</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>
          <a href=''>Sign in</a>
        </p>
        <button>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggle ? (
          <div className='gpt3__navbar-menu_icon' onClick={handleClick}>
            <img src={close} />
          </div>
        ) : (
          <div className='gpt3__navbar-menu_icon' onClick={handleClick}>
            <img src={menu} />
          </div>
        )}
        {toggle && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_conatiner-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>
                  <a href=''>Sign in</a>
                </p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
