import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = ({ navLinks }) => {
  return (
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
  );
};

export default NavBar;
