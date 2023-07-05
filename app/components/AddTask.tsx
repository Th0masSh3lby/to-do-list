"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDoStore from "./ToDoStore";
import { observer } from "mobx-react";
import ModalAdd from "./Modal";

const AddTask = observer(() => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDes, setNewTodoDes] = useState("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(ToDoStore.todos);
    newTodoTitle !== ""
      ? ToDoStore.addTodo(newTodoTitle, newTodoDes, false)
      : ToDoStore.addTodo("Untitled", newTodoDes, false);
    setModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => {
          setNewTodoDes("");
          setNewTodoTitle("");
          setModalOpen(true);
        }}
        className="btn btn-primary w-full text-white"
      >
        Add new task <AiOutlinePlus size={18} />
      </button>
      <ModalAdd modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action flex flex-col content-center">
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
              className="input input-bordered h-20 mb-2 "
            />
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </ModalAdd>
    </div>
  );
});

export default AddTask;
