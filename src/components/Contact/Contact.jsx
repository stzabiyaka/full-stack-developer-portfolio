import { CONSTANTS } from "../../constants/constants";
import Section from "../Section/Section";
import "./Contact.scss";

const { contacts, title, name, familyName, icons } = CONSTANTS;

const Contact = () => {
  return (
    <Section id="contact" title="Contact Details">
      <div className="contacts__card">
        <div className="contacts__info">
          <svg className="contacts__info-logo">
            <use href={`${icons}#icon-logo`} />
          </svg>
          <p className="contacts__info-name">
            {name} {familyName}
          </p>
          <p className="contacts__info-title">{title}</p>
        </div>
        <ul className="contacts__list">
          {contacts.map(({ name, title, link }, indx) => (
            <li className="contact" key={name + indx}>
              <a
                href={link}
                className="contact__link"
                title={name}
                target={link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer noopener nofollow"
              >
                <div className="contact__icon">
                  <svg className="contact__icon-image">
                    <use href={`${icons}#icon-${[name]}`} />
                  </svg>
                </div>
                <p className="contact__title">{title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Contact;
