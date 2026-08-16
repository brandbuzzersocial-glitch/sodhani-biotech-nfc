import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { BLOGS } from '../data/blogs';

export function Blogs() {
  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">FOOD SCIENCE & CLEAN LABEL JOURNAL</span>
          <h1 className="section-heading section-heading-light" style={{ fontSize: '3rem' }}>Articles & Insights</h1>
          <p className="section-description" style={{ color: '#d0ddd4', margin: '0 auto' }}>
            Technical whitepapers, market trends, and formulation guides from Sodhani Biotech's food biochemistry lab.
          </p>
        </div>
      </section>

      <section className="section-padding-lg" style={{ backgroundColor: 'var(--color-bg-linen)' }}>
        <div className="container">
          <div className="blog-grid">
            {BLOGS.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-card-img">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">{blog.category} • {blog.readTime}</div>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>
                  <Link to={`/blogs/${blog.slug}`} className="blog-card-link">
                    Read Full Article <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogDetail() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug) || BLOGS[0];

  return (
    <div>
      <div style={{ backgroundColor: 'var(--color-bg-warm)', padding: '1rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <Link to="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
        </div>
      </div>

      <section className="section-padding-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="eyebrow">{blog.category}</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '1rem', lineHeight: 1.2 }}>
            {blog.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
            <span><Calendar size={14} style={{ display: 'inline', marginRight: 4 }} /> {blog.date}</span>
            <span><Clock size={14} style={{ display: 'inline', marginRight: 4 }} /> {blog.readTime}</span>
            <span><User size={14} style={{ display: 'inline', marginRight: 4 }} /> Sodhani R&D Lab</span>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem' }}>
            <img src={blog.image} alt={blog.title} style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} />
          </div>

          <div
            style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-main)' }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
    </div>
  );
}
