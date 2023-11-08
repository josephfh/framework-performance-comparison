import { assign, createMachine } from "xstate";

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export type TodosFilter = "all" | "active" | "completed";

export const authMachine = createMachine({
  id: "todos4",
  types: {} as {
    context: {
      count: string;
      todo: string;
      todos: TodoItem[];
      filter: TodosFilter;
    };
    events:
      | { type: "cart.add"; id: string }
      | { type: "newTodo.change"; value: string }
      | { type: "newTodo.commit"; value: string }
      | { type: "todo.commit"; todo: TodoItem }
      | { type: "todo.delete"; id: string }
      | { type: "filter.change"; filter: TodosFilter }
      | { type: "todo.mark"; id: string; mark: "active" | "completed" }
      | { type: "todo.markAll"; mark: "active" | "completed" }
      | { type: "todos.clearCompleted" };
  },
  context: {
    count: "33",
    todo: "",
    todos: [
      {
        id: "1",
        title: "Learn state machines",
        completed: false,
      },
    ],
    filter: "all",
  },
  on: {
    "cart.add": {
      actions: [
        assign({
          count: ({ event }) => event.id,
        }),
      ],
    },
  },
});
