import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ManifestoBand({ onOpenQuote }) {
  return (
    <section className="manifesto-band">
      <div className="container manifesto-inner">
        <span className="eyebrow eyebrow-light">REDEFINING FOOD COLOR STANDARDS</span>
        <h2 className="manifesto-heading">We are making natural food colors mainstream</h2>
        <p className="manifesto-body">
          We challenge the legacy monopoly of synthetic coal-tar colorants. Through cutting-edge biochemistry, food-grade solvent extraction, and precision spray-drying, Sodhani Biotech empowers food, beverage, confectionery, and dairy brands to deliver pure, clean-label colors that consumers trust.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-accent" onClick={onOpenQuote}>
            Partner With Our R&D Team <ArrowRight size={16} />
          </button>
          <Link to="/about-us" className="btn btn-outline-light">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
