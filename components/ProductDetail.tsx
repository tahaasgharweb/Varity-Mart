
import React, { useEffect } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (p: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="bg-white min-h-screen animate-fade-in pb-20">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-green-700 transition-all mb-8 font-bold group bg-gray-50 px-4 py-2 rounded-full w-fit border border-gray-100"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO MART
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image Section */}
          <div className="animate-slide-up sticky top-24">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-gray-50 shadow-2xl shadow-gray-200 border border-gray-100 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {discount > 0 && (
                <div className="absolute top-8 left-8 bg-red-600 text-white font-black px-5 py-2.5 rounded-2xl shadow-xl transform -rotate-2 scale-110">
                  SAVE {discount}%
                </div>
              )}
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 hidden md:grid">
               {[1,2,3].map(i => (
                 <div key={i} className="aspect-square rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                    <img src={product.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="thumb" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col animate-slide-up [animation-delay:100ms] fill-mode-forwards opacity-0">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-black mb-6 uppercase tracking-widest border border-green-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {product.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-3 leading-[1.1]">
                {product.name}
              </h1>
              {product.hindiName && (
                <span className="devanagari text-2xl text-gray-400 block mb-4 font-medium">{product.hindiName}</span>
              )}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-sm font-bold border border-gray-200">
                  {product.unit}
                </span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] mb-10 border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-5xl font-black text-gray-900 tracking-tight">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-300 line-through decoration-red-400/30">₹{product.originalPrice}</span>
                  )}
                </div>
                <p className="text-green-600 text-sm font-bold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Guaranteed Best Price in Jamshedpur
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <svg className="w-24 h-24 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.607a1 1 0 01-.226 1.396l-.867.65a1 1 0 11-1.192-1.604l.867-.65a1 1 0 011.412.208zM14.116 6.607a1 1 0 00.226 1.396l.867.65a1 1 0 001.192-1.604l-.867-.65a1 1 0 00-1.412.208zM4.623 11.57a1 1 0 00-1.23-.706l-1.031.325a1 1 0 10.602 1.908l1.03-.325a1 1 0 00.629-1.203zM14.146 11.325a1 1 0 011.23-.706l1.031.325a1 1 0 11-.602 1.908l-1.03-.325a1 1 0 01-.629-1.203zM7.025 14.404a1 1 0 00-1.414.202l-.645.856a1 1 0 001.602 1.206l.645-.856a1 1 0 00-.193-1.408zM12.975 14.404a1 1 0 011.414.202l.645.856a1 1 0 11-1.602 1.206l-.645-.856a1 1 0 01.193-1.408zM10 11a1 1 0 100-2 1 1 0 000 2z" /></svg>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-black text-gray-900 mb-4 border-l-4 border-green-600 pl-4 uppercase tracking-tighter">About this item</h3>
              <p className="text-gray-600 leading-relaxed text-xl font-medium">
                {product.description}
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Quality Assured</p>
                    <p className="text-sm text-gray-400">Strictly inspected for freshness</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Same-Day Delivery</p>
                    <p className="text-sm text-gray-400">Order before 8 PM for lightning speed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-6 mt-auto">
              <div className="flex flex-col sm:flex-row gap-4 glass p-4 rounded-3xl shadow-2xl shadow-green-200 border border-green-100">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="flex-[2] bg-green-700 text-white px-8 py-6 rounded-2xl font-black text-xl hover:bg-green-800 active:scale-[0.98] transition-all shadow-xl shadow-green-200 flex items-center justify-center gap-4 group"
                >
                  <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  ADD TO BASKET
                </button>
                
                <div className="flex-1 bg-white/50 border border-white p-4 rounded-2xl flex items-center gap-4 group/delivery">
                  <span className="text-3xl group-hover/delivery:scale-125 transition-transform">🚀</span>
                  <div>
                    <p className="text-xs font-black text-green-800 uppercase tracking-tighter">Instant Delivery</p>
                    <p className="text-[10px] text-gray-500 font-bold">Within 45 Mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
