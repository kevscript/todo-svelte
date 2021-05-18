<script lang="ts">
  import { onDestroy } from "svelte";
  import type { Todo } from "./todoModel"
  import { todos } from "./stores"

  let allTodos: Todo[];
  
  const unsubscribe = todos.subscribe(tds => {
    allTodos = tds
  })

  onDestroy(unsubscribe)
</script>

<div>
  <h1>Todo List</h1>
  <ul>
    {#each allTodos as todo}
      <li>
        <span>{todo.title}</span>
        <button>x</button>
      </li>
    {/each}
  </ul>
</div>
