
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryThreshold = 500;
  const isFreeDelivery = total >= deliveryThreshold;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-4 border-b flex items-center justify-between bg-green-700 text-white">
          <h2 className="text-lg font-bold">Your Basket ({items.length})</h2>
          <button onClick={onClose} className="p-1 hover:bg-green-800 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <span className="text-5xl mb-4">🛒</span>
              <p>Your cart is empty</p>
              <button onClick={onClose} className="mt-4 text-green-700 font-semibold underline">Start Shopping</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 bg-gray-50 p-2 rounded-lg border border-gray-100">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.unit} • ₹{item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border rounded bg-white overflow-hidden">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 hover:bg-gray-100 text-green-700 font-bold"
                      >-</button>
                      <span className="px-2 text-xs font-bold min-w-[24px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 hover:bg-gray-100 text-green-700 font-bold"
                      >+</button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-[10px] text-red-500 uppercase font-bold"
                    >Remove</button>
                  </div>
                </div>
                <div className="text-sm font-bold text-gray-700">₹{item.price * item.quantity}</div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="mb-3">
              {!isFreeDelivery ? (
                <div className="bg-yellow-100 text-yellow-800 text-[10px] p-2 rounded text-center">
                  Add ₹{deliveryThreshold - total} more for <b>FREE delivery</b>
                </div>
              ) : (
                <div className="bg-green-100 text-green-800 text-[10px] p-2 rounded text-center flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Congratulations! You qualify for <b>FREE Delivery</b>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-xl font-bold">₹{total}</span>
            </div>

            <button className="w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-colors shadow-lg shadow-green-200">
              Proceed to Checkout
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-3">
              By checking out, you agree to our Terms of Service.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
