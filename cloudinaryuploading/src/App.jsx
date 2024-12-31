import { useState } from "react";
import "./App.css";

function App() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "learning_cloudinary");
    data.append("cloud_name", "dl4kqxuyk");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dl4kqxuyk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedImageURL = await res.json();
    console.log("uploadedImageURL==>", uploadedImageURL);
  };
  return (
    <>
      <h1 className="text-2xl font-bold font-mono text-center">
        Learning to Use Cloudinary
      </h1>
      <div className="flex justify-center border border-black p-8 container mx-auto">
        <input type="file" onChange={handleUpload}></input>
      </div>
    </>
  );
}

export default App;
