import { Link } from "wouter";
import { useSEO } from "hooks/useSEO";
import { VscChromeClose } from "react-icons/vsc";
import "./index.css";
import { LoginForm } from "components/LoginForm";

export function Login() {
  useSEO({
    title: "Login",
    description: "Login to your own account on GIFFI",
  });

  return (
    <div className="login-container">
      <Link to="/">
        <div className="login-container__close-button">
          <VscChromeClose size={"25px"} />
        </div>
      </Link>
      <div className="login-container__auth">
        <LoginForm />
      </div>
    </div>
  );
}
