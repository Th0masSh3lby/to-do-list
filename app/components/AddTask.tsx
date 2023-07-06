"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { observer } from "mobx-react";
import ModalAdd from "./ModalAdd";

const AddTask = observer(() => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDes, setNewTodoDes] = useState<string>("");

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
