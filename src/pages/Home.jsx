import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import HeroSlider from '../components/home/HeroSlider';
import { INDUSTRIES } from '../data/industries';
import { BLOGS, CERTIFICATES } from '../data/blogs';
import { PRODUCTS } from '../data/products';
import { STATS } from '../data/stats';

export default function Home({ onOpenQuote }) {
  const featuredSkus = PRODUCTS.slice(0, 6);

  return (
    <div>
      {/* 1. Animated Food Colors Hero Banner Slider */}
      <HeroSlider onOpenQuote={onOpenQuote} />

      {/* 2. Intro Section (.hm-moderinn) */}
      <div className="container hm-moderinn">
        <div className="hm-moderinn-grid">
          <div>
            <h2>Elevating Biochemistry of Natural Food Colors</h2>
            <p>
              Sodhani Biotech, a pioneering natural color company, is leading the charge to empower natural food colors and challenge the monopoly of synthetic substitutes. What sets us apart is our constant commitment to ongoing improvement. With a cutting-edge laboratory and an experienced research team, we relentlessly enhance our natural food color formulas to offer remarkable results across bakery, beverage, confectionery, dairy, and culinary food applications.
            </p>
            <Link to="/about-us" className="btn btn-success">
              Read More
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
              alt="Elevating Biochemistry of Natural Food Colors"
              style={{ borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>

      {/* 3. Natural Food Color Extracts (.hm-extract - #809E33) */}
      <div className="hm-extract">
        <div className="container">
          <div className="hm-extract-grid">
            <div>
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
                alt="Natural Food Color Extracts"
                style={{ borderRadius: '16px' }}
              />
            </div>
            <div>
              <h2>Natural Food Color Extracts</h2>
              <p>
                Discover the true essence of colour with our exquisite collection of natural food color extracts. These botanical treasures contain colouring compounds, which are extracted through food-grade solvents and spray dried in powder form, ensuring unparalleled quality. Because of their high purity, these extracts have superior solubility in warm water and are simple to use on industrial food & beverage production lines.
              </p>
              <Link to="/products/natural-food-color-extracts" className="btn btn-outline-light">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Ready-to-Use Formulated Colors (.hm-natural - #E3B333) */}
      <div className="hm-natural">
        <div className="container">
          <div className="hm-natural-grid">
            <div>
              <h2>Natural Food Colors</h2>
              <p>
                Formulated ready-to-use color powders crafted specifically for the food & beverage industry. Our natural food colors provide vivid, consistent shade output across manufacturing batches with high thermal, light, and pH stability. Designed as seamless drop-in replacements for synthetic Allura Red and Tartrazine, empowering food brands to transition to clean-label standards.
              </p>
              <Link to="/products/natural-food-colors" className="btn btn-outline-light">
                View Products
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80"
                alt="Natural Food Colors"
                style={{ borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Why Natural Food Colors Grid (.hm-why - #F5F5F5) */}
      <div className="hm-why">
        <div className="container">
          <h3>Why Natural Food Colors</h3>
          <div className="stat-card-grid">
            {STATS.map((stat) => (
              <div key={stat.id} className="bx">
                <strong>{stat.number}</strong>
                <span>{stat.title}</span>
                <p>{stat.desc}</p>
                <div className="text">
                  <div style={{ fontWeight: 600, fontSize: '20px', marginBottom: '10px' }}>{stat.title}</div>
                  <div style={{ fontSize: '15px', lineHeight: '1.5' }}>{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Manifesto Band (.hm-redefining - #9E7A47) */}
      <div className="hm-redefining">
        <div className="container">
          <h3>REDEFINING FOOD COLOR STANDARDS</h3>
          <p>
            We are making natural food colors mainstream. Challenging the legacy monopoly of synthetic coal-tar colorants through high-purity botanical extraction, food-grade laboratory standards, and clean-label compliance for global FMCG manufacturers.
          </p>
          <button className="btn btn-warning" onClick={() => onOpenQuote()}>
            Partner With Us
          </button>
        </div>
      </div>

      {/* 7. Catalog Preview Grid */}
      <div style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h3 className="hm-heading" style={{ margin: 0, textAlign: 'left' }}>Featured Food Color SKUs</h3>
            <Link to="/products" className="btn btn-outline-dark">
              View All {PRODUCTS.length} SKUs
            </Link>
          </div>
          <div className="product-grid">
            {featuredSkus.map((product) => (
              <ProductCard key={product.id} product={product} onSelectQuote={onOpenQuote} />
            ))}
          </div>
        </div>
      </div>

      {/* 8. Industries We Cater To (.hm-industry) */}
      <div className="hm-industry container">
        <h3 className="hm-heading">Industries We Cater To</h3>
        <div className="industry-grid">
          {INDUSTRIES.map((ind) => (
            <figure key={ind.id}>
              <img src={ind.image} alt={ind.title} />
              <div className="defult">{ind.title}</div>
              <div className="ishover">
                <h4 style={{ fontSize: '20px', color: '#fff', fontWeight: 600, marginBottom: '8px' }}>{ind.title}</h4>
                <p>{ind.tagline}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* 9. Workshop Banner (.hm-workshop) */}
      <div className="hm-workshop">
        <div className="container">
          <div className="hm-workshop-grid">
            <div>
              <h3 style={{ fontSize: '32px', color: '#29415E', fontWeight: 400, marginBottom: '15px' }}>
                "Color it Yourself" Application Lab
              </h3>
              <p style={{ marginBottom: '20px' }}>
                Collaborate directly with Sodhani Biotech food scientists. Test target pH fastness, thermal stability, and co-develop custom pantone shades for your food and beverage formulations.
              </p>
              <Link to="/food-lab" className="btn btn-success">
                Book Workshop
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80"
                alt="Food Application Workshop"
                style={{ borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 10. Certificates Strip (.hm-cert) */}
      <div className="hm-cert">
        <div className="container">
          <h3 className="hm-heading" style={{ marginBottom: '15px' }}>Certifications</h3>
          <div className="cert-flex">
            {CERTIFICATES.map((c) => (
              <div key={c.id} className="cert-badge-box">
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11. Blog Cards (.hm-blog) */}
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

      {/* 12. Newsletter Signup Band (.hm-join) */}
      <div className="hm-join">
        <div className="hm-join-inner">
          <h3>Join our circle</h3>
          <p>Subscribe for honest food color formulation guides and clean-label R&D insights.</p>
          <form className="hm-join-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you for joining our circle!"); }}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-warning">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
