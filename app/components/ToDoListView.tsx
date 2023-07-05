"use client";
import ModalAdd from "./Modal";
import { values } from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { MdPendingActions } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import ToDoStore from "./ToDoStore";

const ToDoListView = observer((props: any) => {
  const [modalUpOpen, setModalUpOpen] = useState<boolean>(false);
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
                    setModalUpOpen(true);
                    setInd(index);
                    console.log(index);
                  }}
                  className="btn btn-primary btn-sm mx-1 text-white"
                >
                  Update
                </button>
                {/*Task Update Modal*/}
                <ModalAdd modalOpen={modalUpOpen} setModalOpen={setModalUpOpen}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      ToDoStore.updateTodo(ind, upTodoTitle, upTodoDes, false);
                      setModalUpOpen(false);
                    }}
                  >
                    <h3 className="font-bold text-lg">Add new Task</h3>
                    <div className="modal-action flex flex-col content-center">
                      <input
                        value={upTodoTitle}
                        onChange={(e) => setUpTodoTitle(e.target.value)}
                        type="text"
                        placeholder="Task's Title"
                        className="input input-bordered w-60 mb-2 ml-2"
                      />
                      <input
                        value={upTodoDes}
                        onChange={(e) => setUpTodoDes(e.target.value)}
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
                <ModalAdd
                  modalOpen={modalDelOpen}
                  setModalOpen={setModalDelOpen}
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      ToDoStore.deleteTodo(ind);
                      setModalDelOpen(false);
                    }}
                  >
                    <h3 className="font-bold text-lg">Delete this Task?</h3>

                    <button type="submit" className="btn btn-primary ">
                      Yes
                    </button>
                  </form>
                </ModalAdd>
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
