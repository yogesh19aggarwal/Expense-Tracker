import { NavLink as Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/money.svg";
import useAuth from "../../hooks/useAuth";
export default function Header() {
  const auth = useAuth();
  return (
    <header>
      <div className="header__banner">
        <img src={logo} alt="Company logo" width={60} height={60} />
        <Link className="header__logo" to={"/"}>
          <h1>EXTracker</h1>
        </Link>
      </div>
      <ul className="header__links">
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/transactions"}>Transactions</Link>
        </li>
        <li>
          <Link to={"/settings"}>Options</Link>
        </li>
        <li className="header__auth">
          <img
            src={auth.user.avatar}
            alt={auth.user.name}
            width={30}
            height={30}
          />
          <span>{auth.user.name}</span>
        </li>
      </ul>
    </header>
  );
}
