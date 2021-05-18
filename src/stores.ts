import { writable } from "svelte/store";
import type { Todo } from "./todoModel";

export const todos = writable<Todo[]>([
  { id: "9846", title: "Go shopping", status: "TODO" },
  { id: "8765", title: "Take a nap", status: "TODO" },
  { id: "4842", title: "Do homework", status: "TODO" },
]);
