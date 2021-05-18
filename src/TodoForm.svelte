<script lang="ts">
  import { todos } from "./stores"
  let inputValue = ""

  function addTodo() {
    if (inputValue) {
      todos.update(td => [...td, {
        id: String(Date.now()),
        title: inputValue,
        status: "TODO"
      }])
    }
    inputValue=""
  }

</script>

<form>
  <input type="text" bind:value={inputValue}>
  <button on:click={addTodo}>Add Todo</button>
</form>