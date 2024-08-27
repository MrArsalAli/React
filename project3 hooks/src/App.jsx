import { useState } from 'react'

function App() {

  // const [userName, setUserName] = useState("Arsalan Ali")
  // const handleUpdation = () => setUserName("Arsal");
  // console.log(userName);
  // const [todo, setTodo] = useState()

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = ()=>{
    setTodo([...todos, todo])
    settodo("");
  }

  return (
    <>
    {/* <div>
      <h2>{userName}</h2>
      <button onClick={handleUpdation}> Update</button>
    </div> */}

    <div className="max-w-md mx-auto mt-4">
      <h1 className="text-3xl">todo by useState</h1>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
  </label>
      <div className="relative">
        <input value={todo} onChange={(e)=> setTodo(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit" onClick={addTodo} 
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
    </button>
      </div>
      <button onClick={()=> setTodo([])}>Clear</button>
    </div>
    </>
  )
}

export default App
