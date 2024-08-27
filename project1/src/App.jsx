import './App.css'

function App() {
  const user = false;
  const name = "Arsalan";

  const products = [
    { name: "Mouse", key: 1 },
    { name: "Laptop", key: 2 },
    { name: "Mobile", key: 3 }
  ];

  const items = [
    { name: "Lorem", key: "a", src: "https://images.unsplash.com/photo-1721332155637-8b339526cf4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ipsum", key: "b", src: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Growatt", key: "c", src: "https://images.unsplash.com/photo-1467453678174-768ec283a940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Solar", key: "d", src: "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Inverex", key: "e", src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },

  ]

  return (
    <>
    <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
    {/* <h3>{name}</h3>
    <button>{user ? "Welcome" : "LogIn"}</button>
    <ol>
      {products.map((data) =>
        <li key={data.key}>{data.name}</li>
      )}
    </ol> */}
    <div id="imgDiv">
      {items.map((data) =>
        <div key={data.key}>
        <img id="img" src={data.src} />
        <h2 className="text-1xl font-bold">{data.name}</h2>
        </div>
      )}
    </div>
    </>
  )
}

export default App
