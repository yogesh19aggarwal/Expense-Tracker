import "./Button.css";

export default function Button({ label = "Submit", ...btnProps }) {
  const className = `btn ${btnProps.className}`;
  return (
    <button className={className} {...btnProps}>
      {label}
    </button>
  );
}
