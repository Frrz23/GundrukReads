import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border p-4 rounded-lg shadow-md">
        <img
          src={product.cover}
          alt={product.title}
          className="w-full h-[28rem] object-cover mb-4 transform transition-transform duration-500 hover:translate-y-[-10px] hover:scale-105"
        />
        <h2 className="text-lg font-medium">{product.title}</h2>
        <p className="text-gray-500">Rs. {product.price}</p>
        <Link
          to={`/product-view/${product.number}`}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 no-underline"
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default ProductCard;