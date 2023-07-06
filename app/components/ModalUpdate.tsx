import React from "react";
import ToDoStore from "./ToDoStore";

//Modal to update tasks
interface ModalUpdateProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  TodoTitle: string;
  setTodoTitle: (title: string) => string | void;
  TodoDes: string;
  setTodoDes: (des: string) => string | void;
  ind: number;
}

const ModalUpdate: React.FC<ModalUpdateProps> = ({
  modalOpen,
  setModalOpen,
  TodoTitle,
  setTodoTitle,
  TodoDes,
  setTodoDes,
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
            ToDoStore.updateTodo(ind, TodoTitle, TodoDes, false);
            setModalOpen(false);
          }}
        >
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action flex flex-col content-center">
            <input
              value={TodoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              type="text"
              placeholder="Task's Title"
              className="input input-bordered w-60 mb-2 ml-2"
            />
            <input
              value={TodoDes}
              onChange={(e) => setTodoDes(e.target.value)}
              type="text"
              placeholder="Description"
              className="input input-bordered h-20 mb-2 "
            />
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
