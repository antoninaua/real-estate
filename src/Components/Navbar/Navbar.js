import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";
import { CiMenuFries } from "react-icons/ci";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 1150) {
      return { right: !openedMenu && "-100%" };
    }
  };

  return (
    <nav className="nav-wrapper">
      <div className="white-gradient" />
      <div className="flexCenter paddings innerWidth nav-container">
        <Link to="/">
          <img src="images/logo.png" width="100px" alt="Logo" />
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenedMenu(false);
          }}
        >
          <ul className="flexCenter nav-menu" style={getMenuStyle(openedMenu)}>
            <li>
              <Link className="linkStyle" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="linkStyle" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="linkStyle" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="linkStyle" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="linkStyle button-nav" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </OutsideClickHandler>
        {/* small screen */}
        <div className="app__navbar-smallscreen">
          <CiMenuFries
            size={25}
            onClick={() => setOpenedMenu((prev) => !prev)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
