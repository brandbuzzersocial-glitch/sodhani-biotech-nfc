import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Palette,
  CheckCircle2,
  ArrowRight,
  Clock,
  Globe2,
  FlaskConical,
  Sparkles,
  Scale,
  Check,
  Microscope,
  Factory,
  ShieldCheck
} from 'lucide-react';
import { CERTIFICATES } from '../data/blogs';

export default function AboutUs({ onOpenQuote }) {
  const applicationCategories = [
    { name: 'Beverages', note: 'Acidic clarity & light stability' },
    { name: 'Bakery', note: 'High-heat oven tolerance' },
    { name: 'Confectionery', note: 'Vivid hues in jellies & hard candies' },
    { name: 'Dairy', note: 'Homogeneous yogurt & ice cream dispersion' },
    { name: 'Savory', note: 'Salt, oil & extrusion stability' }
  ];

  return (
    <div>
      {/* ===================================================================
          PART 13: CREATIVE EDITORIAL HERO BANNER FOR "OUR STORY"
          (Consolidating About Us, Quality & Infrastructure)
         =================================================================== */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #162638 0%, #213750 52%, #29415E 100%)',
          color: '#ffffff',
          padding: '76px 0 84px',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Decorative Botanical Radial Glows */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(128,158,51,0.28) 0%, rgba(128,158,51,0) 70%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-140px',
            left: '-80px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(228,182,61,0.20) 0%, rgba(228,182,61,0) 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ maxWidth: '1160px', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '48px',
              alignItems: 'center'
            }}
            className="about-creative-hero-grid"
          >
            {/* Left Column: Editorial Headline, Section Jump Pills & Trust Badges */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(228, 182, 61, 0.14)',
                  border: '1px solid rgba(228, 182, 61, 0.4)',
                  color: '#E4B63D',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}
              >
                <Sparkles size={14} /> ABOUT SODHANI BIOTECH • OUR STORY, QUALITY &amp; INFRASTRUCTURE
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  margin: '0 0 18px 0'
                }}
              >
                Elevating the{' '}
                <span style={{ color: '#A3C644' }}>Biochemistry</span> of Natural Food Colors
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.65,
                  color: '#d6e2ec',
                  margin: '0 0 28px 0',
                  maxWidth: '600px'
                }}
              >
                Bringing the same research-led approach that shaped our natural dye extracts to the world of food and beverage coloration—backed by our Jaipur extraction plant and 3 specialized analytical labs.
              </p>

              {/* Quick Section Jump Navigation Pills (About Us, Quality, Infrastructure) */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <a
                  href="#our-story"
                  style={{
                    background: '#809E33',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  01. Our Story &amp; Heritage
                </a>
                <a
                  href="#quality"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <ShieldCheck size={16} style={{ color: '#E4B63D' }} /> 02. Quality &amp; Certifications
                </a>
                <a
                  href="#infrastructure"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Factory size={16} style={{ color: '#A3C644' }} /> 03. Infrastructure &amp; Labs
                </a>
              </div>

              {/* 4 Pillar Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13.5px',
                    fontWeight: 600
                  }}
                >
                  <Sparkles size={16} style={{ color: '#E4B63D', flexShrink: 0 }} />
                  Decades of Botanical Extraction
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13.5px',
                    fontWeight: 600
                  }}
                >
                  <FlaskConical size={16} style={{ color: '#A3C644', flexShrink: 0 }} />
                  Application-First Formulation
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13.5px',
                    fontWeight: 600
                  }}
                >
                  <Scale size={16} style={{ color: '#E4B63D', flexShrink: 0 }} />
                  Standardized Batch Consistency
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '12px',
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13.5px',
                    fontWeight: 600
                  }}
                >
                  <Globe2 size={16} style={{ color: '#A3C644', flexShrink: 0 }} />
                  Global Food-Grade Compliance
                </div>
              </div>
            </div>

            {/* Right Column: Staggered Botanical & Lab Collage with Metric Callouts */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      height: '200px',
                      border: '2px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 14px 30px rgba(0,0,0,0.25)'
                    }}
                  >
                    <img
                      src="/home/jaipur-lab.jpg"
                      alt="Jaipur Botanical Extraction Lab"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '18px',
                      padding: '18px 20px'
                    }}
                  >
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#E4B63D' }}>50,000 sq. ft.</div>
                    <div style={{ fontSize: '13px', color: '#e2e8f0', marginTop: '2px' }}>
                      Jaipur Extraction &amp; Spray Drying Facility
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                  <div
                    style={{
                      background: 'rgba(128, 158, 51, 0.25)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(163, 198, 68, 0.4)',
                      borderRadius: '18px',
                      padding: '18px 20px'
                    }}
                  >
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#A3C644' }}>1,500+ MT</div>
                    <div style={{ fontSize: '13px', color: '#e2e8f0', marginTop: '2px' }}>
                      Annual Natural Food Color Capacity
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      height: '210px',
                      border: '2px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 14px 30px rgba(0,0,0,0.25)'
                    }}
                  >
                    <img
                      src="/home/water-soluble.jpg"
                      alt="Water-Soluble Botanical Extracts"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 1: OUR STORY (#our-story)
         =================================================================== */}
      <section id="our-story" className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80"
                alt="Botanical Extraction and Natural Color Pigments"
              />
            </div>

            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>01 • OUR STORY</span>
              <h2>From natural dyes to natural food colors</h2>
              <p>
                Sodhani Biotech was built on a simple belief: that colour derived from nature can match, and often exceed, what synthetic alternatives offer. That belief first took shape in the world of natural dyes, where years of research into plant and botanical extraction allowed us to build a trusted, research-backed colour business for the textile industry.
              </p>
              <p>
                As that expertise matured, it became clear the same science, the same extraction know-how, and the same commitment to consistency had a natural next step: food and beverage coloration. The underlying biochemistry of colour doesn’t change between a dyed fabric and a coloured beverage, what changes is the application, the compliance bar, and the precision required.
              </p>
              <p>
                That’s the chapter we’re writing now: taking everything we’ve learned building a natural colour company from the ground up, and applying it to help food and beverage manufacturers move away from synthetic dependency, without compromising on performance.
              </p>

              <div className="about-quote-box">
                "The underlying biochemistry of colour doesn’t change between a dyed fabric and a coloured beverage; what changes is the application, the compliance bar, and the precision required."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Who We Are */}
      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div className="feature-row reverse">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                alt="Sodhani Biotech Biochemistry and Food Lab Team"
              />
            </div>

            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#9E7A47' }}>WHO WE ARE</span>
              <h2>A team rooted in biochemistry and sourcing expertise</h2>
              <p>
                We are a team of researchers, sourcing specialists, and food technologists who find genuine curiosity in nature’s colour palette. We source, develop, and supply natural food colors for beverages, bakery, confectionery, dairy, and savory applications, with every stage, from raw material sourcing to final formulation, built around reliability, consistency, and compliance.
              </p>

              <div style={{ marginTop: '25px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                  Tailored Across 5 Core Food Applications:
                </h4>
                <div className="category-tag-list">
                  {applicationCategories.map((cat, idx) => (
                    <span key={idx} className="category-tag">
                      <Check size={14} style={{ color: '#809E33' }} />
                      <strong>{cat.name}</strong> &bull; {cat.note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Technology */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>TECHNOLOGY</span>
              <h2>Precision-led, science-backed colour</h2>
              <p>
                Our strength lies in direct access to quality raw materials, deep technical know-how, and a hands-on approach to product development. Extraction, stabilisation, and formulation are treated as a continuous research problem, not a fixed recipe, which is what allows us to hold colour strength and shade consistent from batch to batch.
              </p>
              <p>
                We work closely with customers to find the right colour solution for their specific application and processing conditions (pH, heat stability, shelf life), rather than offering one formulation for every use case. That application-first approach is what separates a usable natural colour from a merely available one.
              </p>

              <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button className="btn btn-success" onClick={() => onOpenQuote()}>
                  Request Application Shade Match <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </button>
              </div>
            </div>

            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80"
                alt="Precision Extraction Technology and Science-Backed Formulation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 2: QUALITY ASSURANCE & CERTIFICATIONS (#quality)
         =================================================================== */}
      <section id="quality" className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px' }}>
            <span className="eyebrow" style={{ color: '#809E33' }}>02 • QUALITY &amp; REGULATORY COMPLIANCE</span>
            <h2 className="section-heading">Compliance is the baseline, not the finish line</h2>
            <p className="section-description">
              Every product that leaves our facility is expected to meet food safety and quality benchmarks before it meets a customer’s own specification. We test for colour strength, stability, and purity as standard practice, so manufacturers can formulate with confidence rather than double-checking our numbers.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: '35px 30px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Verified Food-Grade Benchmarks &amp; Religious Dietary Approvals
              </span>
            </div>

            <div className="certificate-strip">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="cert-badge">
                  <CheckCircle2 size={20} />
                  <div>
                    <div style={{ fontWeight: 700 }}>{cert.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                      {cert.code}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '14px', color: '#7a8b9e' }}>
              Standard COA (Certificate of Analysis), HPLC assay spectra, MSDS, and allergen statements are provided with every production lot.
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3: INFRASTRUCTURE & FACILITIES (#infrastructure)
         =================================================================== */}
      <section id="infrastructure" className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
            <span className="eyebrow" style={{ color: '#809E33' }}>03 • INFRASTRUCTURE &amp; FACILITIES</span>
            <h2 className="section-heading">Manufacturing &amp; R&amp;D Powerhouse in Jaipur</h2>
            <p className="section-description">
              State-of-the-art botanical extraction plant, cleanroom drying towers, and 3 specialized analytical laboratories in Jaipur, India.
            </p>
          </div>

          <div className="feature-row">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80"
                alt="Extraction Facilities"
              />
            </div>
            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>HIGH-CAPACITY PLANT</span>
              <h2>Botanical Solvent Extraction &amp; Spray Drying</h2>
              <p>
                Our 50,000 sq. ft. manufacturing facility houses automated counter-current extraction units, falling-film evaporators, and sanitary spray drying towers capable of producing over 1,500 Metric Tons of food-grade natural color powders annually.
              </p>
              <p>
                To ensure maximum pigment retention and thermal stability, our spray drying towers operate under strict low-temperature, vacuum-assisted conditions. This protects heat-sensitive compounds like Anthocyanins and Betalains, resulting in superior color vibrancy and extended shelf-life for your final application.
              </p>
            </div>
          </div>

          <div className="feature-row reverse" style={{ marginTop: '5rem' }}>
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                alt="R&D Lab"
              />
            </div>
            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>3 SPECIALIZED LABS</span>
              <h2>Analytical Chemistry &amp; Quality Control</h2>
              <p>
                Quality is non-negotiable in food ingredients. Our three dedicated on-site laboratories (Analytical, Microbiological, and Applications) ensure that every batch meets stringent international standards.
              </p>
              <p>
                We are equipped with advanced High-Performance Liquid Chromatography (HPLC) to measure active pigment concentrations precisely, alongside Gas Chromatography-Mass Spectrometry (GC-MS) to screen for pesticide residues. Every batch undergoes rigorous microbial and heavy metal testing, ensuring complete food safety before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: What Makes Us Different */}
      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            <span className="eyebrow" style={{ color: '#E4B63D' }}>WHAT MAKES US DIFFERENT</span>
            <h2 className="section-heading">Beyond the colour itself</h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              Four core operational commitments that transform natural pigment supply from transactional ordering into an enduring manufacturing partnership.
            </p>
          </div>

          <div className="about-diff-grid">
            <div className="about-diff-card">
              <div className="about-diff-icon">
                <TrendingUp size={26} />
              </div>
              <h3 className="about-diff-title">Color Trends — What’s shaping the shelf, every year</h3>
              <p className="about-diff-desc">
                We track what’s moving across beverages, bakery, and confectionery shelves globally, and translate that into a short colour trends outlook each year, which shades are gaining traction, and where natural colour is replacing synthetic fastest.
              </p>
              <Link to="/blogs" className="about-diff-link">
                Explore Market Trends <ArrowRight size={15} />
              </Link>
            </div>

            <div className="about-diff-card">
              <div className="about-diff-icon">
                <Palette size={26} />
              </div>
              <h3 className="about-diff-title">Explore by Shade — Find your colour, not just your category</h3>
              <p className="about-diff-desc">
                Browse our range the way you’d pick a shade, not a spec sheet: reds, oranges, yellows, greens, blues, and purples, each with the botanical sources behind them and the applications they perform best in.
              </p>
              <Link to="/products" className="about-diff-link">
                Browse by Shade <ArrowRight size={15} />
              </Link>
            </div>

            <div className="about-diff-card">
              <div className="about-diff-icon">
                <Sparkles size={26} />
              </div>
              <h3 className="about-diff-title">From Switch to Shelf — Technical support for moving off synthetic</h3>
              <p className="about-diff-desc">
                Replacing a synthetic colour isn’t a straight swap. Our technical team works alongside your formulation team through that transition, matching shade, testing stability under your real processing conditions, and troubleshooting before it hits production.
              </p>
              <Link to="/contact" className="about-diff-link">
                Technical Co-Development <ArrowRight size={15} />
              </Link>
            </div>

            <div className="about-diff-card">
              <div className="about-diff-icon">
                <Clock size={26} />
              </div>
              <h3 className="about-diff-title">Traceability &amp; Availability — Know where it comes from, count on it being there</h3>
              <p className="about-diff-desc">
                Every batch is traceable back to its raw material source. And because natural sourcing can be seasonal, we plan our supply around year-round availability, so a shade you qualify today isn’t unavailable six months from now.
              </p>
              <Link to="/contact" className="about-diff-link">
                Inquire Supply Security <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section: Global Reach */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80"
                alt="Global Sourcing and Export Logistics for Food Colors"
              />
            </div>

            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>GLOBAL REACH</span>
              <h2>Built to serve manufacturers, wherever they are</h2>
              <p>
                Backed by years of industry experience, our natural food colour solutions serve manufacturers across multiple categories and markets. Our sourcing and distribution capabilities are built to support both regional buyers and larger supply requirements, ensuring the same quality standard reaches every customer, wherever they are.
              </p>
              <p>
                From boutique artisan processors to international FMCG brands, we supply complete export documentation, rapid custom clearance support, and climate-controlled freight across Europe, North America, the Middle East, and Asia-Pacific.
              </p>

              <div style={{ marginTop: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button className="btn btn-warning" onClick={() => onOpenQuote()}>
                  Inquire for Global Supply <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </button>
                <Link to="/contact" className="btn btn-outline-dark">
                  Contact Our Export Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. High-Conversion Bottom CTA Banner */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--color-primary-dark)',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span className="eyebrow eyebrow-light">PARTNER WITH SODHANI BIOTECH</span>
          <h2 className="section-heading section-heading-light" style={{ fontSize: '2.5rem' }}>
            Ready to Reformulate for Clean Label Success?
          </h2>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto 2.5rem', maxWidth: '750px' }}>
            Request technical sample packs, test custom shades in our formulation lab, or talk with our food scientists about transitioning off synthetic colours without compromising on performance.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-warning" onClick={() => onOpenQuote()}>
              Request Technical Quote &amp; Samples <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </button>
            <Link to="/products" className="btn btn-outline-light">
              Explore Our Natural Color Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
