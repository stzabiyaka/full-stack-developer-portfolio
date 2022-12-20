import NavBar from "../NavBar/NavBar";
import { CONSTANTS } from "../../constants/constants";
import "./Footer.scss";

const { navLinks } = CONSTANTS;

const Footer = () => {
  // const year = new Date().getFullYear();
  return (
    <footer className="footer__container">
      <nav className="appBar__nav">
        <NavBar navLinks={navLinks} current={"home"} />
      </nav>
      {/* <p className="footer__copyright">
        &copy; {year} {name} {familyName}
      </p> */}
    </footer>
  );
};

export default Footer;
