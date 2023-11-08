export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}
export type TodosFilter = "all" | "active" | "completed";
export declare const authMachine: import("xstate").StateMachine<{
    count: string;
    todo: string;
    todos: TodoItem[];
    filter: TodosFilter;
}, {
    type: "cart.add";
    id: string;
} | {
    type: "newTodo.change";
    value: string;
} | {
    type: "newTodo.commit";
    value: string;
} | {
    type: "todo.commit";
    todo: TodoItem;
} | {
    type: "todo.delete";
    id: string;
} | {
    type: "filter.change";
    filter: TodosFilter;
} | {
    type: "todo.mark";
    id: string;
    mark: "active" | "completed";
} | {
    type: "todo.markAll";
    mark: "active" | "completed";
} | {
    type: "todos.clearCompleted";
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string, unknown, import("xstate").NonReducibleUnknown, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, {
    type: "cart.add";
    id: string;
} | {
    type: "newTodo.change";
    value: string;
} | {
    type: "newTodo.commit";
    value: string;
} | {
    type: "todo.commit";
    todo: TodoItem;
} | {
    type: "todo.delete";
    id: string;
} | {
    type: "filter.change";
    filter: TodosFilter;
} | {
    type: "todo.mark";
    id: string;
    mark: "active" | "completed";
} | {
    type: "todo.markAll";
    mark: "active" | "completed";
} | {
    type: "todos.clearCompleted";
}, import("xstate").ProvidedActor, import("xstate").ParameterizedObject, import("xstate").ParameterizedObject, string, string>>;
//# sourceMappingURL=auth.machine.d.ts.map