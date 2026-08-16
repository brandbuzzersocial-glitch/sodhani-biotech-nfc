import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'curcumin-yellow',
    title: 'Curcumin & Gardenia Yellow',
    eyebrow: '100% PURE BOTANICAL YELLOW',
    shade: 'Lemon Yellow',
    shadeHex: '#E6A100',
    headline: 'Elevating the Biochemistry of Natural Food Colors',
    subtitle: 'High-purity 95% Curcumin & Gardenia Yellow extracts engineered for beverages, bakery, and dairy applications with exceptional thermal stability.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1600&q=80',
    link: '/products/curcumin-natural-food-colour',
    skuName: 'Curcumin 95% Powder (₹8,200/Kg)'
  },
  {
    id: 'spirulina-blue',
    title: 'Spirulina Extract Phycocyanin Blue',
    eyebrow: 'PLANT-BASED ELECTRIC BLUE',
    shade: 'Vibrant Blue',
    shadeHex: '#1E70A0',
    headline: 'Natural Microalgae Pigments for Modern Food Brands',
    subtitle: 'Organic certified Phycocyanin blue extracted from Spirulina. Delivers brilliant sky-blue hues in ice creams, gummies, drinks, and nutraceuticals.',
    image: 'https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=1600&q=80',
    link: '/products/spirulina-extract-phycocyanin-blue',
    skuName: 'Spirulina Phycocyanin E18 (₹9,000/Kg)'
  },
  {
    id: 'beetroot-red',
    title: 'Beetroot 4% Betanin & Radish Red',
    eyebrow: 'CLEAN LABEL CRIMSON & MAGENTA',
    shade: 'Beetroot Red',
    shadeHex: '#A81C3D',
    headline: 'Challenging Synthetic Red 40 with Pure Betanin',
    subtitle: 'Standardized 4% Betanin extract derived from select non-GMO beets. Ideal substitute for artificial azo dyes in yogurts, candies, and plant meats.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1600&q=80',
    link: '/products/beetroot-natural-food-colour-4-betanin',
    skuName: 'Beetroot 4% Betanin (₹9,800/Kg)'
  },
  {
    id: 'chlorophyllin-green',
    title: 'Sodium Copper Chlorophyllin',
    eyebrow: 'EMERALD GREEN FOOD COLOR',
    shade: 'Vibrant Forest Green',
    shadeHex: '#2E7D43',
    headline: 'Heat & Light Stable Botanical Green Pigments',
    subtitle: 'High-purity E141 Chlorophyllin extract providing crystal-clear green shades for mint confectionery, kiwi beverages, and snack seasonings.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80',
    link: '/products/sodium-copper-chlorophyllin-extract',
    skuName: 'Chlorophyllin Extract E141 (₹6,080/Kg)'
  },
  {
    id: 'paprika-annatto-orange',
    title: 'Annatto Norbixin & Paprika Oleoresin',
    eyebrow: 'WARM SUNSET ORANGE & RED',
    shade: 'Orange to Red',
    shadeHex: '#D45C26',
    headline: 'Natural Paprika & Annatto Water-Soluble Concentrates',
    subtitle: 'Water-soluble Norbixin and encapsulated Paprika extract for cheddar cheeses, marinades, crisps, extruded snacks, and confectionery.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1600&q=80',
    link: '/products/norbixin-natural-food-color',
    skuName: 'Annatto Norbixin Extract (₹7,825/Kg)'
  }
];

export default function HeroSlider({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="hm-banner" style={{ position: 'relative', height: '65vh', minHeight: '440px' }}>
      {/* Dynamic Background Slides with Opacity Crossfade */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === currentSlide ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: idx === currentSlide ? 1 : 0,
            pointerEvents: idx === currentSlide ? 'auto' : 'none'
          }}
        >
          <img
            src={s.image}
            alt={s.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Dark Overlay for Text Readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(20, 30, 45, 0.85) 0%, rgba(20, 30, 45, 0.5) 45%, rgba(20, 30, 45, 0) 100%)',
              backdropFilter: 'blur(4px)'
            }}
          />

          {/* Content Box */}
          <div
            className="container"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 3,
              color: '#ffffff'
            }}
          >
            <div style={{ maxWidth: '780px' }}>
              {/* Eyebrow & Shade Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    backgroundColor: s.shadeHex,
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    letterSpacing: '0.05em'
                  }}
                >
                  {s.shade}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#E4B63D', letterSpacing: '0.08em' }}>
                  {s.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                  color: '#ffffff',
                  textShadow: '0 2px 12px rgba(0,0,0,0.4)'
                }}
              >
                {s.headline}
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                  color: '#f0f5fa',
                  marginBottom: '2rem',
                  maxWidth: '700px',
                  textAlign: 'left',
                  textShadow: '0 1px 8px rgba(0,0,0,0.5)',
                  fontWeight: 400
                }}
              >
                {s.subtitle}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to={s.link} className="btn btn-warning">
                  Explore {s.title} SKU <ArrowRight size={16} />
                </Link>
                <button className="btn btn-outline-light" onClick={() => onOpenQuote()}>
                  Request Sample Pack (1 Kg)
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s ease'
        }}
      >
        <ChevronLeft size={24} />
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
          background: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s ease'
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators / Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '8px'
        }}
      >
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: idx === currentSlide ? '#E4B63D' : 'rgba(255, 255, 255, 0.4)',
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
