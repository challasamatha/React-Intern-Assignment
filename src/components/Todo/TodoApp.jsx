import { useState } from "react";
import TodoItem from "./TodoItem";
import FilterControls from "./FilterControls";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const filteredTodos = todos.filter(todo =>
    filter === "all" ? true :
    filter === "active" ? !todo.completed :
    todo.completed
  );

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">Todo App</h2>

      <div className="flex gap-2 mt-2">
        <input
          className="border p-2 flex-1"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4">
          Add
        </button>
      </div>

      <FilterControls setFilter={setFilter} />

      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
}