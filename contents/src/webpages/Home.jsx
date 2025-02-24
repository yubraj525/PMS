import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Productcard from "../components/Productcard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://6793cac55eae7e5c4d8fe77f.mockapi.io/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />

      <div className="product-container">
        {products.map((product) => (
          <Productcard
            key={product.id}
            image={product.image}
            name={product.name}
            descripton={product.descripton}
            price={product.cost}
          />
        ))}
      </div>

      <div>Home</div>
    </>
  );
};

export default Home;
