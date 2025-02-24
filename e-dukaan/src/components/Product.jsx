import React from "react";
import styles from "@/components/styles/home/product.module.css";
import Link from "next/link";
import Image from "next/image";

const Product = ({ product }) => {
  return (
    <div className={`${styles.card} bg-white m-2 p-2 rounded-lg shadow-lg`}>
      <Link href={"../store/products/" + product.id}>
        {/* <Link href={'/'}> */}
        <Image
          width={300}
          height={140}
          src={product.thumbnail}
          // src={
          //   "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
          // }
          alt={product.title}
          className={`${styles.productImage} w-full h-48 object-cover rounded-md`}
        />
      </Link>

      <div className="mt-4">
        <h3 className="text-sm min-h-[70px] font-semibold text-gray-800 line-clamp-2">
          {product.title}
          {/* Essence Mascara Lash Princess  Essence Mascara Lash Princess */}
        </h3>
        <p className="text-sm font-semibold text-gray-900">
          Rs. {product.price}
          {/* PKR. 499 */}
        </p>
        <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-all duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
