import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import QuoteModal from './components/common/QuoteModal';
import { LanguageProvider } from './context/LanguageContext';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Infrastructure from './pages/Infrastructure';
import Certificate from './pages/Certificate';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Sustainability from './pages/Sustainability';
import FoodLab from './pages/FoodLab';
import { Blogs, BlogDetail } from './pages/Blogs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Scroll to top wrapper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);

  const handleOpenQuote = (product = null) => {
    setSelectedProductForQuote(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  return (
    <LanguageProvider>
      <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header onOpenQuote={() => handleOpenQuote()} />

        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/about-us" element={<AboutUs onOpenQuote={handleOpenQuote} />} />
            <Route path="/team" element={<Team />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/certificate" element={<Certificate />} />
            
            {/* Products Routing */}
            <Route path="/products" element={<Products onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/natural-food-color-extracts" element={<CategoryPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/natural-food-colors" element={<CategoryPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/microbial-food-colors" element={<CategoryPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products/:slug" element={<ProductDetail onOpenQuote={handleOpenQuote} />} />

            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/food-lab" element={<FoodLab onOpenQuote={handleOpenQuote} />} />
            <Route path="/application-workshop" element={<FoodLab onOpenQuote={handleOpenQuote} />} />
            
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        <Footer />

        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuote}
          selectedProduct={selectedProductForQuote}
        />
      </div>
    </Router>
    </LanguageProvider>
  );
}
