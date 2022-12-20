import { useState } from "react";
import "./NavBar.scss";

const NavBar = ({ navLinks, current, onLink }) => {
  const [currentPage, setCurrentPage] = useState(current);

  return (
    <ul className="navLinks__list">
      {navLinks.map((link, index) => (
        <li className="navLinks__list-item" key={link + index}>
          <a
            href={`#${link}`}
            className={`navLink${currentPage === link ? " current" : ""}`}
            title={link}
            onClick={() => setCurrentPage(link)}
          >
            {link}
          </a>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
