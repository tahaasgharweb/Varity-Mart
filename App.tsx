
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import StoreInfoSection from './components/StoreInfoSection';
import AIChatBot from './components/AIChatBot';
import { PRODUCTS, STORE_DETAILS } from './constants';
import { Category, CartItem, Product } from './types';

const CATEGORIES: Category[] = ['All', 'Groceries', 'Snacks & Drinks', 'Ice Cream', 'Personal Care', 'Stationery'];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Smooth scroll to top when toggling views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProduct]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           (p.hindiName && p.hindiName.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
      />

      <main className="flex-1">
        {selectedProduct ? (
          <div className="animate-fade-in">
            <ProductDetail 
              product={selectedProduct} 
              onBack={() => setSelectedProduct(null)}
              onAddToCart={addToCart}
            />
          </div>
        ) : (
          <div className="animate-fade-in">
            {/* Hero / Banner */}
            <section className="bg-green-700 text-white py-12 md:py-20 relative overflow-hidden">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div className="max-w-xl text-center md:text-left animate-slide-up">
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
                    Variety Mart <br />
                    <span className="text-yellow-400">Yaha Sab Milega!</span>
                  </h2>
                  <p className="text-xl opacity-90 mb-10 font-medium">
                    Jamshedpur's premier grocery experience. Quality, Freshness, and unmatched Discounts at your fingertips.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {/* Dark Glass Badges */}
                    <div className="bg-black/30 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl">
                      <span className="font-black text-yellow-400 block text-lg">FREE</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/90">Home Delivery</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl">
                      <span className="font-black text-yellow-400 block text-lg">5.0 ⭐</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/90">Top Quality</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="font-black text-yellow-400 block text-lg uppercase tracking-tight">Open Now</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">7 AM - 11 PM</span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block relative animate-slide-up [animation-delay:200ms]">
                  <div className="w-[450px] h-[450px] bg-green-600 rounded-[3rem] flex items-center justify-center p-8 border-4 border-green-500/30 shadow-2xl rotate-3">
                    <img 
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                      alt="Grocery Basket" 
                      className="rounded-[2rem] transform -rotate-3 shadow-2xl h-full w-full object-cover border-8 border-white"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 glass text-green-900 font-black px-8 py-5 rounded-[2rem] shadow-2xl transform -rotate-6 scale-110">
                    <span className="text-xs uppercase block text-green-700 mb-1">Limited Offer</span>
                    <span className="text-3xl">UP TO 30% OFF</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600 rounded-full blur-[120px] opacity-40 -mr-64 -mt-64"></div>
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-800 rounded-full blur-[140px] opacity-40 -ml-72 -mb-72"></div>
            </section>

            {/* Product Browser */}
            <section className="container mx-auto px-4 py-16 animate-slide-up [animation-delay:300ms]">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">Shop by Category</h2>
                  <p className="text-gray-400 font-medium">Fresh stock added every morning</p>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 rounded-2xl text-sm font-black whitespace-nowrap transition-all border-2 ${
                        activeCategory === cat 
                          ? 'bg-green-700 text-white border-green-700 shadow-xl shadow-green-100 scale-105' 
                          : 'bg-white text-gray-500 border-gray-100 hover:border-green-200 hover:text-green-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                  {filteredProducts.map(p => (
                    <ProductCard 
                      key={p.id} 
                      product={p} 
                      onAddToCart={addToCart} 
                      onSelect={(prod) => setSelectedProduct(prod)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-4 border-dashed border-gray-100">
                  <div className="text-7xl mb-6">🏜️</div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">Item not found</h3>
                  <p className="text-gray-400 font-medium max-w-xs mx-auto">We couldn't find anything matching your search. Try another brand?</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                    className="mt-8 bg-green-700 text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-800 transition-all shadow-lg shadow-green-100"
                  >View All Products</button>
                </div>
              )}
            </section>

            {/* Store Information */}
            <StoreInfoSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-20 pb-10 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              <span className="text-4xl">🛒</span> {STORE_DETAILS.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              The heart of Jugsalai's community. We bring the mart to your doorstep with love and quality since years.
            </p>
            <div className="flex items-center gap-3 text-yellow-400 font-black text-xl">
              <span>5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-green-500">Fast Links</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><button onClick={() => {setSelectedProduct(null); setActiveCategory('Groceries');}} className="hover:text-white transition-all text-left">Daily Groceries</button></li>
              <li><button onClick={() => {setSelectedProduct(null); setActiveCategory('Snacks & Drinks');}} className="hover:text-white transition-all text-left">Snacks & Beverages</button></li>
              <li><button onClick={() => {setSelectedProduct(null); setActiveCategory('Ice Cream');}} className="hover:text-white transition-all text-left">Frozen Treats</button></li>
              <li><button onClick={() => {setSelectedProduct(null); setActiveCategory('Personal Care');}} className="hover:text-white transition-all text-left">Self Care</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-green-500">Support</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><a href="#" className="hover:text-white transition-all">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-all">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-all">Privacy Hub</a></li>
              <li><a href="#" className="hover:text-white transition-all">Merchant Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-green-500">Contact</h4>
            <div className="space-y-6">
              <a 
                href={`https://wa.me/${STORE_DETAILS.phone.replace(/[^0-9]/g, '')}`} 
                className="flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-[1.5rem] font-black transition-all shadow-xl shadow-green-900/20 w-fit"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp Us</span>
              </a>
              <p className="text-gray-600 text-xs font-bold leading-relaxed">
                Free delivery on orders above ₹500 in Jugsalai area. <br /> Open from {STORE_DETAILS.hours}.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-20 pt-10 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} {STORE_DETAILS.name} Jamshedpur • Built for the neighborhood.
          </p>
        </div>
      </footer>

      {/* Overlays */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />

      <AIChatBot cart={cart} />
    </div>
  );
};

export default App;
