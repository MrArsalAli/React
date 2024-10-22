import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "./Button.jsx";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  MinusCircleOutlined,
  PlusCircleOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { CartContext } from "../Context/CartContext.jsx";

function ProductDetail() {
  const { id } = useParams();
  const { cartItems, addCartItem, lessQuantityFromCart, isItemAdded } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const { thumbnail, title, price } = products;
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover bg-emerald-50 object-center rounded"
              src={thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-2xl my-36 title-font font-medium mb-1">
                {title}
              </h1>
              <div className="font-bold content-center text-gray-900">
                PKR : {price}
              </div>
              <div className="flex mb-4"></div>

              <div className="flex justify-center mt-16">
                {/* Commented for Now  */}
                {/* <div className="flex mx-4">
                <PlusCircleOutlined onClick={() => addCartItem(data)} className="text-2xl text-emerald-400 cursor-pointer" />
                <p className="mx-4 text-2xl"> Quantity </p>
                <MinusCircleOutlined onClick={() => lessQuantityFromCart(data.id)} className="text-2xl text-emerald-400 cursor-pointer" />
              </div> */}
                <div className="w-1/2 mx-auto">
                  <Button
                    onClick={() => addCartItem(products)}
                    text={
                      isItemAdded(products.id)
                        ? `Added(${isItemAdded(products.id).quantity})`
                        : `Add To Cart`
                    }
                  />
                </div>
              </div>
              <div className="flex my-4 h-12 w-full">
                <FacebookFilled className="text-2xl mx-2 text-gray-900" />
                <TwitterOutlined className="text-2xl mx-2 text-gray-900" />
                <InstagramOutlined className="text-2xl mx-2 text-gray-900" />
                <LinkedinFilled className="text-2xl mx-2 text-gray-900" />
                <YoutubeFilled className="text-2xl mx-2 text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
