import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CONSTANTS } from '../../constants/constants';
import './NavBar.scss';

const { icons, navLinks } = CONSTANTS;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <button
        className="navbar__menu-button"
        type="button"
        title="Open menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg className="navbar__menu-icon" aria-label="menu icon">
          <use href={`${icons}#icon-menu`} />
        </svg>
      </button>
      <nav className={`navigation${isMenuOpen ? ' is-open' : ''}`}>
        <button
          className="navbar__menu-button"
          type="button"
          title="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="navbar__menu-icon" aria-label="close icon">
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
        <ul className="navLinks__list">
          {navLinks.map((link, index) => (
            <li className="navLinks__list-item" key={link + index}>
              <NavLink
                className="navLink"
                to={`/${link === 'home' ? '' : link}`}
                title={link}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </NavLink>{' '}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
