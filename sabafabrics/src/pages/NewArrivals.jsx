import { useEffect, useState } from "react";

function Newarrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);
  return (
    <>
      <div className="text-center h-24 content-center mt-2 text-4xl protest-strike-regular bg-emerald-50">
        New Arrivals
      </div>
      <div className="mx-auto mt-4">
        <div className="grid grid-cols-5 gap-2 px-2 mt-1">
          {products.map((data) => (
            <div key={data.id}>
              <img className="h-96 max-w-full" src={data.image} alt="" />
              <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
                {data.title}
              </p>
              <p className="text-gray-400">From Rs.{data.price}PKR</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Newarrivals;
