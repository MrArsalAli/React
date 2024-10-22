import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../Context/CartContext";

function OrderCard() {
  const { cartItems } = useContext(CartContext)
  const { thumbnail, price, title } = cartItems[0]
    
  return (
    <div key={cartItems.id} className="flex p-2 border shadow rounded-lg">
      <div className="mx-8">
        <img
          className="h-20 w-28 rounded-none"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg">
          {title}
        </p>
        <p className="font-bold">PKR: {price}</p>
        <p className="">Status : {""}</p>
      </div>
      <div className="flex flex-col mx-16 ">
        <div>
          <Button text={"Update Status"} />
        </div>
        <div className="mt-1">
          <Button text={"Order Placed"} />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
