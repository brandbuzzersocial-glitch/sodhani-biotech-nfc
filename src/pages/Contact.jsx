import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Contact({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: PRODUCTS[0].name,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', product: PRODUCTS[0].name, message: '' });
    }, 4000);
  };

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">GET IN TOUCH</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Contact Sodhani Biotech</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Reach out to our food color extraction experts for wholesale pricing, factory sample packs, or technical support.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            {/* Contact Details */}
            <div>
              <span className="eyebrow">HEADQUARTERS & EXTRACTION PLANT</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
                Sodhani Biotech Pvt. Ltd.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-bg-linen)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Factory & Lab Address</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                      RIICO Industrial Area, Sitapura, Jaipur, Rajasthan 302022, India
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-bg-linen)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Wholesale & Sales Desk</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                      +91 141 277 0000 / +91 98290 12345
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-bg-linen)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Email Enquiries</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                      foodcolors@sodhanibiotech.com
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'var(--color-bg-linen)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Live B2B Catalog Listing</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  Prefer IndiaMART trade platform? Access our verified wholesale store profile directly.
                </p>
                <a
                  href="https://www.indiamart.com/sodhanibiotech/natural-food-colors.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: '100%', textAlign: 'center' }}
                >
                  Open IndiaMART Wholesale Store <ExternalLink size={14} style={{ display: 'inline', marginLeft: '4px' }} />
                </a>
              </div>

              <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-subtle)' }}>
                <h4 style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>What to Expect</h4>
                <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                  <li>Sample dispatch within 48 hours</li>
                  <li>Technical TDS/MSDS provided upfront</li>
                  <li>Direct consultation with a Food Scientist</li>
                  <li>MOQ flexibility for trial production runs</li>
                </ul>
              </div>
            </div>

            {/* Direct Form */}
            <div style={{ background: 'var(--color-bg-warm)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
                Send Direct Message
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={56} style={{ color: 'var(--color-primary-mid)', margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Message Sent Successfully!</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                    Our sales team will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Corporate Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested Product SKU</label>
                    <select
                      className="form-control"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Inquiry Details</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Tell us about your formulation requirements or sample request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
