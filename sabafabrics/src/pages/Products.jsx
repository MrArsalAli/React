import React, { useEffect, useState } from "react";

function Products() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="mx-auto mt-16">
        <div className="grid grid-cols-5 gap-2 px-2 mt-1">
          <div>
            <img className="h-96 max-w-full" src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
            Brown Design Wool Rich Stripes
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>
          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Brown Design Wool Rich Stripes
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Brown Self Stripes Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Cherry Red Houndstooth Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Dark Brown Plain Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 px-2 mt-1">
          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Broad Checks Medium Grey Wool
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>
          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Brown Design Wool Rich Stripes
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Brown Self Stripes Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Cherry Red Houndstooth Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Dark Brown Plain Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 px-2 mt-1">
          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Broad Checks Medium Grey Wool
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>
          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Brown Design Wool Rich Stripes
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fHww"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Brown Self Stripes Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Cherry Red Houndstooth Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>

          <div>
            <img
              className="h-96 max-w-full"
              src="https://images.unsplash.com/photo-1524464706543-574d1bf3f7d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p className="mt-2 font-semibold text-gray-700 dark:text-gray-400">
              Dark Brown Plain Wool Rich
            </p>
            <p className="text-gray-400">From Rs.8,100PKR</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
