import Footer from "./components/footer.jsx"
import ProductCard from "./components/productcard.jsx"
import { useState, useEffect } from "react"
import { Pagination } from "antd"
import React from 'react'



function App() {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(20)
  const [skip, setSkip] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {

        setProducts(res.products)
        setTotal(res.total)
      })
  }, [limit, skip])

  return (
    <>
    <section className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 bg-gray-300">
          {products.map((data) => (
            <ProductCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
    <div className="bg-gray-200 flex justify-center">
      <Pagination
      className=""
        defaultCurrent={1}
        total={total}
        onChange={(num) => setSkip((num - 1) * limit)}
        onShowSizeChange={(page, pageSize) => setLimit(pageSize)}
        pageSize={limit}
      />
    </div>
    <Footer />
    </>
  )
}

export default App;
