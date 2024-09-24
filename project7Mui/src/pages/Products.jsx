import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Pagination } from "antd";

function Products() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [chosenCategories, setChosenCategories] = useState("All")
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





    useEffect(() => {
        fetch("https://dummyjson.com/products/categories/")
            .then((res) => res.json())
            .then((data) => {
                setChosenCategories(data)
            })
    }, [])

    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data.products)
    //         })
    // }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])



    return (
        <>
        <div className="container px-5 mx-auto">
            <h1 className="inline-block m-1 rounded border p-2 cursor-pointer">All</h1>
            {categories.map((data) => (
                <h1 key={data.slug} className="inline-block m-1 rounded border p-2 cursor-pointer">{data.name}</h1>
            ))}
        </div>

        <section className="text-gray-600 body-font cursor-pointer">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 bg-gray-100">
                    {products.map((data) => (
                        <Link to={`/Products/${data.id}`} key={data.id} className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow">
                            <div>
                                <div className="rounded-lg h-64 overflow-hidden bg-gray-300">
                                    <img
                                        alt="content"
                                        className="object-cover object-center h-full w-full"
                                        src={data.thumbnail}
                                    />
                                </div>
                                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                                    {data.title}
                                </h2>
                                <p className="text-base leading-relaxed mt-2">
                                    {data.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        <div className="mb-5 flex justify-end mx-auto">
            <Pagination
                defaultCurrent={1}
                total={total}
                pageSize={limit}
                onChange={(num) => setSkip((num - 1) * limit)}
                onShowSizeChange={(pageSize) => setLimit(pageSize)} />
        </div>

        </>
    )
}


export default Products