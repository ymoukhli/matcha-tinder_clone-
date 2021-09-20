import { useState } from "react";
import Button from "./Button";

export default function Overlay({ onClick = function (e) {}, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  function disableOverlay(e) {
    if (e.target.id === "root") {
      closePopup();
      onClick(e);
    }
  }

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <>
      <Button type="button" onClick={openPopup} text={props.text}></Button>
      {isOpen && (
        <div
          id="root"
          onClick={disableOverlay}
          className="w-full h-screen fixed top-0 left-0 bg-purple-600 bg-opacity-50 backdrop-blur-lg flex items-center justify-center"
        >
          <div className="w-3/6 min-w-max max-w-2xl h-3/6 min-w-max bg-white rounded-lg">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
