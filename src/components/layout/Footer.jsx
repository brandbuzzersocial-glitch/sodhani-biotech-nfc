import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#ffffff', paddingTop: '20px', overflow: 'hidden' }}>
      {/* Top Brushstroke Edge */}
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '36px', display: 'block', marginBottom: '-2px' }}
      >
        <path
          d="M0,48 L1440,48 L1440,14 C1220,4 1020,26 760,18 C480,10 240,28 0,10 Z"
          fill="#3B6E4C"
        />
        <path
          d="M0,34 C320,14 680,32 1040,16 C1220,8 1350,22 1440,10 L1440,24 C1180,36 820,20 440,34 C220,40 90,28 0,42 Z"
          fill="#3B6E4C"
          opacity="0.55"
        />
      </svg>

      {/* Main Botanical Green Footer Band */}
      <div
        style={{
          background: '#3B6E4C',
          color: '#ffffff',
          padding: '44px 20px 46px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '1040px' }}>
          {/* Centered LinkedIn Icon */}
          <div style={{ marginBottom: '22px', display: 'flex', justifyContent: 'center' }}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sodhani Biotech on LinkedIn"
              style={{
                color: '#ffffff',
                fontSize: '30px',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              in
            </a>
          </div>

          {/* Company Registration & Address Line */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.92)',
              fontSize: '15px',
              lineHeight: 1.65,
              textAlign: 'center',
              maxWidth: '920px',
              margin: '0 auto 18px'
            }}
          >
            Sodhani Biotech Pvt. Ltd. | Jaipur, Rajasthan – India | Natural Food Colors &amp; Botanical Extracts Division | FSSAI, ISO 22000:2018, GMP, Kosher &amp; Halal Certified
          </p>

          {/* Email & Copyright Line */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.92)',
              fontSize: '15px',
              textAlign: 'center',
              margin: '0 auto 20px'
            }}
          >
            <a href="mailto:info@sodhanibiotech.com" style={{ color: '#ffffff', textDecoration: 'none' }}>
              info@sodhanibiotech.com
            </a>{' '}
            | © Copyright {new Date().getFullYear()} Sodhani Biotech Pvt. Ltd.
          </p>

          {/* Navigation & Commitments Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14.5px',
              color: 'rgba(255, 255, 255, 0.92)'
            }}
          >
            <Link to="/about-us" style={{ color: '#ffffff' }}>Our Story</Link>
            <span>|</span>
            <Link to="/products" style={{ color: '#ffffff' }}>Products</Link>
            <span>|</span>
            <Link to="/sustainability" style={{ color: '#ffffff' }}>Our Commitments</Link>
            <span>|</span>
            <Link to="/blogs" style={{ color: '#ffffff' }}>Blogs</Link>
            <span>|</span>
            <Link to="/contact" style={{ color: '#ffffff' }}>Contact &amp; Inquiries</Link>
          </div>
        </div>
      </div>

      {/* Bottom Brushstroke Edge */}
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '36px', display: 'block', marginTop: '-2px' }}
      >
        <path
          d="M0,0 L1440,0 L1440,34 C1180,44 920,20 640,30 C360,38 160,22 0,38 Z"
          fill="#3B6E4C"
        />
        <path
          d="M0,14 C360,34 740,14 1120,32 C1280,40 1380,26 1440,36 L1440,20 C1140,10 780,28 420,12 C180,6 80,18 0,6 Z"
          fill="#3B6E4C"
          opacity="0.55"
        />
      </svg>

      <div
        style={{
          textAlign: 'center',
          padding: '10px 15px 18px',
          fontSize: '12.5px',
          color: '#6b7280'
        }}
      >
        Sodhani Biotech Pvt. Ltd. — Clean-Label Botanical Food Colors
      </div>
    </footer>
  );
}
