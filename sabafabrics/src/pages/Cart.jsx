import CartCard from "../components/CartCard";
import Button from "../components/Button.jsx";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  console.log(cartItems.length);

  const totalAmount = cartItems.reduce(
    (total, obj) => total + obj.quantity * obj.price,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, obj) => total + obj.quantity,
    0
  );

  return (
    <>
      <div className="text-center h-24 content-center mt-4 text-4xl protest-strike-regular bg-emerald-50">
        Cart
      </div>
      <CartCard />
      <div className="flex container mx-auto h-30 w-screen mt-14 border shadow ">
        <div className="w-1/3 px-10 py-1 my-8 text-2xl ">
          {" "}
          Total Quantity : {totalQuantity}
        </div>
        <div className="w-1/3 px-10 py-1 my-8 text-2xl ">
          {" "}
          Total Amount : {Math.round(totalAmount)}
        </div>
        <div className="w-1/3 px-16  my-8 ">
          <Button
            onClick={() => navigate("/checkout")}
            text={"Checkout To Proceed"}
            disabled={cartItems.length === 0}
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
