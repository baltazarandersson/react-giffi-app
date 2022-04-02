import "./index.css";
import { MdWarningAmber, MdCheck } from "react-icons/md";

export function Alert({ type, message }) {
  return (
    <div className="alert-container">
      <div className={`alert alert--${type}`}>
        {type === "error" ? <MdWarningAmber /> : <MdCheck />}
        {message}
      </div>
    </div>
  );
}
