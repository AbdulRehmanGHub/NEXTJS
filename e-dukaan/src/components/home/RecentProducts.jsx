// // for RecentProducts, I used the simple React client side rendering and api fetching method. We will use the Next method in FeaturedProducts

"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Product from "../Product";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=5");
    const data = await response.json();
    // console.log(data.products);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div name={"recent"} className="bg-gray-200 p-4">
      <Container>
        <h1 className="text-center text-3xl font-semibold mb-4">
          Recently Added Products
        </h1>

        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {products.map((prod) => {
            return <Product key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default RecentProducts;
