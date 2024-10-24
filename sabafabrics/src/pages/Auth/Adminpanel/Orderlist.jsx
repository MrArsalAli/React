import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase.js";
import Button from "../../../components/Button.jsx";

function Orderlist() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, "orders");
        const querySnapshot = await getDocs(ordersRef);

        const allOrders = [];

        querySnapshot.forEach((doc) => {
          const userOrders = doc.data().items;

          userOrders.forEach((order) => {
            allOrders.push({
              userId: doc.id,
              ...order,
            });
          });
        });

        setOrders(allOrders);
      } catch (error) {
        console.log("Error while Fetching==>", error);
      }
    };

    fetchOrders();
  }, [db]);

  const handleUpdateStatus = () => {
    prompt("Status");
  };

  return (
    <div className="p-8 mx-2 my-2">
      <h1 className="font-bold text-xl text-center">Orders</h1>
      {orders.map((order, index) => (
        <div key={index} className="flex p-2 border shadow rounded-lg">
          <div className="flex flex-start w-9/12 mx-8">
            <img
              className="h-20 w-28 rounded-none"
              src={order.order.map((data) => data.thumbnail)}
              alt=""
            />
            <span className="">
              <p className="text-lg">{order.order.map((data) => data.title)}</p>
              <p className="text-sm">
                Quantity : {order.order.map((data) => data.quantity)}
              </p>
              <p className="font-bold">
                PKR: {order.order.map((data) => data.price)}
              </p>
              <p className="">Status : {order.status}</p>
            </span>
          </div>
          <div className="flex flex-col  ">
            <div>
              <Button onClick={handleUpdateStatus} text={"Update Status"} />
            </div>
            {/* <div className="mt-1">
              <Button text={"Order Placed"} />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orderlist;
