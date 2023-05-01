import styles from "./AddTodo.module.scss";
import { TodoForm } from "./TodoForm";
import { useState } from "react";

export function AddTodo() {
  // Logic
  const [isAddMode, setIsAddMode] = useState(false);
  // UI
  const handleClickAddTask = () => {
    setIsAddMode(!isAddMode);
  };
  return (
    <>
      {!isAddMode ? (
        <div className={styles.add__todo} onClick={handleClickAddTask}>
          <span>+</span>
          <h3>Add task</h3>
        </div>
      ) : (
        <TodoForm onSetIsAddmode={setIsAddMode} />
      )}
    </>
  );
}
