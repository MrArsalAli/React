
function Adminpanelmain() {
  return (
    <>
      
      <div className="p-8 mx-2 my-2">
        <h1 className="font-bold text-xl text-center">Products</h1>
        <div className="flex p-2 border shadow rounded-lg">
          <div className="flex flex-col mx-8 justify-center">
            <p className="text-lg">1. Brown Self Stripes Wool Rich</p>
            <p className="font-bold">PKR:8100</p>
          </div>
          <div className="mx-8">
            <img
              className="h-20 w-28 rounded-none" 
              src="https://images.pexels.com/photos/6276062/pexels-photo-6276062.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminpanelmain;
