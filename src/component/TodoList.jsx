import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
  const listRef = useRef(null);
  console.log(listRef.current);
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  // add hendler
  const handleAdd = () => {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  //input change handler
  // const inputHandler = (e) => {
  //   const vaue = e.target.value;
  //   setText(vaue);
  // };

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "todo" + (i + 1),
  });
}
