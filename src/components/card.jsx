import React from "react";
import { useStore } from "../stores.js"; // Correct path to store

export function Card({ product }) {
  const addToCart = useStore((state) => state.addToCart);

  // Guard clause in case product data isn't passed
  if (!product) return null;

  const handleAddToCart = () => {
    // Normalize image if necessary
    const itemToAdd = {
        ...product,
        image: product.img || product.image // Ensure image property exists
    };
    
    addToCart(itemToAdd);
    alert(`${product.name} added to cart! 🎉`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow max-w-sm mx-auto my-4">
      <img
        src={product.img || product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">
            ₦{product.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-black text-amber-400 border border-amber-400 px-6 py-2 rounded-sm font-serif tracking-wide hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;