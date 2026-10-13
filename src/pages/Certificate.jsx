import React from 'react';
import CertificateStrip from '../components/common/CertificateStrip';

export default function Certificate() {
  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">REGULATORY COMPLIANCE</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Quality & Safety Certifications</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Meeting global food safety, religious, and clean-label dietary standards across our portfolio of natural food color SKUs.
          </p>
        </div>
      </section>

      <CertificateStrip />
    </div>
  );
}
