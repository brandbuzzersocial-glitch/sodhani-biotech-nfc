import React from 'react';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      title: "Senior Food Biochemist — Natural Color Formulation",
      location: "Jaipur, Rajasthan (R&D Lab)",
      type: "Full Time",
      desc: "Lead R&D trials on anthocyanin stabilization, spray drying parameters, and food matrix compatibility."
    },
    {
      title: "Quality Assurance & Regulatory Manager (FSSAI/FDA)",
      location: "Jaipur Plant",
      type: "Full Time",
      desc: "Manage international food safety compliance filings, ISO 22000 audits, and HPLC batch testing documentation."
    },
    {
      title: "Global Technical Sales Engineer (Food Ingredients)",
      location: "Mumbai / Remote",
      type: "Full Time",
      desc: "Partner with industrial food manufacturers, FMCG brands, and beverage houses across Asia & Europe."
    }
  ];

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">JOIN OUR MISSION</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Careers at Sodhani Biotech</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Help us revolutionize the global food industry with honest, clean-label natural colors.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-image-wrap">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" alt="Team Collaboration" />
            </div>
            <div className="feature-content">
              <span className="eyebrow">OUR CULTURE</span>
              <h2>Innovation at the Intersection of Nature & Science</h2>
              <p>
                At Sodhani Biotech, we are united by a singular vision: to rid the global food supply chain of synthetic chemicals. Our team comprises passionate food biochemists, agronomists, and engineers who thrive in a fast-paced, research-driven environment.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-gold)' }}>✔</span> State-of-the-art R&D facilities
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-gold)' }}>✔</span> Cross-functional global exposure
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-gold)' }}>✔</span> Commitment to continuous learning
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-gold)' }}>✔</span> Purpose-driven sustainable impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">OPEN POSITIONS</span>
            <h2 className="section-heading">Join Our Growing Team</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {jobs.map((j, idx) => (
              <div key={idx} style={{ background: '#ffffff', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-gold)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {j.type}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                  {j.title}
                </h3>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} /> {j.location}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>{j.desc}</p>
                <a href="mailto:careers@sodhanibiotech.com" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
