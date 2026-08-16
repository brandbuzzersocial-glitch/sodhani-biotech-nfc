import React from 'react';
import { Sparkles, ShieldCheck, Leaf, Award } from 'lucide-react';
import { STATS } from '../../data/stats';

const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  Award: Award
};

export default function StatGrid() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="eyebrow">Why Natural Food Color</span>
          <h2 className="section-heading">Because Healthy Food Starts with Honest Color</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Transforming industrial food processing through scientific botanical extraction, clean-label compliance, and sustainable agricultural sourcing.
          </p>
        </div>

        <div className="stat-grid">
          {STATS.map((stat) => {
            const IconComp = iconMap[stat.icon] || ShieldCheck;
            return (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">
                  <IconComp size={26} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
