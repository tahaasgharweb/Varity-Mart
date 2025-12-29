
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onSelect: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onSelect }) => {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div 
      onClick={() => onSelect(product)}
      className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 group flex flex-col h-full cursor-pointer hover:-translate-y-2 active:scale-95"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 border-b border-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-lg z-10 transform -rotate-2">
            {discount}% OFF
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1">
          <h3 className="text-sm font-black text-gray-900 line-clamp-1 group-hover:text-green-700 transition-colors uppercase tracking-tight">{product.name}</h3>
          {product.hindiName && (
            <span className="devanagari text-[10px] text-gray-400 block leading-tight font-medium mt-0.5">{product.hindiName}</span>
          )}
        </div>
        <p className="text-[10px] text-gray-400 font-bold mb-4 bg-gray-50 w-fit px-2 py-0.5 rounded-md border border-gray-100">{product.unit}</p>
        
        <div className="mt-auto pt-2 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-black text-gray-900 tracking-tighter">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-[10px] text-gray-300 line-through font-bold">₹{product.originalPrice}</span>
            )}
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-green-600 text-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-green-700 active:scale-90 transition-all flex items-center gap-1.5 shadow-lg shadow-green-100"
          >
            <span>ADD</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
