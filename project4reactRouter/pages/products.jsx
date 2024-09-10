import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from "../components/productCard.jsx"
import CategoryChips from '../components/categoryChips';

function Products() {
    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [chosenCategory, setChosenCategory] = useState('All');

    useEffect(() => {
        const url = chosenCategory === "All" ?
            '//dummyjson.com/products' :
            `//dummyjson.com/products/category/${chosenCategory}`
        axios
            .get(url)
            .then((res) => {
                setProduct(res.data.products)
            })
    }, [chosenCategory]);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategories(res.data)

            })
    }, []);


    return (

        <div>
            <div className="flex flex-wrap gap-2">
                <CategoryChips category={{
                    slug: 'All',
                    name: 'All'
                }}
                    onClick={() => setChosenCategory("All")}
                    isChosen={chosenCategory === "All"} />
                {categories.map((category) =>
                    <CategoryChips onClick={() => setChosenCategory(category.slug)}
                        isChosen={category.slug === chosenCategory}
                        category={category} key={category.slug} />)}
            </div>




            <div className="flex flex-wrap -mx-4 -my-4">
                {products.map((item) =>
                    <ProductCard item={item} key={item.id} />
                )}
            </div>
        </div>


    )
}


export default Products