import "./Button.css";
const Button = ({ btnLabel = "Default Text", ...btnProps }) => {
  return (
    <button
      {...btnProps}
      className={`btn ${btnProps.className || ""}`}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
