import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATES } from '../../data/blogs';

export default function CertificateStrip() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="eyebrow">Certified Food Safety & Compliance</span>
          <h2 className="section-heading" style={{ fontSize: '2rem' }}>Global Food-Grade Standards & Approvals</h2>
        </div>

        <div className="certificate-strip">
          {CERTIFICATES.map((cert) => (
            <div key={cert.id} className="cert-badge">
              <CheckCircle2 size={18} />
              <div>
                <div>{cert.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                  {cert.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
