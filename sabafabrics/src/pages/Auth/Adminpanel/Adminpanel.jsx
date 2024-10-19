import {
  AppstoreAddOutlined,
  DeleteOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import Button from "../../../components/Button.jsx";

function Adminpanel() {
  return (
    <>
      <div className="flex shadow h-screen">
        {/* sidepanel */}
        <div className="flex flex-start flex-col w-1/5 bg-emerald-50">
          <div className="h-16 content-center mx-auto text-2xl">Admin</div>
          <div className="border p-4 font-bold shadow">
            <ProductOutlined className="mx-2 text-2xl" />
            Existing Products
          </div>
          <div className="border p-4 font-bold shadow">
            <AppstoreAddOutlined className="mx-2 text-2xl" />
            Add A Product
          </div>
          <div className="border p-4 font-bold shadow">
            <TruckOutlined className="mx-2 text-2xl" />
            Order List
          </div>
        </div>
        {/* mainpanel */}
        <div className="flex flex-col flex-end w-4/5 border ">
          <div className="p-8 mx-2 my-2">
            <h1 className="font-bold text-xl text-center">Products</h1>
            <div className="flex p-2 border shadow rounded-lg">
              <div className="flex flex-col mx-8 justify-center">
                <p className="text-lg">1. Brown Self Stripes Wool Rich</p>
                <p className="font-bold">PKR:8100</p>
              </div>
              <div className="mx-8">
                <img
                  className="h-20 w-20 border rounded-lg border-black"
                  src=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminpanel;
