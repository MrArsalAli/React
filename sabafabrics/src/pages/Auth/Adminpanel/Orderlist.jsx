import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext.jsx"
import OrderCard from "../../../components/OrderCard.jsx";

function Orderlist() {

  const { cartItems } = useContext(CartContext)
  return (
    <div className="p-8 mx-2 my-2">
      <h1 className="font-bold text-xl text-center">Orders</h1>
      {cartItems.map((data) => (
        <OrderCard />
      ))}
      
    </div>
  );
}

export default Orderlist;
