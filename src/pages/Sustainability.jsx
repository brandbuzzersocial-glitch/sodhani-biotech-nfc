import React from 'react';
import { Leaf, Recycle, Droplets, Sun } from 'lucide-react';
import StatGrid from '../components/common/StatGrid';

export default function Sustainability() {
  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">CIRCULAR ECONOMY & ZERO DISCHARGE</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Sustainability Commitments</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Transforming agricultural byproducts into clean food colors with zero liquid effluent discharge and eco-solvent extraction.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row" style={{ marginBottom: '4rem' }}>
            <div className="feature-content">
              <span className="eyebrow">ENVIRONMENTAL RESPONSIBILITY</span>
              <h2>Engineering Colors Without Compromising the Planet</h2>
              <p>
                As a biochemistry company, our operations inherently rely on the bounty of nature. We believe that extracting natural colors should not come at the cost of environmental degradation. Our Jaipur facility was designed from the ground up as a zero-liquid discharge plant, meaning not a single drop of effluent enters the local water table.
              </p>
              <p>
                By upcycling agricultural byproducts—like radish leaves and turmeric skins—we not only extract highly potent functional pigments but also provide an additional revenue stream to local farmers while preventing crop waste.
              </p>
            </div>
            <div className="feature-image-wrap">
              <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80" alt="Sustainable Agricultural Fields" />
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-icon"><Recycle size={26} /></div>
              <div className="stat-number">100%</div>
              <div className="stat-title">Zero Liquid Discharge (ETP)</div>
              <div className="stat-desc">All process water is recycled back into closed-loop plant cooling towers.</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon"><Leaf size={26} /></div>
              <div className="stat-number">85%</div>
              <div className="stat-title">Upcycled Botanical Sourcing</div>
              <div className="stat-desc">Raw materials sourced from agricultural byproduct streams, reducing crop waste.</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon"><Sun size={26} /></div>
              <div className="stat-number">40%</div>
              <div className="stat-title">Solar Energy Plant Operation</div>
              <div className="stat-desc">Partially powered by on-site rooftop solar panels in sunny Jaipur, Rajasthan.</div>
            </div>
          </div>
        </div>
      </section>

      <StatGrid />
    </div>
  );
}
