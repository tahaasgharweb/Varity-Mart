
import React from 'react';
import { STORE_DETAILS } from '../constants';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onSearch }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Custom Logo based on provided image */}
          <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center border border-green-100 shadow-sm">
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M2 3h3.5l1 13h13l1.5-8h-13" />
              <circle cx="8" cy="20" r="1.5" fill="currentColor" />
              <circle cx="17" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </div>
          
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl font-bold font-poppins text-red-600 tracking-tight leading-none">
              {STORE_DETAILS.name}
            </h1>
            <span className="text-sm md:text-base font-kalam text-green-600 font-bold mt-0.5 hidden sm:block self-end">
              Yaha Sab Milega
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-md relative hidden md:block">
          <input
            type="text"
            placeholder="Search for groceries, snacks, and more..."
            className="w-full px-5 py-2.5 bg-gray-100 border border-transparent rounded-xl focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-sm"
            onChange={(e) => onSearch(e.target.value)}
          />
          <svg className="w-5 h-5 absolute right-4 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onCartClick}
            className="relative p-2.5 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all"
            aria-label="View shopping cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-green-500 focus:outline-none transition-all text-sm"
            onChange={(e) => onSearch(e.target.value)}
          />
          <svg className="w-4 h-4 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
