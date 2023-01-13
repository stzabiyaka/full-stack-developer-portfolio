import "./Section.scss";

const Section = ({ id, title, children }) => {
  return (
    <secion id={id} className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </secion>
  );
};

export default Section;
