import { useContext } from "react";
import Button from "./Button";
import { CartContext } from "../Context/CartContext";

function OrderCard({ order, index }) {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div key={index} className="flex p-2 border shadow rounded-lg">
        <div className="flex flex-start w-9/12 mx-8">
          <img className="h-20 w-28 rounded-none" src={data.thumbnail} alt="" />
          <span className="">
            <p className="text-lg">{data.title}</p>
            <p className="text-sm">Quantity : {data.quantity}</p>
            <p className="font-bold">PKR: {data.price}</p>
            <p className="">Status : {order.status}</p>
          </span>
        </div>
        <div className="flex flex-col  ">
          <div>
            <Button text={"Update Status"} />
          </div>
          <div className="mt-1">
              <Button text={"Order Placed"} />
            </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
