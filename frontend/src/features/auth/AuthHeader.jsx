import { FaAngleRight } from "react-icons/fa";

export const AuthHeader = ({text  = "Default Text"}) => {
  return (
    <div className="auth__heading">
      <FaAngleRight size={60} />
      <h1>{text}</h1>
    </div>
  );
};
