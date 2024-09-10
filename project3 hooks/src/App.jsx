import { useState } from 'react'

function App() {
    // todo by useState
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = () => {
      setTodos ([...todos, newTodo]);
      setNewTodo("");
    }
  return (
    <>
    {/* <div className="flex flex-col items-center">
    <h1 className="text-4xl m-4">Hello<span className="text-4xl m-4">{input}</span>{" "}</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} className="p-2 border w-1/4 justify-center" type="text"/>
    </div> */}
    <div className="flex flex-col items-center">
      <h1 className="text-3xl"> Todo </h1>
      <input className="border p-2 w-1/4" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter Input"/>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2" onClick={addTodo}>Add Todo</button>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2" onClick={() => setTodos([])}>Clear</button>
      <ol>
        {todos.map((todo, index) =>(
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>

    </>
  )
}

export default App;
