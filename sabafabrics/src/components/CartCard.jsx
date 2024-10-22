import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartCard() {
  const { cartItems, addCartItem, removeCartItem, lessQuantityFromCart } =
    useContext(CartContext);

  return (
    <>
      {cartItems.map((data) => (
        <div
          key={data.id}
          className="flex container mx-auto h-56 w-screen mt-14 bg-gray-50 shadow"
        >
          <div className="w-1/5">
            <img
              className="h-44 w-60 mx-auto my-6 rounded-lg"
              src={data.thumbnail}
              alt=""
            />
          </div>
          <div className="w-4/5">
            <h2 className="font-bold text-lg mx-4 mt-12">{data.title}</h2>
            <p className="mx-4 my-4">Price : {data.price}</p>
            <div className="flex mx-4">
              <PlusCircleOutlined
                onClick={() => addCartItem(data)}
                className="text-3xl cursor-pointer icon"
              />
              <p className="mx-8 text-2xl"> {data.quantity} </p>
              <MinusCircleOutlined
                disabled={data.quantity === 1}
                onClick={() => lessQuantityFromCart(data.id)}
                className="text-3xl cursor-pointer icon"
              />
              <DeleteOutlined
                onClick={() => removeCartItem(data.id)}
                className="mx-4 text-3xl cursor-pointer icon"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartCard;
