


function AddAProduct(){
    return(
        <div className="flex shadow">
        {/* sidepanel */}
        <div className="flex flex-start flex-col w-1/5 bg-emerald-50">
          <div className="h-16 content-center mx-auto text-2xl">
            Admin
          </div>
          <div className="border p-4 font-bold shadow">
            <ProductOutlined className="mx-2 text-2xl" />
            Products
          </div>
          <div className="border p-4 font-bold shadow">
            <AppstoreAddOutlined className="mx-2 text-2xl" />
            Add A Product
          </div>
          <div className="border p-4 font-bold shadow">
            <TruckOutlined className="mx-2 text-2xl" />
            Order List
          </div>
          <div className="border p-4 font-bold shadow">
            <ShoppingCartOutlined className="mx-2 text-2xl" />
            Inventory
          </div>
        </div>
        {/* mainpanel */}
        <div className="flex flex-end w-4/5 border">
          <div className="container mx-auto p-6">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
              <div className="md:flex">
                <div className="w-full p-4 px-5 py-5">
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">
                      Add A Product
                    </h2>
                  </div>
                  <form id="uProducts">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="image"
                      >
                        Product Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="category"
                      >
                        Category Name
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="category"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Button text={"Add"} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default AddAProduct