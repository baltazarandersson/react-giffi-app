import { GoogleButton } from "components/GoogleButton";
import { useAlertContext } from "context/AlertContext";
import { useAuthContext } from "context/AuthContext";
import { useSEO } from "hooks/useSEO";
import { useState } from "react";
import { useLocation } from "wouter";

const codeErrorFilter = {
  "auth/user-not-found": "Your email is invalid",
  "auth/invalid-email": "Your email is invalid or empty",
  "auth/wrong-password": "You password is wrong",
  "auth/popup-closed-by-user": "Closed the pop-up before authentication",
};

export function LoginForm() {
  const [location, setLocation] = useLocation();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { showAlert, setShowAlert } = useAlertContext();

  const { logIn, loginWithGoogle } = useAuthContext();

  useSEO({
    title: "Login",
    description: "Login to your own account on GIFFI",
  });

  const handleChange = ({ target: { name, value } }) =>
    setUserCredentials({ ...userCredentials, [name]: value });

  async function handleSumbit(e) {
    e.preventDefault();
    try {
      await logIn(userCredentials.email, userCredentials.password);
      setLocation("/");
      setShowAlert((showAlert) => ({
        ...showAlert,
        show: true,
        type: "success",
        message: "Login with success",
      }));
    } catch (error) {
      setShowAlert((showAlert) => ({
        ...showAlert,
        show: true,
        type: "error",
        message: codeErrorFilter[error.code],
      }));
    }
  }

  async function handleGoogleLogin() {
    try {
      await loginWithGoogle();
      setLocation("/");
      setShowAlert((showAlert) => ({
        ...showAlert,
        show: true,
        type: "success",
        message: "Login with success",
      }));
    } catch (error) {
      setShowAlert((showAlert) => ({
        ...showAlert,
        show: true,
        type: "error",
        message: codeErrorFilter[error.code],
      }));
    }
  }

  return (
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
      <button className="login-container__auth__form__button">{"Login"}</button>
      <GoogleButton handleClick={handleGoogleLogin} />
    </form>
  );
}
