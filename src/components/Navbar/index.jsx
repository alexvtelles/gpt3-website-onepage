import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">O que é GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Estudos de caso</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);
const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sing Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toogleMenu ? (
          <RiCloseLine
            color="#fff"
            size={20}
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={20}
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sing Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
