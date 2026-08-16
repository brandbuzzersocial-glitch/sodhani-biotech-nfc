import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Droplets } from 'lucide-react';

export default function ProductCard({ product, onSelectQuote }) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span
          className="shade-badge"
          style={{ backgroundColor: product.shadeHex || 'var(--nd-green)' }}
        >
          {product.shade}
        </span>
      </div>

      <div className="product-card-body">
        <div className="product-source">{product.source}</div>
        <Link to={`/products/${product.slug}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>

        <div style={{ margin: '0.75rem 0', fontSize: '13px', color: '#556c86', borderTop: '1px dashed var(--nd-border-gray)', paddingTop: '0.5rem' }}>
          <div><strong>Form:</strong> {product.form}</div>
          <div><strong>Solubility:</strong> {product.solubility}</div>
          <div><strong>Spec:</strong> {product.purity}</div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--nd-border-gray)' }}>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--nd-navy)' }}>
            {product.priceNumber > 0 ? (
              <>
                {product.price} <span style={{ fontSize: '12px', fontWeight: 400, color: '#556c86' }}>/ Kg</span>
              </>
            ) : (
              <span style={{ color: 'var(--nd-green)', fontWeight: 600, fontSize: '14px' }}>Get Quote</span>
            )}
          </div>

          <button
            className="btn btn-success"
            style={{ padding: '5px 15px', fontSize: '14px' }}
            onClick={() => onSelectQuote(product)}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
