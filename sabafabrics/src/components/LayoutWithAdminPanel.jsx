import { Outlet, useNavigate } from "react-router";
import { ProductOutlined, AppstoreAddOutlined, TruckOutlined} from "@ant-design/icons";




function LayoutWithAdminPanel(){
  const navigate = useNavigate()
    return(
        <>
        <div className="flex shadow h-screen">
      <div className="flex flex-start flex-col w-1/5 bg-emerald-50">
        <div className="h-16 content-center mx-auto text-2xl">Admin</div>
        <div
        onClick={() => navigate('/adminpanelmain')}
        className="border p-4 font-bold shadow cursor-pointer">
          <ProductOutlined className="mx-2 text-2xl" />
          Existing Products
        </div>
        <div
        onClick={() => navigate('/addaproduct')}
        className="border p-4 font-bold shadow cursor-pointer">
          <AppstoreAddOutlined className="mx-2 text-2xl" />
          Add A Product
        </div>
        <div
        onClick={() => navigate('/orderlist')}
        className="border p-4 font-bold shadow cursor-pointer">
          <TruckOutlined className="mx-2 text-2xl" />
          Order List
        </div>
      </div>
      <div className="flex flex-col flex-end w-4/5 border ">
      <Outlet />
      </div>
    </div>
        </>
    )
}



export default LayoutWithAdminPanel;