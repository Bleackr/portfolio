
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', display: 'flex', flexDirection: 'column', 
      justifyContent: 'center', alignItems: 'flex-start'
    }}>
      <div className="container" style={{ width: '100%' }}>
        <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem', fontSize: '1.2rem' }}>
          Hi, my name is
        </p>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', letterSpacing: '-2px' }}>
          Mikolaj Hyzy.
        </h1>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          I build <span className="text-gradient">digital experiences</span>.
        </h2>
        <p style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.
        </p>
        <Link to="/projects" className="glass" style={{
          display: 'inline-block', padding: '1rem 2.5rem', fontWeight: '600',
          border: '1px solid var(--accent)', color: 'var(--accent)', transition: 'all 0.3s',
          textDecoration: 'none'
        }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'; }}
           onMouseOut={e => { e.currentTarget.style.background = 'var(--glass-bg)'; }}>
          Check out my work
        </Link>
      </div>
    </section>
  );
}
