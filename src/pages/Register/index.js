import { Alert } from "components/Alert";
import { GoogleButton } from "components/GoogleButton";
import { useAuthContext } from "context/AuthContext";
import { useSEO } from "hooks/useSEO";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import "./index.css";

const codeErrorFilter = {
  "auth/invalid-email": "Your email is invalid",
  "auth/email-already-in-use": "The email is already in use",
  "auth/weak-password": "You password must have 6 characters long",
};

export function Register() {
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

  const { signUp, loginWithGoogle } = useAuthContext();

  useSEO({
    title: "Register",
    description: "Register your own account on GIFFI",
  });

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

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

  async function handleSumbit(e) {
    e.preventDefault();
    try {
      await signUp(user.email, user.password);
      setLocation("/");
    } catch (error) {
      setError(codeErrorFilter[error.code]);
      setShowAlert(true);
    }
  }
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="register">
        <form className="register__form" onSubmit={handleSumbit}>
          <div className="register__form__email">
            <label htmlFor="email">{"Email"}</label>
            <input
              className="register__form__input"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="register__form__password">
            <label htmlFor="password">{"Password"}</label>
            <input
              className="register__form__input"
              onChange={handleChange}
              type="password"
              name="password"
            />
          </div>
          <button className="register__form__button">
            {"Register account"}
          </button>
          <GoogleButton handleClick={handleGoogleLogin} />
        </form>
      </div>
      <img
        className="register-background"
        alt="register-background"
        src="https://media1.giphy.com/media/ml99VqtqTAdPy/giphy.gif?cid=f0ffccdefb476a780197b0ffaee2acac220758e47ef948d2&rid=giphy.gif&ct=g"
      />
      {showAlert ? <Alert type="error" message={error} /> : null}
    </div>
  );
}
