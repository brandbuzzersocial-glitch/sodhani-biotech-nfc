import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="fologo">
            <Link to="/" className="logo-lockup" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <img src="/logo8-03.png" alt="Sodhani Biotech Logo" style={{ height: '256px', objectFit: 'contain' }} />
            </Link>
            <p style={{ marginTop: '0.75rem', lineHeight: 1.6, fontSize: '15px', color: 'var(--nd-navy)' }}>
              We at Sodhani Biotech are passionately exploring the Natural way of Life — reinventing natural food colors for industrial applications and empowering global food brands with clean-label solutions.
            </p>
          </div>

          {/* Col 2: About Us */}
          <div>
            <h4>About Us</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/about-us">Our Story</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/team">Our Team</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/infrastructure">Infrastructure</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/certificate">Certification</Link></li>
            </ul>
          </div>

          {/* Col 3: Product */}
          <div>
            <h4>Product</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/products">All 19 Food SKUs</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/products/natural-food-color-extracts">Natural Food Color Extracts</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/products/natural-food-colors">Natural Food Colors</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/products/microbial-food-colors">Microbial Food Colors</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/sustainability">Sustainability</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/food-lab">Workshop</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/blogs">Blogs</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/careers">Careers</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Sodhani Biotech Pvt. Ltd. All Rights Reserved. | Natural Food Colors Division.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
