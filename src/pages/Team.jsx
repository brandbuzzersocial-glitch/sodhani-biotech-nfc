import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: "Pradeep Sodhani",
      role: "Managing Director & Founder",
      bio: "Visionary behind Sodhani Biotech's expansion from botanical dyes to world-class food color extracts.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Ananya Sharma",
      role: "Head of Food Biochemistry & R&D",
      bio: "Ph.D. in Food Biotechnology. Specializes in Anthocyanin thermal stabilization and micro-encapsulation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rajesh Varma",
      role: "Vice President — Global Food Supply",
      bio: "Oversees food-grade manufacturing compliance, export logistics, and international FSSAI/FDA filings.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kavita Rao",
      role: "Lead Application Scientist (Beverage & Bakery)",
      bio: "Works directly with FMCG clients to develop custom shade matrixes and run pH stability trials.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">LEADERSHIP & SCIENTISTS</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Our Team</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Meet the food biochemists, extraction engineers, and regulatory leaders behind Sodhani Biotech.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div className="responsive-grid-4">
            {teamMembers.map((m, idx) => (
              <div key={idx} className="product-card">
                <div className="product-card-img" style={{ height: '260px' }}>
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="product-card-body">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>{m.name}</h3>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-accent-gold)', marginBottom: '0.75rem' }}>{m.role}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
