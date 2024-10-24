import CartCard from "../components/CartCard";
import Button from "../components/Button.jsx";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { AuthContext } from "../Context/AuthContext.jsx";
import { useNavigate } from "react-router";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./utils/firebase.js";

function Cart() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const handleFirestore = async (cartItems, userId) => {
    try {
      const userOrdersRef = doc(db, "orders", userId);
      const docSnap = await getDoc(userOrdersRef);
      if (docSnap.exists()) {
        await updateDoc(userOrdersRef, {
          items: arrayUnion({
            order: cartItems,
            status: "Pending",
          }),
        });
        console.log("updated");
        navigate("/")
      } else {
        await setDoc(userOrdersRef, {
          items: [
            {
              order: cartItems,
              status: "Pending",
            },
          ],
        });
        console.log("New order recieved");
        navigate("/")
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleWhatsappMsg = () => {
    const number = "923402196848";
    const msg = cartItems
      .map(
        (data) =>
          `Order : ${data.title} , PKR:${data.price} , Quantity : ${data.quantity}`
      )
      .join("\n");
    const urlEncodedMessage = encodeURIComponent(msg);
    const whatsappLink = `https://wa.me/${number}?text=${urlEncodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

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
            onClick={() => {
              if (currentUser) {
                // handleWhatsappMsg();
                handleFirestore(cartItems, currentUser.uid);
              } else {
                navigate("/signup");
              }
            }}
            text={"Checkout To Proceed"}
            disabled={cartItems.length === 0}
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
