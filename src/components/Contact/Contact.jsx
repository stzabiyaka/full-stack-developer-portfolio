import { CONSTANTS } from "../../constants/constants";
import Section from "../Section/Section";
import "./Contact.scss";

const { contacts, icons } = CONSTANTS;

const Contact = () => {
  return (
    <Section id="contact" title="Contact Details">
      <ul className="contacts__list">
        {contacts.map(({ name, title, link }, indx) => (
          <li className="contact" key={name + indx}>
            <a href={link} className="contact__link" title={name}>
              <svg className="contact__icon">
                <use href={`${icons}#icon-${[name]}`} />
              </svg>
              <p className="contact__title">{title}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Contact;
