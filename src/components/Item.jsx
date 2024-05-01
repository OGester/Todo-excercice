import { useState } from "react";

const Item = () => {
  const [title, setTitle] = useState("Title");
  const [task, setTask] = useState("Task");
  return (
    <div style={{ backgroundColor: "#1c1c1c" }} classname="todo-card">
      <div className="title">Title</div>
      <div className="task">Task</div>
    </div>
  );
};

export default Item;
