import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ position: 'fixed', top: '1rem', left: 0, right: 0, zIndex: 100 }}>
      <div className="container">
        <header className="glass" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '1rem 2rem'
        }}>
          <div style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>MH.</Link>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: '600', fontSize: '0.9rem' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
