import React from 'react';

export default function Header() {
  return (
    <div style={{ position: 'fixed', top: '1rem', left: 0, right: 0, zIndex: 100 }}>
      <div className="container">
        <header className="glass" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '1rem 2rem'
        }}>
          <div style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
            MH.
          </div>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: '600', fontSize: '0.9rem' }}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </div>
    </div>
  );
}
