import { types, getParent } from "mobx-state-tree";

//Todo -- task with name, description and status
const Todo = types
  .model({
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    status: types.optional(types.boolean, false),
  })
  .actions((self) => {
    function setName(newTitle: string) {
      self.title = newTitle;
    }
    function toggleStatus() {
      self.status = !self.status;
    }

    return { setName, toggleStatus };
  });

//RootStore --- Store for all Todos(tasks)
const RootStore = types
  .model({
    todos: types.optional(types.array(Todo), []),
  })
  .actions((self) => {
    function addTodo(title: string, description: string, status: boolean) {
      let temp = Todo.create({ title, description, status });
      self.todos.push(temp);
    }
    return { addTodo };
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
