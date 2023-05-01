import { TodoForm } from "./TodoForm";
import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoLists } from "./TodoLists";
export function TodoContent() {
  return (
    <main className="content">
      {/* Todo-Header  */}
      <TodoHeader />

      {/* Add todo */}
      <AddTodo />

      {/* Todo-List  */}
      <TodoLists />
    </main>
  );
}
