import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

// 11-column color gradient from Beetroot/Radish Magenta -> Carmine/Paprika -> Annatto/Curcumin -> Gardenia/Carthamus Yellow
const DROPLET_COLS = [
  { hex: '#D91B81', label: 'Beetroot Betanin' },
  { hex: '#DF256E', label: 'Purple Sweet Potato' },
  { hex: '#E12D58', label: 'Radish Anthocyanin' },
  { hex: '#E43A47', label: 'Carmine Red' },
  { hex: '#E64B38', label: 'Monascus Red' },
  { hex: '#EA6227', label: 'Paprika Oleoresin' },
  { hex: '#EE7B1C', label: 'Annatto Norbixin' },
  { hex: '#F29616', label: 'Beta-Carotene' },
  { hex: '#F5B212', label: 'Gardenia Yellow' },
  { hex: '#F7CC10', label: 'Curcumin 95%' },
  { hex: '#F9E414', label: 'Carthamus Yellow' }
];

export default function HeroSlider({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredDroplet, setHoveredDroplet] = useState(null);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div
      className="hm-banner"
      style={{
        position: 'relative',
        height: '68vh',
        minHeight: '500px',
        maxHeight: '660px',
        background: '#ffffff',
        overflow: 'hidden',
        borderBottom: '1px solid #DAE6EE'
      }}
    >
      {/* =====================================================================
          SLIDE 1: BOTANICAL DROPLET SPECTRUM MATRIX
         ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: currentSlide === 0 ? 1 : 0,
          transition: 'opacity 0.75s ease-in-out',
          zIndex: currentSlide === 0 ? 2 : 0,
          pointerEvents: currentSlide === 0 ? 'auto' : 'none',
          background: '#ffffff',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Typography */}
          <div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#809E33',
                marginBottom: '10px',
                letterSpacing: '0.02em'
              }}
            >
              Our Natural Color Portfolio
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                lineHeight: 1.15,
                color: '#1a2a3e',
                margin: '0 0 20px 0',
                fontWeight: 300,
                letterSpacing: '-0.02em'
              }}
            >
              Vibrant Colors
              <span style={{ display: 'block', fontWeight: 700, color: '#29415E', marginTop: '4px' }}>
                Powered by botanicals
              </span>
            </h1>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.6,
                color: '#3b4f66',
                maxWidth: '460px',
                marginBottom: '28px'
              }}
            >
              High-purity water-soluble and oil-soluble natural food colors extracted in our Jaipur laboratories for clean-label food &amp; beverage applications.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/products" className="btn btn-success" style={{ padding: '10px 26px', fontSize: '15px' }}>
                Explore 17 SKUs <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </Link>
              <button
                onClick={() => onOpenQuote()}
                className="btn btn-outline-dark"
                style={{ padding: '10px 24px', fontSize: '15px' }}
              >
                Request 1 Kg Sample
              </button>
            </div>
          </div>

          {/* Right 5x11 Glossy Botanical Pigment Droplet Matrix */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(11, 1fr)',
                gap: '14px',
                alignItems: 'center',
                justifyItems: 'center'
              }}
            >
              {[0, 1, 2, 3, 4].map((row) =>
                DROPLET_COLS.map((col, colIdx) => {
                  const key = `${row}-${colIdx}`;
                  const isHovered = hoveredDroplet === key;
                  return (
                    <Link
                      to="/products"
                      key={key}
                      onMouseEnter={() => setHoveredDroplet(key)}
                      onMouseLeave={() => setHoveredDroplet(null)}
                      title={col.label}
                      style={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        maxWidth: '42px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 22%, ${col.hex} 58%, ${col.hex} 100%)`,
                        boxShadow: isHovered
                          ? `0 8px 18px ${col.hex}66, inset -2px -3px 6px rgba(0,0,0,0.22)`
                          : `0 3px 8px rgba(0,0,0,0.10), inset -2px -3px 5px rgba(0,0,0,0.18)`,
                        transform: isHovered ? 'scale(1.18)' : 'scale(1)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        display: 'block'
                      }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SLIDE 2: CLEAN-LABEL INGREDIENTS SPLIT SHOWCASE
         ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: currentSlide === 1 ? 1 : 0,
          transition: 'opacity 0.75s ease-in-out',
          zIndex: currentSlide === 1 ? 2 : 0,
          pointerEvents: currentSlide === 1 ? 'auto' : 'none',
          background: 'linear-gradient(125deg, #f6f8f5 0%, #ffffff 55%, #fcf8ee 100%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Bold Stacked Typography */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.3rem)',
                lineHeight: 1.08,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                color: '#29415E',
                margin: '0 0 22px 0',
                fontWeight: 300
              }}
            >
              CLEAN-LABEL
              <span style={{ display: 'block', fontWeight: 400 }}>INGREDIENTS</span>
              <span style={{ display: 'block', fontWeight: 800, color: '#809E33', marginTop: '4px' }}>
                EXTRACTED FROM
              </span>
              <span style={{ display: 'block', fontWeight: 800, color: '#29415E' }}>
                INDIAN BOTANICALS
              </span>
            </h1>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.6,
                color: '#29415E',
                maxWidth: '470px',
                marginBottom: '26px'
              }}
            >
              We are formulating the <strong>next generation</strong> of{' '}
              <strong style={{ color: '#809E33' }}>natural food colors</strong> by combining{' '}
              <strong>botanical extraction science</strong> with industrial heat, light, and pH stability.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/products/water-soluble" className="btn btn-success" style={{ padding: '10px 24px' }}>
                Water Soluble Range
              </Link>
              <Link to="/products/oil-soluble" className="btn btn-warning" style={{ padding: '10px 24px' }}>
                Oil Soluble Range
              </Link>
            </div>
          </div>

          {/* Right Botanical Product Composition with Concentric Callout Rings */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Concentric Callout Node 1 */}
            <div
              style={{
                position: 'absolute',
                top: '8%',
                left: '6%',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                border: '1.5px solid #809E33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                zIndex: 3
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#809E33',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Leaf size={18} />
              </div>
            </div>

            {/* Concentric Callout Node 2 */}
            <div
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '2%',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                border: '1.5px solid #E4B63D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                zIndex: 3
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#E4B63D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Sparkles size={18} />
              </div>
            </div>

            {/* Concentric Callout Node 3 */}
            <div
              style={{
                position: 'absolute',
                top: '14%',
                right: '4%',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                border: '1.5px solid #29415E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                zIndex: 3
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#29415E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <ShieldCheck size={18} />
              </div>
            </div>

            {/* Bespoke Studio Visual of Naturally Colored Foods & Botanical Powders */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 18px 40px rgba(41, 65, 94, 0.14)',
                border: '4px solid #ffffff',
                width: '100%',
                maxWidth: '580px',
                height: '350px'
              }}
            >
              <img
                src="/home/hero-botanical-foods.jpg"
                alt="Naturally Colored Foods and Botanical Pigment Powders"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SLIDE 3: 3-PANEL VISUAL STORY ("we — make — colour")
         ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: currentSlide === 2 ? 1 : 0,
          transition: 'opacity 0.75s ease-in-out',
          zIndex: currentSlide === 2 ? 2 : 0,
          pointerEvents: currentSlide === 2 ? 'auto' : 'none',
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        {/* Full-Width Bespoke 3-Panel Botanical Triptych */}
        <img
          src="/home/hero-triptych.jpg"
          alt="From Raw Botanical Roots to Pigment Powder to Colored Beverage"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.86)'
          }}
        />

        {/* 3 Circular Nodes Overlay Connected by Horizontal Line */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            height: '100%',
            width: '100%'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                border: '1.5px solid #ffffff',
                background: 'rgba(20, 30, 45, 0.30)',
                backdropFilter: 'blur(3px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>we</span>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.92, marginTop: '4px' }}>
                Botanical Harvest
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                border: '1.5px solid #ffffff',
                background: 'rgba(20, 30, 45, 0.30)',
                backdropFilter: 'blur(3px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>make</span>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.92, marginTop: '4px' }}>
                Pure Pigments
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                border: '1.5px solid #ffffff',
                background: 'rgba(20, 30, 45, 0.30)',
                backdropFilter: 'blur(3px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.01em' }}>colour</span>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.92, marginTop: '4px' }}>
                Clean-Label Foods
              </span>
            </div>
          </div>
        </div>

        {/* Connecting Horizontal Lines Between the 3 Circles */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(16.666% + 105px)',
            width: 'calc(33.333% - 210px)',
            height: '1.5px',
            background: '#ffffff',
            zIndex: 4,
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(50% + 105px)',
            width: 'calc(33.333% - 210px)',
            height: '1.5px',
            background: '#ffffff',
            zIndex: 4,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(41, 65, 94, 0.14)',
          color: currentSlide === 2 ? '#ffffff' : '#29415E',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(41, 65, 94, 0.15)',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(41, 65, 94, 0.14)',
          color: currentSlide === 2 ? '#ffffff' : '#29415E',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(41, 65, 94, 0.15)',
          transition: 'all 0.2s ease'
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '8px',
          background: 'rgba(255,255,255,0.75)',
          padding: '6px 12px',
          borderRadius: '20px',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
        }}
      >
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: idx === currentSlide ? '#809E33' : 'rgba(41, 65, 94, 0.28)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
}
