import { useState } from "react";
import Button from "../../../components/Button";
import { getStorage, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";

function AddAProduct() {
  const [productImage, setProductImage] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!productImage) return alert("Upload An Image")


      const imgRef = ref(storage, productImage.name)
    uploadBytes(imgRef, productInfo.productImage)
        .then(() => {
            console.log("File Uploaded");
            getDownloadURL(imgRef).then((url) => {
                console.log("URL");
                productInfo.productImage = url;
                const uProdductsCollection = collection(db, "uProducts", )
                addDoc(uProdductsCollection, productInfo).then((doc) => {
                    console.log("Document Added");
                    window.location.href = "../profile/index.html"
                }).catch(() => { })
            }).catch(() => { })
        }).catch(() => { })
  };


  return (
    <>
      <div className="container mx-auto p-6">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full p-4 px-5 py-5">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">
                  Add A Product
                </h2>
              </div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="image"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImage}
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
                    Title
                  </label>
                  <input
                    type="text"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
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
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    id="price"
                    name="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Button onClick={handleSubmit} text={"Add"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAProduct;























{
  /* <div className="mb-4">
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
                  </div> */
}
