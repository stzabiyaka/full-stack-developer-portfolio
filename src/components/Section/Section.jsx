import "./Section.scss";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
