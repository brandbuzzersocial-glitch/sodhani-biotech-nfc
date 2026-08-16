import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function CategoryPage({ onOpenQuote }) {
  const { categorySlug } = useParams();

  const categoryObj = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[1];
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === categorySlug);

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">PRODUCT LINE CATEGORY</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>
            {categoryObj.name}
          </h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Showing {categoryProducts.length} high-purity SKUs under this color technology line.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} onSelectQuote={onOpenQuote} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
