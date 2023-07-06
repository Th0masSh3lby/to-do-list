import React from "react";
import toDoStore from "./ToDoStore";

//Modal to delete tasks
interface ModalDelProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  ind: number;
}

const ModalDelete: React.FC<ModalDelProps> = ({
  modalOpen,
  setModalOpen,
  ind,
}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <button
          onClick={() => setModalOpen(false)}
          className="btn btn-circle absolute right-2 top-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toDoStore.deleteTodo(ind);
            setModalOpen(false);
          }}
        >
          <h3 className="font-bold text-lg mb-3">Delete this Task?</h3>

          <button type="submit" className="btn btn-primary btn-sm mr-2">
            Yes
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(false);
            }}
            className="btn btn-primary btn-sm"
          >
            No
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalDelete;
