"use client";
import { types, onSnapshot } from "mobx-state-tree";
//Todo -- task with name, description and status
const toDo = types
  .model({
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    status: types.optional(types.boolean, false),
  })
  .actions((self) => {
    //function for changing the status
    function toggleStatus() {
      self.status = !self.status;
    }
    return { toggleStatus };
  });

//RootStore --- Store for all Todos(tasks)
const RootStore = types
  .model({
    todos: types.optional(types.array(toDo), []),
  })
  .actions((self) => {
    //function for adding tasks
    function addTodo(title: string, description: string, status: boolean) {
      let temp = toDo.create({ title, description, status });
      self.todos.push(temp);
    }
    //function for updating tasks
    function updateTodo(
      index: number,
      title: string,
      description: string,
      status: boolean
    ) {
      let temp = toDo.create({ title, description, status });
      self.todos.splice(index, 1, temp);
    }

    //function for deleting tasks
    function deleteTodo(index: number) {
      self.todos.splice(index, 1);
    }

    return { addTodo, updateTodo, deleteTodo };
  });

let initialState: any = {
  todos: [
    {
      title: "Next.js",
      description: "Learn Next.js and solve the assignment given",
      status: true,
    },
    {
      title: "Assignment",
      description: "Submit Assigment before due date",
      status: false,
    },
  ],
};

//setting local storage and changing initial state if local storage exists

if (localStorage.getItem("ToDoStoreList")) {
  const json = JSON.parse(localStorage.getItem("ToDoStoreList") || "");
  console.log(json);
  if (RootStore.is(json)) {
    initialState = json;
  }
}

const toDoStore = RootStore.create(initialState);
onSnapshot(toDoStore, (snapshot) => {
  globalThis.window.localStorage.setItem(
    "ToDoStoreList",
    JSON.stringify(snapshot)
  );
});

export default toDoStore;
