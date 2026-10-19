import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Palette,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Globe2,
  FlaskConical,
  Leaf,
  Award,
  Sparkles,
  Beaker,
  Scale,
  Microscope,
  Sprout,
  Check
} from 'lucide-react';
import CertificateStrip from '../components/common/CertificateStrip';
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
      {/* 1. Subpage Hero Banner */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--color-primary-dark)',
          color: '#ffffff',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <span className="eyebrow eyebrow-light">ABOUT SODHANI BIOTECH &bull; OUR STORY & HERITAGE</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '2.8rem', maxWidth: '900px', margin: '0 auto 20px' }}>
            Elevating the Biochemistry of Natural Food Colors
          </h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto', fontSize: '1.25rem', maxWidth: '850px' }}>
            Bringing the same research-led approach that shaped our natural dye extracts to the world of food and beverage coloration.
          </p>

          <div className="subpage-badge-strip">
            <span className="subpage-badge-pill">
              <Sparkles size={15} style={{ color: '#E4B63D' }} /> Decades of Botanical Extraction
            </span>
            <span className="subpage-badge-pill">
              <FlaskConical size={15} style={{ color: '#809E33' }} /> Application-First Formulation
            </span>
            <span className="subpage-badge-pill">
              <Scale size={15} style={{ color: '#E4B63D' }} /> Standardized Batch Consistency
            </span>
            <span className="subpage-badge-pill">
              <Globe2 size={15} style={{ color: '#809E33' }} /> Global Food-Grade Compliance
            </span>
          </div>
        </div>
      </section>

      {/* 2. Section: Our Story */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="feature-row">
            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80"
                alt="Botanical Extraction and Natural Color Pigments"
              />
            </div>

            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>OUR STORY</span>
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
                <Link to="/food-lab" className="btn btn-success">
                  Experience Our Food Application Lab <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </Link>
                <button className="btn btn-outline-dark" onClick={() => onOpenQuote()}>
                  Request Application Shade Match
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

      {/* 5. Section: Sustainability */}
      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div className="feature-row reverse">
            <div className="feature-content">
              <span className="eyebrow" style={{ color: '#809E33' }}>SUSTAINABILITY</span>
              <h2>Colour that respects where it comes from</h2>
              <p>
                Natural sourcing comes with a responsibility we take seriously, to the land the raw materials come from, and to the farmers and communities we source through. We look to build sourcing relationships that are stable and fair over the long run, not transactional one-off purchases.
              </p>
              <p>
                On the production side, we focus on minimising waste in extraction and processing, and on moving toward more resource-efficient methods wherever the technology allows. It’s the same sustainability mindset that has guided our natural dye business from the start, now carried into a new category.
              </p>

              <div style={{ marginTop: '25px' }}>
                <Link to="/sustainability" className="btn btn-primary">
                  Explore Our Sustainability Commitments <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </div>

            <div className="feature-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80"
                alt="Sustainable Agriculture and Raw Material Sourcing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Quality Assurance */}
      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px' }}>
            <span className="eyebrow" style={{ color: '#809E33' }}>QUALITY ASSURANCE</span>
            <h2 className="section-heading">Compliance is the baseline, not the finish line</h2>
            <p className="section-description">
              Every product that leaves our facility is expected to meet food safety and quality benchmarks before it meets a customer’s own specification. We test for colour strength, stability, and purity as standard practice, so manufacturers can formulate with confidence rather than double-checking our numbers.
            </p>
          </div>

          {/* Certifications Display — Fulfilling: [Certifications held — e.g. FSSAI, ISO 22000, Kosher, Halal — to be listed here once confirmed] */}
          <div
            style={{
              background: '#f9fbfd',
              border: '1px solid var(--color-border)',
              borderRadius: '20px',
              padding: '35px 30px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary-dark)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Verified Food-Grade Benchmarks & Religious Dietary Approvals
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
            {/* Card 1: Color Trends */}
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

            {/* Card 2: Explore by Shade */}
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

            {/* Card 3: From Switch to Shelf */}
            <div className="about-diff-card">
              <div className="about-diff-icon">
                <Sparkles size={26} />
              </div>
              <h3 className="about-diff-title">From Switch to Shelf — Technical support for moving off synthetic</h3>
              <p className="about-diff-desc">
                Replacing a synthetic colour isn’t a straight swap. Our technical team works alongside your formulation team through that transition, matching shade, testing stability under your real processing conditions, and troubleshooting before it hits production.
              </p>
              <Link to="/food-lab" className="about-diff-link">
                Technical Co-Development <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 4: Traceability & Availability */}
            <div className="about-diff-card">
              <div className="about-diff-icon">
                <Clock size={26} />
              </div>
              <h3 className="about-diff-title">Traceability & Availability — Know where it comes from, count on it being there</h3>
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
              Request Technical Quote & Samples <ArrowRight size={16} style={{ marginLeft: 6 }} />
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
