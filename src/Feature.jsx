const Feature = ({ title, text, icon }) => {
  return (
    <article className="feature">
      <div className="feature__body">
        <h2 className="feature__title">{title}</h2>
        <p className="feature__text">{text}</p>
      </div>
      <div className="feature__icon">
        <img src={icon} alt={title} />
      </div>
    </article>
  );
};
export default Feature;
