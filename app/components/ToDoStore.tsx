import { types, getParent } from "mobx-state-tree";

//Todo -- task with name, description and status
const Todo = types
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
    todos: types.optional(types.array(Todo), []),
  })
  .actions((self) => {
    //function for adding tasks
    function addTodo(title: string, description: string, status: boolean) {
      let temp = Todo.create({ title, description, status });
      self.todos.push(temp);
    }
    //function for updating tasks
    function updateTodo(
      index: number,
      title: string,
      description: string,
      status: boolean
    ) {
      let temp = Todo.create({ title, description, status });
      self.todos.splice(index, 1, temp);
    }

    //function for deleting tasks
    function deleteTodo(index: number) {
      self.todos.splice(index, 1);
    }

    return { addTodo, updateTodo, deleteTodo };
  });

const ToDoStore = RootStore.create({
  todos: [
    {
      title: "Eat a cake",
      description: "description of the task",
      status: false,
    },
    {
      title: "Running",
      description: "Run atleast 5km",
      status: true,
    },
  ],
});

export default ToDoStore;
