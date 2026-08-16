import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage, WORLD_LANGUAGES } from '../../context/LanguageContext';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentLang, changeLanguage } = useLanguage();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ position: 'fixed', width: '100%', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      {/* Top Sister-Brand Connector Banner */}
      <div className="sister-bar">
        <span>Part of Sodhani Biotech. Looking for textile & fabric dyes?</span>
        <a href="https://naturaldyes.io/" target="_blank" rel="noopener noreferrer">
          Visit Natural Dyes for Fabrics (naturaldyes.io) ↗
        </a>
      </div>

      {/* Main Navbar — 1:1 match to naturaldyes.io header */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid menublock">
          {/* Brand Logo */}
          <Link className="navbar-brand" to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/logo8-03.png" alt="Sodhani Biotech Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain', transform: 'scale(2)', transformOrigin: 'center left' }} />
          </Link>

          {/* Desktop Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">
                  Home
                </Link>
              </li>

              {/* About Us Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${isActive('/about-us') || isActive('/team') || isActive('/infrastructure') || isActive('/certificate') ? 'active' : ''}`}
                  to="/about-us"
                >
                  About Us <ChevronDown size={12} style={{ display: 'inline', marginLeft: 2 }} />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/about-us">Our Story</Link></li>
                  <li><Link className="dropdown-item" to="/team">Our Team</Link></li>
                  <li><Link className="dropdown-item" to="/infrastructure">Infrastructure</Link></li>
                  <li><Link className="dropdown-item" to="/certificate">Certification</Link></li>
                </ul>
              </li>

              {/* Product Link */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}
                  to="/products"
                >
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive('/sustainability') ? 'active' : ''}`} to="/sustainability">
                  Sustainability
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive('/food-lab') ? 'active' : ''}`} to="/food-lab">
                  Workshop
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive('/blogs') ? 'active' : ''}`} to="/blogs">
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive('/careers') ? 'active' : ''}`} to="/careers">
                  Careers
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Multi-Language Bar */}
          <div className="langblock" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* World Language Dropdown */}
            <div className="world-lang-dropdown" style={{ position: 'relative' }}>
              <select
                value={currentLang}
                onChange={(e) => changeLanguage(e.target.value)}
                aria-label="Select Language"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '6px 12px',
                  borderRadius: '12px',
                  border: '1px solid #DAE6EE',
                  background: '#F5F5F5',
                  color: '#29415E',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="en">🌍 Select Language...</option>
                {WORLD_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Hidden Google Translate container element */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
