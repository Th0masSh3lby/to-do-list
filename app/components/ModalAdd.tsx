import React from "react";
import ToDoStore from "./ToDoStore";

//Modal to add tasks
interface ModalAddProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  newTodoTitle: string;
  setNewTodoTitle: (title: string) => string | void;
  newTodoDes: string;
  setNewTodoDes: (des: string) => string | void;
}

const ModalAdd: React.FC<ModalAddProps> = ({
  modalOpen,
  setModalOpen,

  newTodoTitle,
  setNewTodoTitle,
  newTodoDes,
  setNewTodoDes,
}) => {
  const handleSubmitNewTodo = (e: any) => {
    e.preventDefault();
    console.log(ToDoStore.todos);
    newTodoTitle !== ""
      ? ToDoStore.addTodo(newTodoTitle, newTodoDes, false)
      : ToDoStore.addTodo("Untitled", newTodoDes, false);
    setModalOpen(false);
  };

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
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg ml-3 mb-0">Add new Task</h3>
          <div className="modal-action flex flex-col content-center mt-0">
            <input
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              type="text"
              placeholder="Task's Title"
              className="input input-bordered w-60 mb-2 ml-2"
            />
            <input
              value={newTodoDes}
              onChange={(e) => setNewTodoDes(e.target.value)}
              type="text"
              placeholder="Description"
              className="input input-bordered  mb-2 "
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

export default ModalAdd;
