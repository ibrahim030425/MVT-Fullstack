import React from "react";
import TodoList from "./components/ToDoList.js";

const App: React.FC = () => {
  return (
    <div style={{padding: "2rem", fontFamily: "Arial, sans-serif"}}>
      <TodoList/>
    </div>
  )
}

export default App