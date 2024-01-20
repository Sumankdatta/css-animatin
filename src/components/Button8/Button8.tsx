import "./Button8.css";

const Button8 = () => {
  const name = "Suman Kumar Datta";

  const nameArray = name.split("");

  return (
    <div className="main-8">
      <div className="container">
        {nameArray.map((item, i) => (
          <span
            className="alphabet"
            style={{
              transitionDelay: `${i * 100}ms`,
              animationDelay: `${i * 100}ms`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Button8;
