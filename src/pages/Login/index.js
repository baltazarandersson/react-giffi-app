import { Alert } from "components/Alert";
import { useAuthContext } from "context/AuthContext";
import { useSEO } from "hooks/useSEO";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { GoogleButton } from "components/GoogleButton";
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
    <div style={{ display: "flex", width: "100%" }}>
      <div className="login">
        <form className="login__form" onSubmit={handleSumbit}>
          <div className="login__form__email">
            <label htmlFor="email">{"Email"}</label>
            <input
              className="login__form__input"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="login__form__password">
            <label htmlFor="password">{"Password"}</label>
            <input
              className="login__form__input"
              onChange={handleChange}
              type="password"
              name="password"
            />
          </div>
          <button className="login__form__button">{"Login"}</button>
          <GoogleButton handleClick={handleGoogleLogin} />
        </form>
      </div>
      <img
        className="login-background"
        alt="login-background"
        src="https://media4.giphy.com/media/Y4vip84hg9BhdNidTR/giphy.gif?cid=f0ffccde376a579f0fae781a3f3c13242588aed65a3ae934&rid=giphy.gif&ct=g"
      />
      {showAlert ? <Alert type="error" message={error} /> : null}
    </div>
  );
}
