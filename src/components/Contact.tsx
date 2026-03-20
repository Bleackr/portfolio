

export default function Contact() {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What's Next?</h2>
      <h3 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '2rem' }}>Get In Touch</h3>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:hello@example.com" className="glass" style={{
        display: 'inline-block', padding: '1.25rem 3rem', fontWeight: '800',
        fontSize: '1.1rem', transition: 'all 0.3s'
      }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
         onMouseOut={e => e.currentTarget.style.background = 'var(--glass-bg)'}>
        Say Hello
      </a>
    </section>
  );
}
