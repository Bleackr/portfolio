

export default function About() {
  return (
    <section id="about" className="container">
      <div className="glass" style={{ padding: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          About <span className="text-gradient">Me</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
          <div style={{ flex: '1 1 400px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Hello! I'm Mikolaj, a passionate developer who loves creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about browsers!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at various exciting companies. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Recent Technologies:</h3>
            <ul style={{ 
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', 
              listStylePosition: 'inside', color: 'var(--text-secondary)', listStyleType: 'none', padding: 0
            }}>
              <li>▹ JavaScript (ES6+)</li>
              <li>▹ React</li>
              <li>▹ Node.js</li>
              <li>▹ CSS/Sass</li>
              <li>▹ TypeScript</li>
              <li>▹ Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
