import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import CertificateStrip from '../components/common/CertificateStrip';

export default function AboutUs({ onOpenQuote }) {
  return (
    <div>
      {/* Subpage Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">OUR STORY & HERITAGE</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>
            Pioneering Pure Biochemistry in Natural Food Colors
          </h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Sodhani Biotech Pvt. Ltd. is a global pioneer dedicated to replacing synthetic food colorants with sustainable, high-purity botanical and fermentation-derived color extracts.
          </p>
        </div>
      </section>

      {/* Corporate Narrative Block */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                alt="Sodhani Biotech R&D Laboratory"
              />
            </div>

            <div className="feature-content">
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Pioneers in Clean-Label Color Chemistry</h2>
              <p>
                Founded in Jaipur, India, Sodhani Biotech has spent over two decades researching the complex biochemistry of natural pigments. Recognizing the global movement toward clean-label food and beverage ingredients, our food science division developed industrial extraction methods capable of commercializing botanical pigments at scale without compromising stability or vibrance.
              </p>
              <p>
                Today, our manufacturing facilities house 3 advanced analytical & extraction laboratories, state-of-the-art spray drying towers, and zero-liquid-discharge (ETP) environmental systems. We don't just extract colors; we engineer functional color solutions tailored to survive high-heat baking, acidic beverage matrices, and extended shelf-life requirements.
              </p>
            </div>
          </div>

          <div className="feature-row reverse" style={{ marginTop: '5rem' }}>
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80"
                alt="Global Export Logistics"
              />
            </div>

            <div className="feature-content">
              <span className="eyebrow">GLOBAL FOOTPRINT</span>
              <h2>Trusted by Food Manufacturers in 25+ Countries</h2>
              <p>
                From boutique artisan bakeries in Europe to massive beverage conglomerates in North America, Sodhani Biotech is the trusted supply chain partner for clean-label transition. We maintain rigorous compliance with FSSAI, FDA, and EU regulatory frameworks.
              </p>
              <p>
                Our dedicated export division ensures seamless international logistics, providing full documentation including COAs, MSDS, and Kosher/Halal certifications with every batch shipped from our Jaipur extraction plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillar Mission Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">HOW & WHY WE DO IT</span>
            <h2 className="section-heading">Built on Three Pillars of Food Safety</h2>
          </div>

          <div className="responsive-grid-3">
            <div className="stat-card">
              <div className="stat-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="stat-title">
                100% Food-Grade Solvents
              </h3>
              <p className="stat-desc">
                We exclusively utilize eco-friendly aqueous and bio-ethanol extraction techniques, eliminating toxic chemical solvents and ensuring zero residual chemicals in your finished food product.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="stat-title">
                Precision HPLC Standardization
              </h3>
              <p className="stat-desc">
                Every production batch is tested via High-Performance Liquid Chromatography (HPLC) to guarantee exact active pigment percentage (e.g. 95% Curcumin, 4% Betanin) and shade consistency.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Award size={24} />
              </div>
              <h3 className="stat-title">
                Circular Agricultural Sourcing
              </h3>
              <p className="stat-desc">
                We partner with local organic farming cooperatives for Turmeric, Beetroot, Radish, and Gardenia crops, turning agricultural botanical byproducts into high-value food colorants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CertificateStrip />

      {/* CTA Footer */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-heading section-heading-light">Ready to Reformulate for Clean Label Success?</h2>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto 2rem' }}>
            Request technical sample packs or discuss custom shade development with our food formulation scientists.
          </p>
          <button className="btn btn-accent" onClick={onOpenQuote}>
            Request Technical Quote <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
