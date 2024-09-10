import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard.jsx"
import CategoryChip from "../components/CategoryChip.jsx"
import Footer from "../components/Footer.jsx";

function MainPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    const url = chosenCategory === "All" ?
      'https://dummyjson.com/products' :
      `https://dummyjson.com/products/category/${chosenCategory}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
      }).catch((err) => console.log(err)
      )
  }, [chosenCategory])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      }).catch((err) => console.log(err)
      )
  }, [])
  return (
    <>

    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <CategoryChip
        onClick={() => setChosenCategory("All")}
        category={{
          slug: 'All',
          name: 'All'
        }} isChosen={chosenCategory === "All"}
        />
        {categories.map((category) => (
          <CategoryChip onClick={() => setChosenCategory(category.slug)}
            isChosen={category.slug === chosenCategory}
            category={category} key={category.slug} />
        ))}
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data) => (
              <ProductCard info={data} key={data.id} />
            )
            )}
          </div>
        </div>
      </section>
    </div>
      <Footer/>
    </>
  )
}


export default MainPage;