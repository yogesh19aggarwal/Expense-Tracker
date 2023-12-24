import "./LandingPage.css";
import logo from "../../../assets/money.svg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LandingPage() {
  const auth = useAuth();
  const landingBtnRoute = auth.user ? "/dashboard" : "/auth";
  return (
    <main className="main__landing">
      <section className="landing__left"></section>
      <section className="landing__center">
        <div className="landing">
          <div className="landing__banner">
            <img src={logo} alt="Landing page logo" width={300} height={300} />
            <h1>ExTracker</h1>
          </div>
          <p>Track your expenses or income from anywhere</p>
          <div className="landing__btns">
            <Link className="landing__auth" to={landingBtnRoute}>
              Add expense
            </Link>
          </div>
        </div>
      </section>
      <section className="landing__right"></section>
    </main>
  );
}
