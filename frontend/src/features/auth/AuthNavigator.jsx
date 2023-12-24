import './AuthNavigator.css'
export const AuthNavigator = ({ visible = true, onClick, text }) => {
  return (
    <div className="auth__nav">
      {visible ? <p onClick={onClick}>{text}</p> : null}
    </div>
  );
};
