import { Alert } from "components/Alert";
import { Link } from "wouter";
import { useAuthContext } from "context/AuthContext";
import { useSEO } from "hooks/useSEO";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { GoogleButton } from "components/GoogleButton";
import { VscChromeClose } from "react-icons/vsc";
import "./index.css";

const codeErrorFilter = {
  "auth/user-not-found": "Your email is invalid",
  "auth/invalid-email": "Your email is invalid",
  "auth/wrong-password": "You password is wrong",
  "auth/popup-closed-by-user": "Closed the pop-up before authentication",
};

export function Login() {
  const [location, setLocation] = useLocation();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert === true) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);

  const { logIn, loginWithGoogle } = useAuthContext();

  useSEO({
    title: "Login",
    description: "Login to your own account on GIFFI",
  });

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  async function handleSumbit(e) {
    e.preventDefault();
    try {
      await logIn(user.email, user.password);
      setLocation("/");
    } catch (error) {
      setError(codeErrorFilter[error.code]);
      setShowAlert((showAlert) => !showAlert);
    }
  }

  async function handleGoogleLogin() {
    try {
      await loginWithGoogle();
      setLocation("/");
    } catch (error) {
      console.log(error);
      setError(codeErrorFilter[error.code]);
      setShowAlert((showAlert) => !showAlert);
    }
  }

  return (
    <div className="login-container">
      <Link to="/">
        <div className="login-container__close-button">
          <VscChromeClose size={"25px"} />
        </div>
      </Link>
      <div className="login-container__auth">
        <form className="login-container__auth__form" onSubmit={handleSumbit}>
          <div className="login-container__auth__form__email">
            <label htmlFor="email">{"Email"}</label>
            <input
              className="login-container__auth__form__input"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="login-container__auth__form__password">
            <label htmlFor="password">{"Password"}</label>
            <input
              className="login-container__auth__form__input"
              onChange={handleChange}
              type="password"
              name="password"
            />
          </div>
          <button className="login-container__auth__form__button">
            {"Login"}
          </button>
          <GoogleButton handleClick={handleGoogleLogin} />
        </form>
      </div>
      {showAlert ? <Alert type="error" message={error} /> : null}
    </div>
  );
}
