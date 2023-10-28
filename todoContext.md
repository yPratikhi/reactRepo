TodoContext (React Project)

Step 1:

- Create Vite Project + tailwint setup
- In SRC folder we have to create the context file then Create-(TodoContext.js)

> Inside to ToContext Setup

```
import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updatedTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider

```

> creating the index.js in Context Becouse to import everything
> if anyone want's the data can import from index.js

> Inside index.js

```
export { TodoContext, Todoprovider, useTodo } from "./TodoContext"

```

---

Step 2:In app.jsx

- Make a useState([]) with a Blank Array
- In return() Call the TodoProvider and rest copy from the Nots in (GIT)
- The add the values on Provider:

---

```
<TodoProvider
value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }} >

- After Adding the value to the provider then maker the function of <Values> which is present in provider value.

const addTodo = (todo) => {
setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
};

const updateTodo = (id, todo) => {
setTodos((prev) => {
prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo));
});
};

const deleteTodo = (id) => {
setTodos((prev) => prev.filter((todo) => todo.id !== id));
};

const toggleComplete = (id) => {
setTodos((prev) =>
prev.map((prevTodo) =>
prevTodo === id
? { ...prevTodo, completed: !prevTodo.completed }
: prevTodo
)
);
};

```

- Also called the useState([])

```
const [todos,setTodos] = useState([])
```

Step 3:

- Adding the localStoreage with the help of useEffect() and JSON formate

```
useEffect(() => {
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos && todos.length > 0) {
setTodos(todos);
}
}, []);

useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

Step 4:
-Makeing of Components (TodoForm.jsx,TodoIteam.jsx,index.js)
-index.js is For exporting both the components(TodoForm.jsx,TodoIteam.jsx)
-TodoForm.jsx add form the nots

```
import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
const [todo, setTodo] = useState;
const { addTodo } = useTodo;

//addTodo

const add = (e) => {
e.preventDefault();
if (!todo) return;
addTodo({ todo, completed: false });
setTodo("");
};
return (

  <form onSubmit={add} className="flex">
    <input
      type="text"
      placeholder="Write Todo..."
      className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
    <button
      type="submit"
      className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
    >
      Add
    </button>
  </form>
);
}

export default TodoForm;
```
