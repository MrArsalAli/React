import { Link } from "react-router-dom";
import { useParams } from "react-router";


function ProductCard({ data }) {

  const { thumbnail, category, title, price, id } = data;

  return (
    <Link className="lg:w-1/4 md:w-1/2 p-4 w-full" to={`/product/${id}`}>
      <div className="bg-gray-400 rounded p-2">
        <img className="block relative h-48 rounded overflow-hidden object-cover object-center w-full h-full block bg-gray-500 rounded"
          alt="ecommerce"
          src={thumbnail}
        />
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${price}</p>
        </div>
      </div>
    </Link>
  )
}


export default ProductCard