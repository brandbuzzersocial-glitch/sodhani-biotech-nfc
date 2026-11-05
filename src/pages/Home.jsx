import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import HeroSlider from '../components/home/HeroSlider';
import { BLOGS } from '../data/blogs';

// Part 6: 6 Portfolio Application Categories
const PORTFOLIO_APPLICATIONS = [
  {
    id: 'beverages',
    num: '01',
    title: 'Beverages (Alcoholic & non-alcoholic)',
    image: '/industries/beverages-drinks.jpg',
    desc: 'Crystal-clear water-soluble anthocyanins, phycocyanin blue, and gardenia extracts with high acid & light stability.'
  },
  {
    id: 'confectionery',
    num: '02',
    title: 'Confectionery & Sweets',
    image: '/industries/confectionery-sweets.jpg',
    desc: 'Vivid, non-bleed botanical pigments engineered for high-boil hard candies, pectin gummies, jellies, and panned dragees.'
  },
  {
    id: 'bakery',
    num: '03',
    title: 'Bakery & Pastry',
    image: '/industries/bakery-pastry.jpg',
    desc: 'Bake-stable curcumin, beta-carotene, annatto, and beetroot formulations for cakes, macarons, wafers, and icings.'
  },
  {
    id: 'dairy',
    num: '04',
    title: 'Dairy & Frozen Desserts',
    image: '/industries/dairy-frozen-desserts.jpg',
    desc: 'Homogeneous dispersion across flavored milks, fruit yogurts, ice creams, sorbets, and processed cheese matrices.'
  },
  {
    id: 'savory',
    num: '05',
    title: 'Sauces, Snacks & Seasonings',
    image: '/industries/sauces-snacks-seasonings.jpg',
    desc: 'Oil-soluble paprika oleoresin, annatto bixin, and turmeric extracts built for extruded snacks, marinades, and dressings.'
  },
  {
    id: 'nutraceuticals',
    num: '06',
    title: 'Nutraceuticals & Supplements',
    image: '/industries/nutraceuticals-supplements.jpg',
    desc: 'Clean-label tablet coatings, softgel capsules, and functional wellness powders with standardized active pigment assay.'
  }
];

// Part 9: 11 columns x 6 rows Shade Palette (from light tint to rich concentration)
const SHADE_COLUMNS = [
  { name: 'Rose Beetroot', shades: ['#F2B8C6', '#E89BAE', '#DE7E96', '#D5627E', '#CB4566', '#C1294E'] },
  { name: 'Crimson Carmine', shades: ['#FFA6B5', '#FA788D', '#F2556B', '#E83E52', '#DE2A3B', '#B8292F'] },
  { name: 'Coral Radish', shades: ['#FDB59F', '#FA967A', '#F67856', '#F15A32', '#EB411B', '#E03519'] },
  { name: 'Paprika Orange', shades: ['#FDD89B', '#FBC16A', '#F9AA3B', '#F6931D', '#F27C14', '#EC5A11'] },
  { name: 'Annatto Amber', shades: ['#FCEB9C', '#FADF6E', '#F8D342', '#F5C61A', '#F1B811', '#EE9B12'] },
  { name: 'Curcumin Yellow', shades: ['#FDF8A6', '#FBF279', '#F9EC4D', '#F7E524', '#F4DD0B', '#F0D308'] },
  { name: 'Chlorophyllin Green', shades: ['#CBEED0', '#A5E1AE', '#7FD38B', '#59C568', '#3BB44B', '#2E8B3C'] },
  { name: 'Spirulina Blue', shades: ['#BDE0FE', '#8ECAE6', '#5FA8D3', '#3A86FF', '#1D63DC', '#0F43B8'] },
  { name: 'Sweet Potato Purple', shades: ['#ECCCF2', '#DCB0E8', '#CB93DE', '#BA76D4', '#A859CA', '#8E38B5'] },
  { name: 'Natural Brown', shades: ['#D4AB87', '#BF926B', '#A97950', '#936136', '#7A4B24', '#5E3719'] },
  { name: 'Cuttlefish Charcoal', shades: ['#EDEDED', '#CCCCCC', '#A6A6A6', '#7F7F7F', '#555555', '#2B2B2B'] }
];

const SAMPLE_APPLICATIONS = [
  { id: 'beverage', label: 'Beverages' },
  { id: 'dairy', label: 'Dairy & Drinks' },
  { id: 'confectionery', label: 'Confectionery' },
  { id: 'bakery', label: 'Bakery & Frosting' },
  { id: 'savory', label: 'Savory & Culinary' }
];

export default function Home({ onOpenQuote }) {
  // Part 6 State: Active Application Portfolio index
  const [activeAppIdx, setActiveAppIdx] = useState(0);

  // Part 9 State: Selected Shade & Application in "Get a sample"
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });
  const [selectedSampleApp, setSelectedSampleApp] = useState('beverage');

  const activeHex = SHADE_COLUMNS[selectedCell.col].shades[selectedCell.row];
  const activeShadeFamily = SHADE_COLUMNS[selectedCell.col].name;

  // Ordered slice for Part 6 so active card is shown first
  const orderedPortfolio = [
    PORTFOLIO_APPLICATIONS[activeAppIdx],
    ...PORTFOLIO_APPLICATIONS.slice(activeAppIdx + 1),
    ...PORTFOLIO_APPLICATIONS.slice(0, activeAppIdx)
  ];

  return (
    <div>
      {/* ===================================================================
          PART 1: OPENING PAGE HERO SLIDER
         =================================================================== */}
      <HeroSlider onOpenQuote={onOpenQuote} />

      {/* ===================================================================
          PART 2: OUR COMMITMENT — MAKING NATURE EASY (VISION & MISSION)
         =================================================================== */}
      <section style={{ padding: '85px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr',
              gap: '56px',
              alignItems: 'center'
            }}
            className="hm-commitment-grid"
          >
            {/* Left Visual: Studio Photography of Laboratory Pipette + Flask Dispersion & Botanical Cross-Section */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/home/commitment-beaker.jpg"
                alt="Botanical Pigment Extraction in Lab Flask"
                style={{
                  width: '100%',
                  maxWidth: '470px',
                  height: 'auto',
                  borderRadius: '18px',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Right Content: Our Commitment, Vision & Mission with Highlighted Theme Colors */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  color: '#29415E',
                  lineHeight: 1.18,
                  marginBottom: '28px',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                Our Commitment:
                <br />
                Making Nature{' '}
                <span style={{ position: 'relative', display: 'inline-block', color: '#809E33' }}>
                  Easy
                  <svg
                    viewBox="0 0 120 22"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: '-10px',
                      width: '100%',
                      height: '16px'
                    }}
                  >
                    <path
                      d="M 4 16 C 18 4, 28 19, 44 10 C 58 3, 72 17, 116 8"
                      stroke="#E4B63D"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#29415E', marginBottom: '8px' }}>
                  Vision
                </h3>
                <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#29415E', margin: 0 }}>
                  To be the trusted botanical coloring partner in the{' '}
                  <span style={{ color: '#809E33', fontWeight: 600 }}>global food transformation</span>, where
                  natural integrity is the foundation of consumer trust. We envision a future where the colour of
                  every food and beverage product is an{' '}
                  <span style={{ color: '#D97724', fontWeight: 600 }}>honest promise of its origin</span>.
                </p>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#29415E', marginBottom: '8px' }}>
                  Mission
                </h3>
                <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#29415E', margin: 0 }}>
                  Bringing the same{' '}
                  <span style={{ color: '#809E33', fontWeight: 600 }}>research-led biochemistry</span> that shaped
                  our natural dye extracts to food and beverage coloration—translating raw botanical pigments into
                  reliable,{' '}
                  <span style={{ color: '#D97724', fontWeight: 600 }}>‘seed-to-shelf’</span> solutions that help
                  manufacturers move away from synthetic dependency without compromising on performance.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <Link
                  to="/products"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#D97724',
                    fontWeight: 700,
                    fontSize: '16px'
                  }}
                >
                  <span style={{ width: '28px', height: '2px', background: '#D97724', display: 'inline-block' }} />
                  View our Natural Colors
                </Link>
                <Link
                  to="/about-us"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#809E33',
                    fontWeight: 600,
                    fontSize: '15px'
                  }}
                >
                  Read Our Story <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PART 3: COMPACT CATEGORY BANNERS WITH IMAGES
          1) Natural Food Color Water Soluble
          2) Natural Food Color Oil Soluble
         =================================================================== */}
      <section style={{ padding: '10px 0 60px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1140px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Category 1: Natural Food Color Water Soluble */}
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(95deg, #6f8d28 0%, #809E33 55%, #8cab3b 100%)',
              borderRadius: '20px',
              padding: '28px 38px',
              color: '#ffffff',
              display: 'grid',
              gridTemplateColumns: '140px 1fr auto',
              gap: '28px',
              alignItems: 'center',
              boxShadow: '0 12px 30px rgba(128, 158, 51, 0.22)',
              overflow: 'hidden'
            }}
            className="hm-compact-cat-banner"
          >
            {/* Subtle Brushstroke Top/Bottom Texture Overlay */}
            <svg
              viewBox="0 0 1200 24"
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '10px', opacity: 0.35 }}
            >
              <path d="M0,0 L1200,0 L1200,12 Q900,24 600,10 T0,18 Z" fill="#ffffff" />
            </svg>
            <svg
              viewBox="0 0 1200 24"
              preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '10px', opacity: 0.35 }}
            >
              <path d="M0,24 L1200,24 L1200,10 Q850,0 500,14 T0,8 Z" fill="#ffffff" />
            </svg>

            {/* Category Image + Line Icon Badge */}
            <div style={{ position: 'relative', width: '130px', height: '115px' }}>
              <img
                src="/home/water-soluble.jpg"
                alt="Natural Food Color Water Soluble"
                style={{
                  width: '130px',
                  height: '115px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '3px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                }}
              />
            </div>

            {/* Category Copy */}
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  background: 'rgba(255,255,255,0.18)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}
              >
                Category 01 • Aqueous Dispersion
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                Natural Food Color Water Soluble
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.55, maxWidth: '620px' }}>
                High-purity spray-dried powders and hydro-soluble extracts engineered for instant clarity in beverages, dairy, gummies, and water-based food systems.
              </p>
            </div>

            {/* Pill CTA */}
            <div>
              <Link
                to="/products/water-soluble"
                style={{
                  background: '#ffffff',
                  color: '#698229',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '13px 26px',
                  borderRadius: '50px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                  whiteSpace: 'nowrap'
                }}
              >
                Explore Water Soluble <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Category 2: Natural Food Color Oil Soluble */}
          <div
            style={{
              position: 'relative',
              background: 'linear-gradient(95deg, #DC7620 0%, #EA862A 55%, #F09837 100%)',
              borderRadius: '20px',
              padding: '28px 38px',
              color: '#ffffff',
              display: 'grid',
              gridTemplateColumns: '140px 1fr auto',
              gap: '28px',
              alignItems: 'center',
              boxShadow: '0 12px 30px rgba(234, 134, 42, 0.22)',
              overflow: 'hidden'
            }}
            className="hm-compact-cat-banner"
          >
            {/* Subtle Brushstroke Top/Bottom Texture Overlay */}
            <svg
              viewBox="0 0 1200 24"
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '10px', opacity: 0.35 }}
            >
              <path d="M0,0 L1200,0 L1200,12 Q900,24 600,10 T0,18 Z" fill="#ffffff" />
            </svg>
            <svg
              viewBox="0 0 1200 24"
              preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '10px', opacity: 0.35 }}
            >
              <path d="M0,24 L1200,24 L1200,10 Q850,0 500,14 T0,8 Z" fill="#ffffff" />
            </svg>

            {/* Category Image */}
            <div style={{ position: 'relative', width: '130px', height: '115px' }}>
              <img
                src="/home/oil-soluble.jpg"
                alt="Natural Food Color Oil Soluble"
                style={{
                  width: '130px',
                  height: '115px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '3px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                }}
              />
            </div>

            {/* Category Copy */}
            <div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}
              >
                Category 02 • Lipid &amp; Emulsion Systems
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                Natural Food Color Oil Soluble
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.95)', margin: 0, lineHeight: 1.55, maxWidth: '620px' }}>
                Concentrated botanical oleoresins, suspension carotenoids, and lipid-soluble pigments crafted for bakery fats, snack coatings, sauces, and cheese oils.
              </p>
            </div>

            {/* Pill CTA */}
            <div>
              <Link
                to="/products/oil-soluble"
                style={{
                  background: '#ffffff',
                  color: '#D97218',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '13px 26px',
                  borderRadius: '50px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                  whiteSpace: 'nowrap'
                }}
              >
                Explore Oil Soluble <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PART 4: COLOR PROPERTIES ORBITAL DIAGRAM & DIETARY STANDARDS
         =================================================================== */}
      <section style={{ padding: '70px 0 80px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          {/* Orbital Ring Layout */}
          <div
            style={{
              position: 'relative',
              maxWidth: '960px',
              margin: '0 auto',
              padding: '50px 20px'
            }}
          >
            {/* Top Row Labels */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '20px',
                alignItems: 'end',
                marginBottom: '20px'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                Excellent
                <br />
                Heat Stability
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', textAlign: 'center', paddingBottom: '24px' }}>
                Accurate Shades
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', textAlign: 'center', paddingBottom: '24px' }}>
                Sustainability
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', textAlign: 'right', lineHeight: 1.3 }}>
                Cost
                <br />
                Efficient
              </div>
            </div>

            {/* Center Double-Ellipse Ring with "Color Properties" */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
              <svg
                viewBox="0 0 580 180"
                style={{ width: '100%', maxWidth: '540px', height: 'auto', overflow: 'visible' }}
              >
                {/* Gold Outer Tilted Ellipse */}
                <ellipse
                  cx="290"
                  cy="92"
                  rx="265"
                  ry="72"
                  fill="none"
                  stroke="#F5B212"
                  strokeWidth="1.6"
                />
                {/* Botanical Accent Inner Ellipse */}
                <ellipse
                  cx="290"
                  cy="84"
                  rx="265"
                  ry="64"
                  fill="none"
                  stroke="#D91B81"
                  strokeWidth="1.6"
                />
                {/* Orbital Accent Nodes */}
                <circle cx="68" cy="48" r="5.5" fill="#D91B81" />
                <circle cx="62" cy="128" r="9.5" fill="#F5B212" />
                <circle cx="518" cy="56" r="6" fill="#809E33" />
              </svg>

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: 0, color: '#111827', fontWeight: 300 }}>
                  Color <strong style={{ fontWeight: 700 }}>Properties</strong>
                </h3>
              </div>
            </div>

            {/* Bottom Row Labels */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '20px',
                alignItems: 'start',
                marginTop: '20px'
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                Wide pH
                <br />
                Range (2.7-7.5)
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', textAlign: 'center', paddingTop: '26px', lineHeight: 1.3 }}>
                No Flavor
                <br />
                Impact
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', textAlign: 'center', paddingTop: '36px' }}>
                Clean Label
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#111827', textAlign: 'right', lineHeight: 1.3 }}>
                Consistent
                <br />
                Supply
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #d1d5db', margin: '25px auto 40px', maxWidth: '880px' }} />

          {/* Bottom 4 Dietary & Quality Icons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              maxWidth: '880px',
              margin: '0 auto'
            }}
            className="hm-dietary-strip"
          >
            {/* 1. Kosher and Halal */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="20" cy="26" r="13" stroke="#374151" strokeWidth="1.2" />
                <path d="M 22 15 A 10 10 0 1 0 22 37 A 8 8 0 1 1 22 15 Z" fill="#D91B81" />
                <polygon points="30,12 34,20 42,20 36,26 38,34 30,29 22,34 24,26 18,20 26,20" stroke="#374151" strokeWidth="1.1" fill="none" />
              </svg>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', lineHeight: 1.25 }}>
                Kosher
                <br />
                and Halal
              </div>
            </div>

            {/* 2. Vegan and GMO Free */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M 24 38 C 12 30, 10 18, 17 13 C 21 10, 24 14, 24 17 C 24 14, 27 10, 31 13 C 38 18, 36 30, 24 38 Z" stroke="#374151" strokeWidth="1.2" />
                <path d="M 24 38 C 24 27, 31 21, 39 21 C 39 31, 32 38, 24 38 Z" fill="#ffffff" stroke="#374151" strokeWidth="1.2" />
                <path d="M 24 38 C 21 33, 21 27, 24 24 C 27 27, 27 33, 24 38 Z" fill="#D91B81" />
              </svg>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', lineHeight: 1.25 }}>
                Vegan and
                <br />
                GMO Free
              </div>
            </div>

            {/* 3. Ready to eat standard */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M 16 30 L 16 37 L 32 37 L 32 30" stroke="#374151" strokeWidth="1.2" />
                <path d="M 14 30 C 9 28, 9 20, 15 19 C 16 13, 24 11, 28 15 C 34 14, 39 20, 34 27 Z" stroke="#374151" strokeWidth="1.2" />
                <circle cx="15" cy="22" r="4" fill="#E12D58" />
                <circle cx="34" cy="26" r="3" fill="#D91B81" />
              </svg>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', lineHeight: 1.25 }}>
                Ready to eat
                <br />
                standard
              </div>
            </div>

            {/* 4. Gluten Free */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <line x1="14" y1="38" x2="34" y2="12" stroke="#374151" strokeWidth="1.2" />
                <ellipse cx="22" cy="28" rx="4" ry="7" transform="rotate(-25 22 28)" stroke="#374151" strokeWidth="1.2" fill="#D91B81" />
                <ellipse cx="28" cy="20" rx="4" ry="7" transform="rotate(-25 28 20)" stroke="#374151" strokeWidth="1.2" />
                <ellipse cx="28" cy="31" rx="7" ry="4" transform="rotate(-15 28 31)" stroke="#374151" strokeWidth="1.2" />
              </svg>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#111827', lineHeight: 1.25 }}>
                Gluten
                <br />
                Free
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PART 5: CLIMATE & SUSTAINABILITY OUTLINED GLOBE CARD
         =================================================================== */}
      <section style={{ padding: '40px 0 80px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div
            style={{
              position: 'relative',
              border: '1.5px solid #809E33',
              borderRadius: '28px',
              padding: '64px 60px',
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '32px',
              alignItems: 'center',
              background: '#ffffff'
            }}
            className="hm-climate-card"
          >
            {/* Left Content */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#111827',
                  lineHeight: 1.18,
                  margin: '0 0 18px 0'
                }}
              >
                Making an impact
                <br />
                on world climate
              </h3>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.65,
                  color: '#374151',
                  maxWidth: '430px',
                  marginBottom: '32px'
                }}
              >
                Sodhani Biotech’s botanical extraction process meets global demand for sustainable natural colorants that reduce carbon footprint and spare natural resources.
              </p>
              <Link
                to="/sustainability"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  border: '1.5px solid #809E33',
                  borderRadius: '50px',
                  padding: '13px 48px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#111827',
                  background: '#ffffff',
                  transition: 'all 0.25s ease'
                }}
              >
                Discover How <ArrowRight size={17} />
              </Link>
            </div>

            {/* Right Wireframe Globe + Botanical Leaves SVG */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg
                viewBox="0 0 420 380"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  overflow: 'visible',
                  margin: '-40px 0'
                }}
              >
                {/* Globe Circle */}
                <circle cx="190" cy="190" r="168" fill="#ffffff" stroke="#809E33" strokeWidth="1.4" />
                {/* Longitude & Latitude Arcs */}
                <ellipse cx="190" cy="190" rx="82" ry="168" transform="rotate(-18 190 190)" fill="none" stroke="#809E33" strokeWidth="1.2" />
                <line x1="138" y1="30" x2="242" y2="350" stroke="#809E33" strokeWidth="1.2" />
                <path d="M 38 118 Q 195 165 345 102" fill="none" stroke="#809E33" strokeWidth="1.2" />
                <path d="M 28 242 Q 185 205 352 252" fill="none" stroke="#809E33" strokeWidth="1.2" />

                {/* Botanical Leaves Overlapping Bottom-Right of Globe */}
                <path
                  d="M 295 335 C 265 275, 282 195, 295 162 C 335 190, 355 255, 325 335 Z"
                  fill="#ffffff"
                  stroke="#809E33"
                  strokeWidth="1.4"
                />
                <path
                  d="M 295 335 C 295 275, 296 215, 295 162"
                  fill="none"
                  stroke="#809E33"
                  strokeWidth="1.2"
                />
                <path
                  d="M 312 342 C 310 285, 355 245, 412 268 C 390 315, 355 348, 312 342 Z"
                  fill="#ffffff"
                  stroke="#809E33"
                  strokeWidth="1.4"
                />
                <path
                  d="M 312 342 Q 355 295 412 268"
                  fill="none"
                  stroke="#809E33"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PART 6: INTERACTIVE "MAIN APPLICATION CATEGORIES FOR OUR PORTFOLIO"
         =================================================================== */}
      <section style={{ padding: '60px 0 85px', background: '#ffffff', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '40px',
              alignItems: 'center'
            }}
            className="hm-portfolio-slider"
          >
            {/* Left Column Title & Description */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#111827',
                  lineHeight: 1.12,
                  margin: '0 0 18px 0',
                  letterSpacing: '-0.02em'
                }}
              >
                Main
                <br />
                application
                <br />
                categories
                <br />
                for our
                <br />
                portfolio
              </h3>
              <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#4b5563', margin: 0 }}>
                Our vast pantry of botanical color solutions can be applied to a variety of consumer products.
              </p>
            </div>

            {/* Right Interactive Horizontal Gallery */}
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.35fr repeat(3, 0.85fr)',
                  gap: '6px',
                  alignItems: 'center'
                }}
                className="hm-portfolio-cards"
              >
                {/* Primary Active Expanded Card */}
                <div
                  style={{
                    position: 'relative',
                    height: '460px',
                    overflow: 'hidden',
                    boxShadow: '0 14px 34px rgba(0,0,0,0.12)'
                  }}
                >
                  <img
                    src={orderedPortfolio[0].image}
                    alt={orderedPortfolio[0].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
                  />
                  {/* White Label Card at Bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '24px',
                      right: '24px',
                      background: '#ffffff',
                      padding: '20px 18px',
                      textAlign: 'center',
                      boxShadow: '0 -4px 20px rgba(0,0,0,0.08)'
                    }}
                  >
                    <div style={{ fontSize: '17px', fontWeight: 800, color: '#111827', lineHeight: 1.3 }}>
                      {orderedPortfolio[0].title}
                    </div>
                  </div>
                </div>

                {/* Adjacent Cards in Strip */}
                {orderedPortfolio.slice(1, 4).map((item) => {
                  const originalIdx = PORTFOLIO_APPLICATIONS.findIndex((a) => a.id === item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveAppIdx(originalIdx)}
                      title={`Click to view ${item.title}`}
                      style={{
                        height: '340px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Bottom Progress Bar & Numbered Pagination (01 - 06) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '32px',
                  marginTop: '24px',
                  paddingRight: '12px'
                }}
              >
                {/* Progress Track */}
                <div
                  style={{
                    width: '180px',
                    height: '4px',
                    background: '#d1d5db',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: `${((activeAppIdx + 1) / PORTFOLIO_APPLICATIONS.length) * 100}%`,
                      height: '100%',
                      background: '#1e3a8a',
                      transition: 'width 0.35s ease'
                    }}
                  />
                </div>

                {/* Clickable Numbers 01 02 03 04 05 06 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  {PORTFOLIO_APPLICATIONS.map((app, idx) => {
                    const isActive = idx === activeAppIdx;
                    return (
                      <button
                        key={app.id}
                        onClick={() => setActiveAppIdx(idx)}
                        style={{
                          fontSize: isActive ? '20px' : '15px',
                          fontWeight: isActive ? 800 : 600,
                          color: '#1e3a8a',
                          borderBottom: isActive ? '2.5px solid #1e3a8a' : '2.5px solid transparent',
                          padding: '2px 2px 4px',
                          cursor: 'pointer',
                          background: 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {app.num}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (PART 7: Featured Food Color SKUs section removed as requested) */}

      {/* ===================================================================
          PART 8: LEADERSHIP STATEMENT — SIDDHANT SODHANI (INDIAN-ORIGIN STORY)
         =================================================================== */}
      <section style={{ padding: '75px 0', background: '#F9FBFD' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '54px',
              alignItems: 'center'
            }}
            className="hm-leadership-grid"
          >
            {/* Left Portrait Card + Siddhant Sodhani Caption */}
            <div>
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#0f2537',
                  height: '310px',
                  marginBottom: '16px',
                  boxShadow: '0 12px 28px rgba(15, 37, 55, 0.14)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src="/home/jaipur-lab.jpg"
                  alt="Siddhant Sodhani — Sodhani Biotech Jaipur Lab"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '2px' }}>
                Siddhant Sodhani
              </div>
              <div style={{ fontSize: '14.5px', color: '#6b7280', fontWeight: 500 }}>
                Leadership | Sodhani Biotech
              </div>
            </div>

            {/* Right Statement with Exact Doc Copy */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(2rem, 3.3vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 24px 0',
                  lineHeight: 1.2
                }}
              >
                Natural Food Coloring as an Asset
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.75,
                  color: '#1f2937',
                  margin: 0,
                  fontWeight: 400
                }}
              >
                “India grows some of the most colourful plants on earth, and almost none of them have made it into your food colours yet. We’re changing that. Our Jaipur lab is extracting, purifying and testing pigments from Indian herbs, flowers and farm produce, using the same science that took our dyes from powders to industrial grade. The goal: a full palette of natural food colours that’s proudly Indian-origin.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PART 9: INTERACTIVE "GET A SAMPLE" COLOUR & APPLICATION SELECTOR
          (Replaces Certifications strip on Home)
         =================================================================== */}
      <section style={{ background: '#ffffff', paddingBottom: '75px' }}>
        {/* Top Golden Banner Strip */}
        <div
          style={{
            background: '#F5B800',
            padding: '16px 20px',
            marginBottom: '55px'
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: '1080px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600 }}>
              Replacing artificial colors? We can support you on your natural color journey.
            </span>
            <button
              onClick={() => onOpenQuote()}
              style={{
                background: '#ffffff',
                color: '#111827',
                fontWeight: 600,
                fontSize: '14px',
                padding: '9px 22px',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer'
              }}
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="container" style={{ maxWidth: '1120px' }}>
          {/* Heading & Subtitle */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px' }}>
            <h3 style={{ fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
              Get a sample
            </h3>
            <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: '#1f2937', textAlign: 'center', margin: 0 }}>
              Use the colour selector below to pick the colour and application you are looking for. Availability may vary by application and processing method, but we will work closely with you to select the best colour option for your project.
            </p>
          </div>

          {/* Interactive 3-Part Selector: [11x6 Shade Matrix] + [Dynamic Colored Preview] + [Application Icon Strip] */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.35fr 0.85fr 68px',
              gap: '28px',
              alignItems: 'center'
            }}
            className="hm-sample-selector"
          >
            {/* 1. 11x6 Shade Swatch Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(11, 1fr)',
                gap: '3px',
                background: '#ffffff',
                border: '1px solid #e5e7eb'
              }}
            >
              {[0, 1, 2, 3, 4, 5].map((rowIdx) =>
                SHADE_COLUMNS.map((col, colIdx) => {
                  const hex = col.shades[rowIdx];
                  const isSelected = selectedCell.row === rowIdx && selectedCell.col === colIdx;
                  return (
                    <button
                      key={`${rowIdx}-${colIdx}`}
                      onClick={() => setSelectedCell({ row: rowIdx, col: colIdx })}
                      title={`${col.name} (${hex})`}
                      aria-label={`Select shade ${col.name} row ${rowIdx + 1}`}
                      style={{
                        backgroundColor: hex,
                        aspectRatio: '1 / 0.92',
                        width: '100%',
                        border: 'none',
                        padding: 0,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.15s ease'
                      }}
                    >
                      {isSelected && (
                        <span
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '50%',
                            border: '3px solid #ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.22)'
                          }}
                        >
                          <Check size={20} strokeWidth={3} />
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* 2. Dynamic Product Preview Colored by Selected Shade */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedSampleApp === 'beverage' && (
                  <svg viewBox="0 0 220 300" width="210" height="285">
                    <defs>
                      <linearGradient id="glassShine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
                        <stop offset="28%" stopColor="rgba(255,255,255,0.08)" />
                        <stop offset="72%" stopColor="rgba(0,0,0,0.08)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="110" cy="272" rx="54" ry="10" fill="rgba(0,0,0,0.10)" />
                    {/* Beverage Liquid */}
                    <path
                      d="M 46 68 Q 36 165 56 254 C 60 264, 160 264, 164 254 Q 184 165 174 68 Z"
                      fill={activeHex}
                      style={{ transition: 'fill 0.25s ease' }}
                    />
                    {/* Liquid Top Meniscus */}
                    <ellipse
                      cx="110"
                      cy="68"
                      rx="64"
                      ry="8"
                      fill={activeHex}
                      filter="brightness(0.92)"
                      style={{ transition: 'fill 0.25s ease' }}
                    />
                    {/* Glass Specular Overlay */}
                    <path
                      d="M 48 34 Q 34 155 54 258 C 58 270, 162 270, 166 258 Q 186 155 172 34 Z"
                      fill="url(#glassShine)"
                      stroke="#cbd5e1"
                      strokeWidth="2.5"
                    />
                    <ellipse cx="110" cy="34" rx="62" ry="6" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    {/* Vertical Highlight */}
                    <path d="M 64 50 Q 56 150 68 242" stroke="rgba(255,255,255,0.65)" strokeWidth="6" strokeLinecap="round" fill="none" />
                  </svg>
                )}

                {selectedSampleApp === 'dairy' && (
                  <svg viewBox="0 0 220 300" width="210" height="285">
                    <ellipse cx="110" cy="268" rx="62" ry="12" fill="rgba(0,0,0,0.10)" />
                    {/* Yogurt / Dairy Swirl Top */}
                    <path
                      d="M 52 125 C 62 82, 95 62, 114 48 C 132 68, 162 84, 168 125 Z"
                      fill={activeHex}
                      style={{ transition: 'fill 0.25s ease' }}
                    />
                    {/* Dairy Cup Body */}
                    <path
                      d="M 46 125 L 174 125 L 156 256 C 154 264, 66 264, 64 256 Z"
                      fill={activeHex}
                      opacity="0.88"
                      style={{ transition: 'fill 0.25s ease' }}
                    />
                    <rect x="38" y="118" width="144" height="12" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <path d="M 65 140 L 76 245" stroke="rgba(255,255,255,0.55)" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                )}

                {selectedSampleApp === 'confectionery' && (
                  <svg viewBox="0 0 240 260" width="215" height="250">
                    <ellipse cx="120" cy="232" rx="64" ry="10" fill="rgba(0,0,0,0.10)" />
                    {/* Left Wrapper Twist */}
                    <path d="M 22 92 L 68 118 L 52 162 L 12 146 Z" fill={activeHex} opacity="0.82" stroke="#ffffff" strokeWidth="2" />
                    {/* Right Wrapper Twist */}
                    <path d="M 172 98 L 218 76 L 228 124 L 188 142 Z" fill={activeHex} opacity="0.82" stroke="#ffffff" strokeWidth="2" />
                    {/* Center Glossy Hard Candy */}
                    <circle cx="120" cy="130" r="56" fill={activeHex} style={{ transition: 'fill 0.25s ease' }} />
                    <path d="M 88 96 A 42 42 0 0 1 142 92" stroke="rgba(255,255,255,0.65)" strokeWidth="7" strokeLinecap="round" fill="none" />
                  </svg>
                )}

                {selectedSampleApp === 'bakery' && (
                  <svg viewBox="0 0 220 280" width="210" height="270">
                    <ellipse cx="110" cy="252" rx="58" ry="10" fill="rgba(0,0,0,0.10)" />
                    {/* Cupcake Paper Liner */}
                    <path d="M 56 155 L 164 155 L 146 242 L 74 242 Z" fill="#d97706" opacity="0.85" />
                    <line x1="78" y1="155" x2="88" y2="242" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                    <line x1="110" y1="155" x2="110" y2="242" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                    <line x1="142" y1="155" x2="132" y2="242" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                    {/* Colored Frosting Swirls */}
                    <path
                      d="M 46 158 C 36 132, 58 112, 72 114 C 68 90, 92 72, 110 54 C 128 72, 152 90, 148 114 C 162 112, 184 132, 174 158 Z"
                      fill={activeHex}
                      style={{ transition: 'fill 0.25s ease' }}
                    />
                    <path d="M 74 128 Q 110 116 146 128" stroke="rgba(255,255,255,0.45)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  </svg>
                )}

                {selectedSampleApp === 'savory' && (
                  <svg viewBox="0 0 240 260" width="215" height="250">
                    <ellipse cx="120" cy="225" rx="78" ry="10" fill="rgba(0,0,0,0.10)" />
                    {/* Cloche Dome colored in selected shade */}
                    <circle cx="120" cy="82" r="12" fill={activeHex} />
                    <path
                      d="M 42 188 A 78 78 0 0 1 198 188 Z"
                      fill={activeHex}
                      style={{ transition: 'fill 0.25s ease' }}
                    />
                    <rect x="28" y="188" width="184" height="14" rx="7" fill="#374151" />
                    <path d="M 68 158 A 56 56 0 0 1 118 112" stroke="rgba(255,255,255,0.55)" strokeWidth="6" strokeLinecap="round" fill="none" />
                  </svg>
                )}
              </div>

              <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: 600, color: '#374151' }}>
                Selected Family: <span style={{ color: '#809E33' }}>{activeShadeFamily}</span>
              </div>
              <button
                onClick={() => onOpenQuote()}
                className="btn btn-success"
                style={{ marginTop: '12px', padding: '9px 24px', fontSize: '14px' }}
              >
                Request Sample for This Shade
              </button>
            </div>

            {/* 3. Right Vertical Application Icon Switcher */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e5e7eb',
                background: '#fafafa'
              }}
            >
              {SAMPLE_APPLICATIONS.map((app) => {
                const isSelected = selectedSampleApp === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setSelectedSampleApp(app.id)}
                    title={app.label}
                    aria-label={app.label}
                    style={{
                      height: '64px',
                      width: '66px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isSelected ? activeHex : '#ffffff',
                      color: isSelected ? '#ffffff' : '#4b5563',
                      borderBottom: '1px solid #e5e7eb',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {app.id === 'beverage' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M6 3h12l-1.5 17a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 3z" />
                        <path d="M6.5 8h11" />
                      </svg>
                    )}
                    {app.id === 'dairy' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M8 3h8l2 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7l2-4z" />
                        <path d="M6 7h12" />
                        <path d="M12 3v4" />
                      </svg>
                    )}
                    {app.id === 'confectionery' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M7 12L3 8v8l4-4z" />
                        <path d="M17 12l4-4v8l-4-4z" />
                      </svg>
                    )}
                    {app.id === 'bakery' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 14h14l-1.5 7h-11L5 14z" />
                        <path d="M4 14a4 4 0 0 1 3-3.8A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 5 3.2A4 4 0 0 1 20 14" />
                      </svg>
                    )}
                    {app.id === 'savory' && (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 17h18" />
                        <path d="M5 17a7 7 0 0 1 14 0" />
                        <circle cx="12" cy="8" r="1.5" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          BLOG CARDS SECTION
         =================================================================== */}
      <div className="hm-blog container">
        <h3 className="hm-heading">Blogs</h3>
        <div className="blog-grid">
          {BLOGS.map((b) => (
            <div key={b.id} className="card">
              <img src={b.image} alt={b.title} className="card-img-top" />
              <div className="card-body">
                <small>{b.category}</small>
                <h4 className="card-title">{b.title}</h4>
                <p style={{ fontSize: '14px', color: '#29415E', marginBottom: '15px', textAlign: 'left' }}>
                  {b.excerpt}
                </p>
                <Link to={`/blogs/${b.slug}`} style={{ color: '#809E33', fontWeight: 600, marginTop: 'auto' }}>
                  Read More ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
