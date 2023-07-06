"use client";
import ModalUpdate from "./ModalUpdate";
import { values } from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { MdPendingActions } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import ToDoStore from "./ToDoStore";
import ModalDelete from "./ModalDelete";

const ToDoListView = observer((props: any) => {
  const [modalUpdateOpen, setModalUpdateOpen] = useState<boolean>(false);
  const [modalDelOpen, setModalDelOpen] = useState<boolean>(false);
  const [upTodoTitle, setUpTodoTitle] = useState("");
  const [upTodoDes, setUpTodoDes] = useState("");
  const [ind, setInd] = useState(0);

  return (
    <div className="grid w-full grid-cols-2 gap-4 mt-4 px-20">
      {values(props.store.todos).map((todo, index) => (
        <div key={index} className="card bg-base-100 shadow-xl mt-4    ">
          <div className="card-body">
            <h2 className="card-title">
              #{index}:{todo.title}
            </h2>
            {/*Task Title*/}
            <p className="mb-4">{todo.description}</p>
            {/*Task Description*/}

            <div className="card-actions justify-between">
              {/*Task Status*/}
              {todo.status ? (
                <div
                  onClick={() => {
                    todo.toggleStatus();
                  }}
                  className="flex pt-1 hover:cursor-pointer"
                  content="center"
                >
                  <AiOutlineFileDone color="green" size={20} />

                  <p className="ml-1 text-sm"> Done</p>
                </div>
              ) : (
                <div
                  onClick={() => {
                    todo.toggleStatus();
                  }}
                  className="flex pt-1 hover:cursor-pointer"
                  content="center"
                >
                  <MdPendingActions color="red" size={20} />

                  <p className="ml-1 text-sm"> Pending</p>
                </div>
              )}
              <div>
                {/*Task Update Button*/}
                <button
                  onClick={() => {
                    setUpTodoTitle(todo.title);
                    setUpTodoDes(todo.description);
                    setModalUpdateOpen(true);
                    setInd(index);
                    console.log(index);
                  }}
                  className="btn btn-primary btn-sm mx-1 text-white"
                >
                  Update
                </button>
                {/*Task Update Modal*/}
                <ModalUpdate
                  modalOpen={modalUpdateOpen}
                  setModalOpen={setModalUpdateOpen}
                  TodoTitle={upTodoTitle}
                  TodoDes={upTodoDes}
                  setTodoTitle={setUpTodoTitle}
                  setTodoDes={setUpTodoDes}
                  ind={ind}
                />

                {/*Task Delete Button*/}
                <button
                  onClick={() => {
                    setModalDelOpen(true);
                    setInd(index);
                    console.log(index);
                  }}
                  className="btn btn-primary btn-sm mx-1 text-white"
                >
                  Delete
                </button>
                <ModalDelete
                  modalOpen={modalDelOpen}
                  setModalOpen={setModalDelOpen}
                  ind={ind}
                />
                {/*Task Delete Modal*/}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ToDoListView;
