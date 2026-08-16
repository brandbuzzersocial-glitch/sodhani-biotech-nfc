import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export default function QuoteModal({ isOpen, onClose, selectedProduct = null }) {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '25 Kg Drum',
    application: 'Beverages',
    company: '',
    name: '',
    email: '',
    phone: '',
    country: 'India',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, productName: selectedProduct.name }));
    } else {
      setFormData(prev => ({ ...prev, productName: PRODUCTS[0].name }));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle2 size={64} style={{ color: 'var(--color-primary-mid)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              Quote Inquiry Received!
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              Thank you for contacting Sodhani Biotech. Our food science team will review your application parameters and send a technical specification sheet and wholesale pricing proposal within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="eyebrow">Direct Factory B2B Inquiry</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-dark)', lineHeight: 1.2 }}>
                Request Wholesale Quote & Sample
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginTop: '0.25rem' }}>
                Direct supply from Sodhani Biotech extraction plant. MOQ: 1 Kg foil pack.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Select Product SKU</label>
                <select
                  className="form-control"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  required
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.shade})
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Required Quantity</label>
                  <select
                    className="form-control"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="Sample Pack (1 Kg)">Sample Pack (1 Kg)</option>
                    <option value="Trial Batch (5-25 Kg)">Trial Batch (5-25 Kg)</option>
                    <option value="Commercial Batch (100+ Kg)">Commercial Batch (100+ Kg)</option>
                    <option value="Annual Supply Contract">Annual Supply Contract</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Application</label>
                  <select
                    className="form-control"
                    value={formData.application}
                    onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                  >
                    <option value="Beverages">Beverages</option>
                    <option value="Bakery">Bakery & Pastry</option>
                    <option value="Confectionery">Confectionery & Sweets</option>
                    <option value="Dairy">Dairy & Desserts</option>
                    <option value="Sauces & Snacks">Sauces & Seasonings</option>
                    <option value="Meat & Alt-Protein">Meat & Alt-Protein</option>
                    <option value="Nutraceuticals">Nutraceuticals</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company / Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apex Foods Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="formulations@apexfoods.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Formulation Notes / Special Specs</label>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Specify target pH, heat processing temperature, solubility requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Submit Request for Quote <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
