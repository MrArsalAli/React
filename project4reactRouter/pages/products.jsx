import { useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from "../components/productCard.jsx"

function Products() {
    const [products, setProduct] = useState([]); 

    useEffect(()=>{
        axios
        .get('//dummyjson.com/products')
        .then((res)=>{
            setProduct(res.data.products)})
    }, []);



    return(
        <div className="flex flex-wrap -m-4">
        {products.map((item) => 
            <ProductCard item={item} key={item.id}    />
        )}
        </div>

    )
}


export default Products;