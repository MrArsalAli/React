import { useState } from 'react'
import { useEffect } from 'react'
import  Heading  from '../components/heading.jsx'

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
      console.log(products);
      
  };

  const filtered = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );




  return (
    <>
      <h1 className="text-3xl text-center mt-2">Vite + React</h1>
      <div className="container mx-auto flex flex-col items-center">
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mx-auto my-2 w-2/4"
      />
        
      {filtered.map((data) => (
        <Heading id={data.id} title={data.title} key={data.id} />
        
      ))}
      
    </div>  
      
    </>
  )
}

export default App;
