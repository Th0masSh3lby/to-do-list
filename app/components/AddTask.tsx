"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDoStore from "./ToDoStore";
import { observer } from "mobx-react";
import ModalAdd from "./ModalAdd";

const AddTask = observer(() => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDes, setNewTodoDes] = useState<string>("");

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
        className="btn btn-primary rounded-full mb-0 sm:w-full text-white"
      >
        Add task <AiOutlinePlus size={18} />
      </button>
      <ModalAdd
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        newTodoTitle={newTodoTitle}
        newTodoDes={newTodoDes}
        setNewTodoDes={setNewTodoDes}
        setNewTodoTitle={setNewTodoTitle}
      />
    </div>
  );
});

export default AddTask;
