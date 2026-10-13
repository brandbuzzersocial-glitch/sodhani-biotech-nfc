import React, { useState } from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function Products({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShade, setSelectedShade] = useState('all');

  const shades = ['all', 'Yellow', 'Red', 'Blue', 'Orange', 'Green', 'Purple', 'Black'];

  const filteredProducts = PRODUCTS.filter((product) => {
    // Category Filter
    let matchesCategory = true;
    if (activeCategory === 'extracts') {
      matchesCategory = product.categorySlug === 'natural-food-color-extracts';
    } else if (activeCategory === 'colors') {
      matchesCategory = product.categorySlug === 'natural-food-colors';
    } else if (activeCategory === 'microbial') {
      matchesCategory = product.categorySlug === 'microbial-food-colors';
    }

    // Search Query Filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.coloringComponent && product.coloringComponent.toLowerCase().includes(searchQuery.toLowerCase()));

    // Shade Filter
    let matchesShade = true;
    if (selectedShade !== 'all') {
      matchesShade = product.shade.toLowerCase().includes(selectedShade.toLowerCase());
    }

    return matchesCategory && matchesSearch && matchesShade;
  });

  return (
    <div>
      {/* Subpage Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">TECHNICAL SPECIFICATION CATALOG</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>
            Natural Food Colors Product Catalog
          </h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Explore our complete line of {PRODUCTS.length} food-grade botanical & fermentation-derived color SKUs. Standardized purity, water solubility, and clean-label compliance.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          {/* Filter Bar */}
          <div className="product-filter-bar">
            {/* Category Tabs */}
            <div className="filter-categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="search-box">
              <Search size={18} style={{ color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search SKU by name, shade, source..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Shade Quick Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
              Filter by Shade:
            </span>
            {shades.map((shade) => (
              <button
                key={shade}
                onClick={() => setSelectedShade(shade)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  border: '1px solid var(--color-border)',
                  backgroundColor: selectedShade === shade ? 'var(--color-primary-dark)' : '#ffffff',
                  color: selectedShade === shade ? '#ffffff' : 'var(--color-text-main)',
                  cursor: 'pointer'
                }}
              >
                {shade === 'all' ? 'All Shades' : shade}
              </button>
            ))}

            {(searchQuery || selectedShade !== 'all' || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setSelectedShade('all');
                }}
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-accent-gold)',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  marginLeft: 'auto'
                }}
              >
                <RefreshCw size={12} /> Reset Filters
              </button>
            )}
          </div>

          {/* Product Grid (19 SKUs) */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onSelectQuote={onOpenQuote} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h3>No products found matching your search.</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Try resetting your shade or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
