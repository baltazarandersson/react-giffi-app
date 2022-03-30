import React from "react";
import "./index.css";

export default function Spinner() {
  return (
    <>
      <div className="loader">
        <div>
          <div className="fulfilling-square-spinner">
            <div className="spinner-inner"></div>
          </div>
        </div>
      </div>
    </>
  );
}
