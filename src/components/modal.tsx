import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setOpen: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </div>
  );
};

export default Modal;