import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Tag, 
  Droplets, 
  Package, 
  ExternalLink, 
  Send, 
  FileText, 
  Globe2, 
  Sparkles, 
  Layers, 
  Award, 
  Check, 
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/common/ProductCard';

export default function ProductDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'regulatory', 'features', 'applications', 'why-choose'

  // Related products from the same category or other categories
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug && (p.categorySlug === product.categorySlug || p.shade === product.shade)).slice(0, 3);
  const fallbackRelated = relatedProducts.length < 3 
    ? [...relatedProducts, ...PRODUCTS.filter(p => p.slug !== product.slug && !relatedProducts.includes(p))].slice(0, 3) 
    : relatedProducts;

  // Regulatory entries formatting
  const regulatoryEntries = product.regulatory ? Object.entries(product.regulatory) : [];
  const technicalSpecsEntries = product.technicalSpecs ? Object.entries(product.technicalSpecs) : [];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Breadcrumb Bar */}
      <div style={{ backgroundColor: 'var(--color-bg-linen)', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
              <ArrowLeft size={16} /> All Products ({PRODUCTS.length} SKUs)
            </Link>
            <ChevronRight size={14} />
            <Link to={`/products/${product.categorySlug}`} style={{ color: 'var(--color-primary-dark)', fontWeight: 500 }}>
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>{product.name}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
            <ShieldCheck size={16} style={{ color: '#27ae60' }} />
            <span>Updated Technical Specification Sheet</span>
          </div>
        </div>
      </div>

      {/* Hero Product Overview Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="feature-row" style={{ alignItems: 'flex-start', gap: '50px', marginBottom: 0 }}>
            {/* Left: Product Image & Badges */}
            <div style={{ flex: '1', minWidth: '320px', maxWidth: '480px' }}>
              <div 
                className="feature-image-wrap" 
                style={{ 
                  height: '420px', 
                  position: 'relative', 
                  backgroundColor: '#f8fafc',
                  border: '1px solid var(--color-border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                
                {/* Shade Badge */}
                <div
                  style={{ 
                    position: 'absolute', 
                    top: '16px', 
                    left: '16px',
                    backgroundColor: product.shadeHex || 'var(--color-primary-dark)', 
                    color: '#ffffff',
                    fontSize: '0.85rem', 
                    fontWeight: 700,
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffffff' }}></span>
                  Shade: {product.shade}
                </div>

                {/* Grade Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--color-primary-dark)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  {product.technicalSpecs?.Grade || '100% Food Grade'}
                </div>
              </div>

              {/* Quick Spec Highlights Card */}
              <div style={{ marginTop: '1.25rem', background: 'var(--color-bg-linen)', borderRadius: '12px', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  At A Glance
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.88rem' }}>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem' }}>Form</span>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>{product.form}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem' }}>Solubility</span>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>{product.solubility}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem' }}>Strength / Spec</span>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>{product.spec}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem' }}>CAS / Reg. Code</span>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>{product.casNo && product.casNo !== 'Refer to COA*' ? product.casNo : product.eNumber}</strong>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px dashed #d0dce8', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#2e7d32', fontWeight: 600 }}>
                  <Award size={16} /> Certified Quality: COA, TDS & SDS Available
                </div>
              </div>
            </div>

            {/* Right: Product Details, Overview & Pricing */}
            <div style={{ flex: '1.4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="eyebrow" style={{ margin: 0 }}>{product.category}</span>
                {product.coloringComponent && (
                  <span style={{ fontSize: '0.78rem', background: 'rgba(41, 65, 94, 0.08)', color: 'var(--color-primary-dark)', padding: '2px 10px', borderRadius: '12px', fontWeight: 600 }}>
                    Active: {product.coloringComponent}
                  </span>
                )}
              </div>

              <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                {product.name}
              </h1>

              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-accent-gold)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span>Source: {product.source}</span>
                {product.origin && (
                  <>
                    <span style={{ color: 'var(--color-border)' }}>•</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>Origin: {product.origin}</span>
                  </>
                )}
              </div>

              {/* Product Overview Narrative */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                  Product Overview
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', lineHeight: 1.75, margin: 0 }}>
                  {product.description}
                </p>
              </div>

              {/* B2B Price & Factory Quote Box */}
              <div 
                style={{ 
                  background: 'linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)', 
                  padding: '1.5rem 1.75rem', 
                  borderRadius: '16px', 
                  marginBottom: '2rem', 
                  border: '1px solid var(--color-border)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1.25rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                    Wholesale B2B Rate (Factory Direct)
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)', lineHeight: 1.2, margin: '4px 0' }}>
                    {product.priceNumber > 0 ? product.price : 'Quote on Request'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    Standard Packaging: <strong>{product.packaging}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => onOpenQuote(product)}
                    style={{ padding: '12px 24px', fontSize: '1rem', fontWeight: 700 }}
                  >
                    Request Factory Quote <Send size={16} />
                  </button>
                </div>
              </div>

              {/* Verified Quality & Sourcing Badge */}
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', background: '#fdfdfd', border: '1px solid var(--color-border)', borderRadius: '10px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }} />
                <span>Manufactured by Sodhani Biotech Pvt. Ltd., Jaipur, Rajasthan, India. Technical specifications verified per official product dossier.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Navigation */}
      <section style={{ backgroundColor: 'var(--color-bg-linen)', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: '105px', zIndex: 90 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0', scrollbarWidth: 'none' }}>
            <button
              onClick={() => setActiveTab('specs')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: 'none',
                backgroundColor: activeTab === 'specs' ? 'var(--color-primary-dark)' : 'transparent',
                color: activeTab === 'specs' ? '#ffffff' : 'var(--color-text-main)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} /> Technical Specifications
            </button>

            <button
              onClick={() => setActiveTab('regulatory')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: 'none',
                backgroundColor: activeTab === 'regulatory' ? 'var(--color-primary-dark)' : 'transparent',
                color: activeTab === 'regulatory' ? '#ffffff' : 'var(--color-text-main)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Globe2 size={16} /> Regulatory & Approvals
            </button>

            <button
              onClick={() => setActiveTab('features')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: 'none',
                backgroundColor: activeTab === 'features' ? 'var(--color-primary-dark)' : 'transparent',
                color: activeTab === 'features' ? '#ffffff' : 'var(--color-text-main)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={16} /> Key Features
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: 'none',
                backgroundColor: activeTab === 'applications' ? 'var(--color-primary-dark)' : 'transparent',
                color: activeTab === 'applications' ? '#ffffff' : 'var(--color-text-main)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Layers size={16} /> Food Applications
            </button>

            <button
              onClick={() => setActiveTab('why-choose')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: 'none',
                backgroundColor: activeTab === 'why-choose' ? 'var(--color-primary-dark)' : 'transparent',
                color: activeTab === 'why-choose' ? '#ffffff' : 'var(--color-text-main)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Award size={16} /> Why Choose {product.name.split('–')[0].split('(')[0].trim()}?
            </button>
          </div>
        </div>
      </section>

      {/* Main Tabbed Details Area */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* TAB 1: TECHNICAL SPECIFICATIONS */}
          {activeTab === 'specs' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow">LABORATORY SPECIFICATION SHEET</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                  Technical Product Specifications
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px' }}>
                  Standardized physical, chemical, and microbiological specifications for {product.name}. Manufactured under strict food-grade quality management systems with batch COA verification.
                </p>
              </div>

              <div style={{ border: '1px solid var(--color-border)', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff' }}>
                      <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, width: '35%' }}>Technical Parameter</th>
                      <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700 }}>Certified Value / Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecsEntries.map(([param, val], idx) => (
                      <tr 
                        key={param} 
                        style={{ 
                          backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fcfdfe',
                          borderBottom: '1px solid var(--color-border)'
                        }}
                      >
                        <td style={{ padding: '14px 20px', fontWeight: 700, color: 'var(--color-primary-dark)', verticalAlign: 'top' }}>
                          {param}
                        </td>
                        <td style={{ padding: '14px 20px', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                          {val || 'Available on COA'}
                        </td>
                      </tr>
                    ))}
                    {product.packaging && !technicalSpecsEntries.some(([k]) => k.toLowerCase().includes('packaging')) && (
                      <tr style={{ backgroundColor: technicalSpecsEntries.length % 2 === 0 ? '#ffffff' : '#fcfdfe', borderBottom: '1px solid var(--color-border)' }}>
                        <td style={{ padding: '14px 20px', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Standard Packaging</td>
                        <td style={{ padding: '14px 20px', color: 'var(--color-text-main)' }}>{product.packaging}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Technical Documentation Box */}
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', background: 'var(--color-bg-linen)', borderRadius: '12px', border: '1px solid var(--color-border)', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FileText size={32} style={{ color: 'var(--color-accent-gold)' }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                      Need Full Technical Dossier & Batch Certificate of Analysis?
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                      We provide lot-specific COA, Technical Data Sheet (TDS), and Safety Data Sheet (SDS) for all food applications.
                    </p>
                  </div>
                </div>

                <button className="btn btn-outline-dark" onClick={() => onOpenQuote(product)}>
                  Request COA / TDS Dossier
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: REGULATORY & APPROVALS */}
          {activeTab === 'regulatory' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow">GLOBAL COMPLIANCE MATRIX</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                  Regulatory & Approval Details
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '800px' }}>
                  Regulatory approval status across international jurisdictions for {product.name}. Summary based on current public statutory texts.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {regulatoryEntries.map(([jurisdiction, details]) => (
                  <div 
                    key={jurisdiction}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--color-border)',
                      borderRadius: '14px',
                      padding: '1.5rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      <Globe2 size={18} style={{ color: 'var(--color-accent-gold)' }} />
                      <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                        {jurisdiction}
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-main)', lineHeight: 1.65 }}>
                      {details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Regulatory Advisory Note from Document */}
              <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', backgroundColor: 'rgba(228, 182, 61, 0.12)', borderLeft: '4px solid var(--color-accent-gold)', borderRadius: '8px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                  Regulatory Advisory Notice
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-primary-dark)', lineHeight: 1.6 }}>
                  Status is a summary of official public sources and may vary by specific application grade, purity level, or evolving regional statutes. Please confirm compliance against current official texts and your batch COA with a qualified regulatory advisor before formulating.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KEY FEATURES */}
          {activeTab === 'features' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow">FORMULATION ADVANTAGES</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                  Key Features of {product.name}
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px' }}>
                  Engineered for stability, clarity, and clean-label distinction across modern food processing environments.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {product.features && product.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-primary-dark)'
                    }}
                  >
                    <div style={{ fontSize: '1.4rem', lineHeight: 1 }}>
                      {feature.slice(0, 2)}
                    </div>
                    <div style={{ lineHeight: 1.5 }}>
                      {feature.slice(2).trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: APPLICATIONS */}
          {activeTab === 'applications' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow">TARGET MATRICES & FORMULATIONS</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                  Recommended Food & Beverage Applications
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px' }}>
                  {product.name} is rigorously tested for solubility, hue fastness, and compatibility across these key food and beverage matrices:
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                {product.applications && product.applications.map((app, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'var(--color-bg-linen)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: '#27ae60', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-primary-dark)', lineHeight: 1.5 }}>
                      {app}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-primary-dark)', fontSize: '1.05rem', fontWeight: 700 }}>
                  Need Custom Formulation or Pilot Testing?
                </h4>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                  Our in-house Food Application Lab tests pH stability, lightfastness, and thermal endurance for your exact recipe.
                </p>
                <Link to="/food-lab" className="btn btn-outline-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Explore Our Food Lab Workshop <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 5: WHY CHOOSE */}
          {activeTab === 'why-choose' && (
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow">SODHANI BIOTECH VALUE PROPOSITION</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                  Why Choose {product.name}?
                </h2>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '750px' }}>
                  Key technical and commercial differentiators that make this SKU the preferred natural colorant for product developers.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {product.whyChoose && product.whyChoose.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--color-border)',
                      borderRadius: '14px',
                      padding: '1.75rem',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                      borderTop: '4px solid var(--color-primary-dark)'
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-gold)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Advantage {idx + 1}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.75rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Formulate with {product.name}?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#d0ddd4', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Request technical product samples, batch COA/TDS, custom concentration formulations, or bulk commercial pricing directly from our manufacturing facility.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-warning" onClick={() => onOpenQuote(product)} style={{ padding: '12px 28px', fontSize: '1rem' }}>
              Request Sample & Factory Quote <Send size={16} />
            </button>
            <Link to="/contact" className="btn btn-outline-light" style={{ padding: '12px 28px', fontSize: '1rem' }}>
              Contact Technical Specialists
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div>
              <span className="eyebrow">EXPLORE CATALOG</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', margin: 0 }}>
                Related Natural Food Colors
              </h3>
            </div>
            <Link to="/products" className="btn btn-outline-dark">
              View All {PRODUCTS.length} SKUs
            </Link>
          </div>

          <div className="product-grid">
            {fallbackRelated.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} onSelectQuote={onOpenQuote} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
