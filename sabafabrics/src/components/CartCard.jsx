import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

function CartCard() {
  return (
    <div className="flex container mx-auto h-56 w-screen mt-14 bg-gray-50 shadow">
      <div className="w-1/5">
        <img
          className="h-44 w-60 mx-auto my-6 rounded-lg"
          src="https://images.unsplash.com/photo-1634640265085-13a2a1e7c4e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljc3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="w-4/5">
        <h2 className="font-bold text-lg mx-4 mt-12">title</h2>
        <p className="mx-4 my-4">Price :</p>
        <div className="flex mx-4">
          <PlusCircleOutlined className="text-3xl cursor-pointer icon" />
          <p className="mx-8"> Quantity </p>
          <MinusCircleOutlined className="text-3xl cursor-pointer icon" />
          <DeleteOutlined className="mx-4 text-3xl cursor-pointer icon" />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
