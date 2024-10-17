import CartCard from "../components/CartCard";
import Button from "../components/Button.jsx";

function Cart() {
  return (
    <>
      <div className="text-center h-24 content-center mt-4 text-4xl protest-strike-regular bg-emerald-50">
        Cart
      </div>
      <CartCard />
      <div className="flex container mx-auto h-30 w-screen mt-14 border shadow ">
        <div className="w-1/3 px-10 py-1 my-8 text-2xl "> Total Quantity :</div>
        <div className="w-1/3 px-10 py-1 my-8 text-2xl "> Total Amount :</div>
        <div className="w-1/3 px-16  my-8 ">
          <Button text={"Checkout To Proceed"} />
        </div>
      </div>
    </>
  );
}

export default Cart;
