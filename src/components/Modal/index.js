import "./index.css";
import { VscChromeClose } from "react-icons/vsc";
import { LoginForm } from "components/LoginForm";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-container__close-button" onClick={onClose}>
          <VscChromeClose size={"25px"} />
        </div>
        <div className="modal-container__login">
          <LoginForm closeModal={onClose} />
        </div>
      </div>
    </div>
  );
}

export function ModalPortal({ onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose} />,
    document.getElementById("root-modal")
  );
}
