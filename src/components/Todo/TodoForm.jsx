import styles from "./TodoForm.module.scss";
import React, { useState } from "react";
export function TodoForm({ onSetIsAddmode }) {
  // 1 LOGIC
  const [task, setTask] = useState("");
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    if (task.trim() === "") {
      setIsError(true);
      return;
    }
    // set back to normal mode
    console.log("SUBMIT");
  };
  const handleClickCancel = (e) => {
    onSetIsAddmode(false);
  };

  const handleChangInput = (e) => {
    setIsError(false);
    setTask(e.target.value);
  };
  // 2 UI:SECTION
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={task}
        onChange={handleChangInput}
      />
      <div className={styles.todo__form__footer}>
        {isError && <p className={styles.todo__error}>Title is required</p>}
        <div className={styles.todo__form__buttons}>
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
          <button type="submit">Add Task</button>
        </div>
      </div>
    </form>
  );
}
