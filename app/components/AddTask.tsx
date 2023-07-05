"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import ToDoStore from "./ToDoStore";
import { observer } from "mobx-react";

const AddTask = observer(() => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDes, setNewTodoDes] = useState("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(ToDoStore.todos);
    ToDoStore.addTodo(newTodoTitle, newTodoDes, false);
    setModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full text-white"
      >
        Add new task <AiOutlinePlus size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
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
      </Modal>
    </div>
  );
});

export default AddTask;
