// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";

// const AddProducts = () => {
//   const [productImage, setProductImage] = useState("");
//   const [productName, setProductName] = useState("");
//   const [productDes, setProductDes] = useState("");
//   const [productCost, setProductCost] = useState("");

//   const addProducts = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://6793cac55eae7e5c4d8fe77f.mockapi.io/products",
//         {
//           name: productName,
//           description: productDes, // Fixed typo
//           cost: productCost,
//           image: productImage,
//         }
//       );

//       console.log(response);

//       // Reset form fields
//       setProductImage("");
//       setProductName("");
//       setProductDes("");
//       setProductCost("");

//       // Reset the form itself
//       e.target.reset();
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="form-container">
//         <form onSubmit={addProducts}>
//           <label>Product Name</label>
//           <input
//             type="text"
//             name="id"
//             placeholder="Enter Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />

//           <label>Product Description</label>
//           <textarea
//             name="description"
//             placeholder="Enter Product Description"
//             value={productDes}
//             onChange={(e) => setProductDes(e.target.value)}
//           ></textarea>

//           <label>Product Price</label>
//           <input
//             type="number"
//             name="price"
//             placeholder="Enter Product Price"
//             value={productCost}
//             onChange={(e) => setProductCost(e.target.value)}
//           />

//           <label>Product Image</label>
//           <input
//             type="text"
//             name="image"
//             placeholder="Enter image link here"
//             value={productImage}
//             onChange={(e) => setProductImage(e.target.value)}
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddProducts;



import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

const AddProducts = () => {
  const addProducts = async (e) => {
    e.preventDefault();

    // Use e.currentTarget to get the form reference
    const formData = new FormData(e.currentTarget);

    // Log the formData for debugging
    console.log(...formData);
    const data=Object.fromEntries(formData);
    console.log(data);
    const response= await axios.post("https://6793cac55eae7e5c4d8fe77f.mockapi.io/products",data);
    console.log(response.data);
  }

  return (
    <>
      <Navbar />
      <div className="form-container">
        <form onSubmit={addProducts}>
          <label>Product Name</label>
          <input type="text" name="name" placeholder="Enter Product Name" />

          <label>Product Description</label>
          <textarea name="descripton" placeholder="Enter Product Description"></textarea>

          <label>Product Price</label>
          <input type="number" name="cost" placeholder="Enter Product Price" />

          <label>Product Image</label>
          <input type="file" name="image" accept="image/*" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
