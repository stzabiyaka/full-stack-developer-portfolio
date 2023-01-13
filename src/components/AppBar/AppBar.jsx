// import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
import { CONSTANTS } from "../../constants/constants";
import "./AppBar.scss";

const { icons } = CONSTANTS;

const AppBar = () => {
  return (
    <header className="appBar__container">
      <NavLink to="/" className="logo__link" title="Home">
        <svg className="logo__icon">
          <use href={`${icons}#icon-logo`} />
        </svg>
      </NavLink>
      {/* <nav className="appBar__nav">
        <NavBar navLinks={navLinks} current={"home"} />
      </nav> */}
    </header>
  );
};

export default AppBar;
