import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
    const fetchTodos = async () => {
        const res = await fetch("http://localhost:3000/todos");
        const data: Todo[] = await res.json();
        setTodos(data);
    };

    fetchTodos();
}, []);


    const addTodo = async () => {
         const text = newTodo.trim();
    if (!text) return;

    const alreadyExists = todos.some(
        todo => todo.text.toLowerCase() === text.toLowerCase()
    );

    if (alreadyExists) {
        alert("Todo finns redan!");
        return;
    }
        const res = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: newTodo })
        });
        const added = await res.json();
        setTodos([...todos, added]);
        setNewTodo("");
    };

    const toggleComplete = async (id: number) => {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH"
        });
        const updated = await res.json();

        setTodos(todos.map(t => (t.id === updated.id ? updated : t)));
    };

    const removeToDo = async (id: number) => {
        await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Todo List</h1>

            <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />

            <button onClick={addTodo}>Lägg Till</button>

            <ul style={{ listStyle: "none" }}>
                {todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        {...todo}
                        toggleComplete={toggleComplete}
                        removeToDo={removeToDo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

