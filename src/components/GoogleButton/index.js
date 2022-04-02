import "./index.css";

export function GoogleButton({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="login-with-google-btn"
    >
      Access with Google
    </button>
  );
}
