import "./index.css";
import { AiOutlineWarning } from "react-icons/ai";

export function Alert({ type, message }) {
  return (
    <div className={`alert alert--${type}`}>
      {type === "error" ? <AiOutlineWarning /> : null}
      {message}
    </div>
  );
}
