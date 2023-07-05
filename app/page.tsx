"use client";

import { observer } from "mobx-react";
import AddTask from "./components/AddTask";
import ToDoListView from "./components/ToDoListView";
import ToDoStore from "./components/ToDoStore";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/*--------Heading------*/}
      <h2 className="mb-3 text-3xl font-semibold">To Do List</h2>
      {/*--------Button for adding task------*/}
      <AddTask />
      {/*-------Current List Grid View-------*/}
      <ToDoListView store={ToDoStore} />
    </main>
  );
}
