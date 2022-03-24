import React from "react";

export default function Loading() {
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
