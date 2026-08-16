import React, { useState } from 'react';
import { TestTube, Sliders, CheckCircle2, ArrowRight, Beaker, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function FoodLab({ onOpenQuote }) {
  // Interactive Simulator State
  const [selectedMatrix, setSelectedMatrix] = useState('Beverage (Acidic pH 3.2)');
  const [selectedPigment, setSelectedPigment] = useState(PRODUCTS[0]);
  const [dosePercentage, setDosePercentage] = useState(0.2);

  const matrices = [
    'Beverage (Acidic pH 3.2)',
    'Bakery Dough (Oven 180°C)',
    'Dairy Yogurt (pH 4.5)',
    'Confectionery Gummy (High Brix)',
    'Plant Meat Patty (Neutral pH 6.8)'
  ];

  return (
    <div>
      {/* Subpage Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">CO-DEVELOPMENT & FORMULATION TESTING</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>
            "Color It Yourself" Food Application Lab
          </h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Collaborate directly with Sodhani Biotech food chemists. Sample application, test thermal & pH stability, and co-develop custom pantone shades.
          </p>
        </div>
      </section>

      {/* Interactive Color Matrix Simulator */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow"><Beaker size={14} style={{ display: 'inline', marginRight: 6 }} /> INTERACTIVE LAB SIMULATOR</span>
            <h2 className="section-heading">Preview Color Performance Across Food Matrices</h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              Select a botanical pigment SKU and target food system to observe predicted shade hue, pH fastness, and recommended dosing.
            </p>
          </div>

          <div
            className="feature-row"
            style={{
              background: 'var(--color-bg-linen)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem',
              border: '1px solid var(--color-border)'
            }}
          >
            {/* Controls */}
            <div>
              <div className="form-group">
                <label className="form-label">1. Select Target Food Matrix</label>
                <select
                  className="form-control"
                  value={selectedMatrix}
                  onChange={(e) => setSelectedMatrix(e.target.value)}
                >
                  {matrices.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">2. Select Botanical Color SKU</label>
                <select
                  className="form-control"
                  value={selectedPigment.id}
                  onChange={(e) => {
                    const found = PRODUCTS.find((p) => p.id === e.target.value);
                    if (found) setSelectedPigment(found);
                  }}
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>{p.name} ({p.shade})</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  3. Dosage Concentration (% w/w): <strong style={{ color: 'var(--color-primary-dark)' }}>{dosePercentage}%</strong>
                </label>
                <input
                  type="range"
                  min="0.05"
                  max="1.0"
                  step="0.05"
                  value={dosePercentage}
                  onChange={(e) => setDosePercentage(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-primary-dark)' }}
                />
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button className="btn btn-primary" onClick={() => onOpenQuote(selectedPigment)}>
                  Request Lab Trial Sample (1 Kg) <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Output Visualizer */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-elevated)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Predicted Matrix Color Output
              </div>

              {/* Color Swatch Circle */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  backgroundColor: selectedPigment.shadeHex || 'var(--color-primary-dark)',
                  opacity: Math.min(0.4 + dosePercentage * 0.7, 1),
                  margin: '0 auto 1.5rem',
                  boxShadow: `0 10px 30px ${selectedPigment.shadeHex}66`,
                  border: '4px solid #ffffff',
                  transition: 'all 0.3s ease'
                }}
              />

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>
                {selectedPigment.shade} Hue output
              </h3>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-accent-gold)', fontWeight: 700, marginBottom: '1rem' }}>
                System: {selectedMatrix}
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6, textAlign: 'left', background: 'var(--color-bg-linen)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div><strong>Solubility:</strong> {selectedPigment.solubility}</div>
                <div><strong>Heat Fastness:</strong> Excellent (up to 200°C)</div>
                <div><strong>Active Pigment Spec:</strong> {selectedPigment.spec}</div>
                <div><strong>Regulatory Status:</strong> FSSAI / FDA / EU Clean-Label Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Booking Info */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div className="lab-banner">
            <div className="lab-banner-content">
              <span className="eyebrow">LAB VISIT & CO-DEVELOPMENT</span>
              <h3>Book a Custom Formulation Session</h3>
              <p style={{ marginBottom: '1rem', color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Every food matrix interacts differently with natural pigments. Send your base food formulation to our Jaipur R&D laboratory, or schedule an interactive virtual trial session with our Senior Food Scientists.
              </p>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>Our 3-Step Process:</strong><br />
                1. <strong>Matrix Analysis:</strong> We analyze your product's pH, Brix, and thermal processing limits.<br />
                2. <strong>Shade Matching:</strong> We blend primary botanical extracts to hit your exact Pantone/Hex target.<br />
                3. <strong>Stability Testing:</strong> We run accelerated shelf-life and UV stress tests to guarantee performance.
              </p>
              <button className="btn btn-primary" onClick={() => onOpenQuote()} style={{ alignSelf: 'flex-start' }}>
                Schedule R&D Session <Sparkles size={16} />
              </button>
            </div>
            <div className="lab-banner-image">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                alt="Food Lab Facility"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
