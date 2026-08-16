import React from 'react';
import { TestTube, Zap, ShieldAlert, Award } from 'lucide-react';

export default function Infrastructure() {
  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">MANUFACTURING & R&D POWERHOUSE</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Infrastructure & Facilities</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            State-of-the-art botanical extraction plant, cleanroom drying towers, and 3 specialized analytical laboratories in Jaipur, India.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-image-wrap">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80" alt="Extraction Facilities" />
            </div>
            <div className="feature-content">
              <span className="eyebrow">HIGH-CAPACITY PLANT</span>
              <h2>Botanical Solvent Extraction & Spray Drying</h2>
              <p>
                Our 50,000 sq. ft. manufacturing facility houses automated counter-current extraction units, falling-film evaporators, and sanitary spray drying towers capable of producing over 1,500 Metric Tons of food-grade natural color powders annually.
              </p>
              <p>
                To ensure maximum pigment retention and thermal stability, our spray drying towers operate under strict low-temperature, vacuum-assisted conditions. This protects heat-sensitive compounds like Anthocyanins and Betalains, resulting in superior color vibrancy and extended shelf-life for your final application.
              </p>
            </div>
          </div>

          <div className="feature-row reverse" style={{ marginTop: '5rem' }}>
            <div className="feature-image-wrap">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80" alt="R&D Lab" />
            </div>
            <div className="feature-content">
              <span className="eyebrow">3 SPECIALIZED LABS</span>
              <h2>Analytical Chemistry & Quality Control</h2>
              <p>
                Quality is non-negotiable in food ingredients. Our three dedicated on-site laboratories (Analytical, Microbiological, and Applications) ensure that every batch meets stringent international standards.
              </p>
              <p>
                We are equipped with advanced High-Performance Liquid Chromatography (HPLC) to measure active pigment concentrations precisely, alongside Gas Chromatography-Mass Spectrometry (GC-MS) to screen for pesticide residues. Every batch undergoes rigorous microbial and heavy metal testing, ensuring complete food safety before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
