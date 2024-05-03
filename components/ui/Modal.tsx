"use client";

import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <>
    <div className="bg-black opacity-15 blur-lg h-full w-full fixed z-20">
    </div>
      <ModalContent onClose={onClose}>{children}</ModalContent>
    </>,
    document.getElementById("portal")!
  );
};

const ModalContent = ({ children, onClose }) => {
  return (
    <div className="fixed bottom-0 w-full p-3 z-20 bg-[#7ac1f4]">
      <div className="flex w-full justify-end">
        <button onClick={() => onClose()} className="h-5 w-5 relative ml-auto">
          <div className="w-full h-[2px] bg-black rotate-45 left-[10px] absolute"></div>
          <div className="w-full h-[2px] bg-black rotate-[-45deg] absolute left-[10px]"></div>
        </button>
      </div>
      <div data-testid="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
