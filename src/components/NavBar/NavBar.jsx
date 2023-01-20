import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { CONSTANTS } from "../../constants/constants";
import "./NavBar.scss";

const { icons, navLinks } = CONSTANTS;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleIsMenuOpen = () => {
    menuRef.current.classList.toggle("is-open");
    setIsMenuOpen((state) => {
      return !state;
    });
  };

  return (
    <div className="navbar">
      <button
        className="navbar__menu-button"
        type="button"
        title={!isMenuOpen ? "Open menu" : "Close"}
        onClick={toggleIsMenuOpen}
      >
        {!isMenuOpen ? (
          <svg className="navbar__menu-icon" aria-label="menu icon">
            <use href={`${icons}#icon-menu`} />
          </svg>
        ) : (
          <svg className="navbar__menu-icon" aria-label="close icon">
            <use href={`${icons}#icon-close`} />
          </svg>
        )}
      </button>
      <nav className="navigation" ref={menuRef}>
        <ul className="navLinks__list">
          {navLinks.map((link, index) => (
            <li className="navLinks__list-item" key={link + index}>
              <NavLink
                className="navLink"
                to={`/${link === "home" ? "" : link}`}
                title={link}
              >
                {link}
              </NavLink>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
