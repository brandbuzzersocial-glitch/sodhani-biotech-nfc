import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Tag, Droplets, Package, ExternalLink, Send } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function ProductDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  return (
    <div>
      {/* Breadcrumb Bar */}
      <div style={{ backgroundColor: 'var(--color-bg-warm)', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
            <ArrowLeft size={16} /> Back to All 19 Products
          </Link>
        </div>
      </div>

      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            {/* Image & Shade Swatch */}
            <div className="feature-image-wrap" style={{ height: '420px' }}>
              <img src={product.image} alt={product.name} />
              <span
                className="shade-badge"
                style={{ backgroundColor: product.shadeHex || 'var(--color-primary-dark)', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
              >
                Shade: {product.shade}
              </span>
            </div>

            {/* Product Meta & Specs */}
            <div className="feature-content">
              <span className="eyebrow">{product.category}</span>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                {product.name}
              </h1>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-accent-gold)', marginBottom: '1.25rem' }}>
                Source: {product.source}
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Price Callout */}
              <div style={{ background: 'var(--color-bg-linen)', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                    Wholesale B2B Rate (IndiaMART)
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                    {product.priceNumber > 0 ? product.price : 'Quote on Request'}
                  </div>
                </div>

                <button className="btn btn-primary" onClick={() => onOpenQuote(product)}>
                  Request Factory Quote <Send size={16} />
                </button>
              </div>

              {/* Specifications Table */}
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                Technical Product Specifications
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', marginBottom: '2rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.6rem 0', fontWeight: 700, color: 'var(--color-primary-mid)', width: '40%' }}>Form / Physical State</td>
                    <td style={{ padding: '0.6rem 0', color: 'var(--color-text-main)' }}>{product.form}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.6rem 0', fontWeight: 700, color: 'var(--color-primary-mid)' }}>Active Purity / Spec</td>
                    <td style={{ padding: '0.6rem 0', color: 'var(--color-text-main)' }}>{product.spec}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.6rem 0', fontWeight: 700, color: 'var(--color-primary-mid)' }}>Solubility Matrix</td>
                    <td style={{ padding: '0.6rem 0', color: 'var(--color-text-main)' }}>{product.solubility}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.6rem 0', fontWeight: 700, color: 'var(--color-primary-mid)' }}>Regulatory E-Number / Code</td>
                    <td style={{ padding: '0.6rem 0', color: 'var(--color-text-main)' }}>{product.eNumber}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.6rem 0', fontWeight: 700, color: 'var(--color-primary-mid)' }}>Standard Packaging</td>
                    <td style={{ padding: '0.6rem 0', color: 'var(--color-text-main)' }}>{product.packaging}</td>
                  </tr>
                </tbody>
              </table>

              {/* Verified Listing Note */}
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-accent-gold)' }} />
                <span>Verified IndiaMART Catalog Listing SKU. Manufactured in Jaipur, India.</span>
                <a href="https://www.indiamart.com/sodhanibiotech/natural-food-colors.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-dark)', fontWeight: 700, marginLeft: 'auto' }}>
                  View Live Listing ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
