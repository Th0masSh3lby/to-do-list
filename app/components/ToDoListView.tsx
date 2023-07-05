"use client";

import { values } from "mobx";
import { observer } from "mobx-react";
import React from "react";

const ToDoListView = observer((props: any) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 mt-4 px-20">
      {values(props.store.todos).map((todo, index) => (
        <div key={index} className="card bg-base-100 shadow-xl mt-4    ">
          <div className="card-body">
            <h2 className="card-title">{todo.title}</h2>
            <p>{todo.description}</p>
            <h3>{todo.status ? "Done" : "Pending"}</h3>

            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Update</button>
              <button className="btn btn-primary btn-sm">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ToDoListView;
