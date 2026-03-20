import React from 'react';

const projects = [
  { title: 'Project One', desc: 'A modern web application built with React and Vite. Focused on performance and aesthetics.', tech: 'React • CSS' },
  { title: 'Project Two', desc: 'An interactive dashboard showing real-time data analytics with glassmorphism UI.', tech: 'React • D3' },
  { title: 'Project Three', desc: 'A responsive e-commerce storefront with seamless animations and transitions.', tech: 'React • Tailwind' }
];

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
        Featured <span className="text-gradient">Projects</span>
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'
      }}>
        {projects.map((p, i) => (
          <div key={i} className="glass" style={{
            padding: '2rem', transition: 'transform 0.3s ease', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', height: '100%'
          }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
             onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{p.desc}</p>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
