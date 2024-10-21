import Button from "../../../components/Button";

function Orderlist() {
  return (
    <div className="p-8 mx-2 my-2">
      <h1 className="font-bold text-xl text-center">Orders</h1>
      <div className="flex p-2 border shadow rounded-lg">
        <div className="mx-8">
          <img
            className="h-20 w-28 rounded-none"
            src="https://images.pexels.com/photos/6276050/pexels-photo-6276050.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg">
            {"1."} {"Brown Self Stripes Wool Rich"}
          </p>
          <p className="font-bold">PKR:{"8100"}</p>
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
    </div>
  );
}

export default Orderlist;
