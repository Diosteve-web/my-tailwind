import React from "react";
import { Link } from "react-router-dom";
// Assuming this file is in src/components/stores/, we go up two levels to src/stores.js
import { useStore } from "../../stores.js"; 

export default function CartPage() {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const getTotal = useStore((state) => state.getTotal);
  
  const total = getTotal();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-3xl font-serif mb-4 text-amber-400">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8">Discover our exclusive collection</p>
          <Link 
            to="/" 
            className="inline-block bg-zinc-800 text-amber-400 border border-amber-400 px-8 py-3 rounded-sm font-serif hover:bg-amber-400 hover:text-black transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center mb-8 border-b border-amber-400/30 pb-6">
          <h1 className="text-4xl font-serif text-amber-400">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-400 hover:text-red-300 underline font-serif text-sm"
          >
            Clear Cart
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-zinc-900/50 border border-zinc-800 rounded-sm p-4 flex gap-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover border border-zinc-700"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-serif text-white">{item.name}</h3>
                    <p className="text-amber-400 font-light">₦{item.price.toLocaleString()}</p>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 bg-black border border-zinc-700 px-2 py-1 rounded-sm">
                        <button onClick={() => decreaseQuantity(item.id)} className="text-gray-400 hover:text-white px-2">-</button>
                        <span className="text-white w-4 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="text-gray-400 hover:text-white px-2">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:text-red-400 uppercase tracking-widest">
                        Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-amber-400/20 p-6 sticky top-28">
              <h2 className="text-xl font-serif text-white mb-6">Order Summary</h2>
              <div className="flex justify-between text-gray-400 mb-2">
                <span>Subtotal ({totalItems} items)</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400 mb-6">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-zinc-700 pt-4 flex justify-between text-xl text-amber-400 font-serif mb-6">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-amber-400 text-black py-3 font-serif uppercase tracking-widest hover:bg-white transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}