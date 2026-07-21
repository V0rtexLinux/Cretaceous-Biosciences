import { Link } from 'wouter';
import DnaLogo from './DnaLogo';

const footerLinks = [
  { label: 'De-Extinction', href: '/de-extinction' },
  { label: 'Dinosaur Program', href: '/dinosaur-program' },
  { label: 'Species Index', href: '/species' },
  { label: 'Conservation', href: '/conservation' },
  { label: 'Science & Technology', href: '/science' },
  { label: 'A Better World', href: '/better-world' },
  { label: 'Company', href: '/company' },
  { label: 'Labs', href: '/labs' },
  { label: 'News', href: '/news' },
  { label: 'Download', href: '/download' },
];

const legalLinks = ['Terms of Use', 'Advisors', 'Privacy Policy', 'Careers at Cretaceous Biosciences'];

const socialLinks = ['Instagram', 'Facebook', 'GitHub Re-Gen', 'YouTube'];

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontFamily: "'NB Architekt Std', sans-serif",
    fontSize: '11px',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'color 0.2s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  return (
    <footer
      style={{
        background: '#000',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        padding: '60px 48px 40px',
      }}
    >
      {/* Top: Logo + Contact + Newsletter */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '60px',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <div>
          <DnaLogo size={80} />
        </div>

        {/* Contact links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a
            href="mailto:info@cretaceousbiosciences.com"
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            For General Inquiries
          </a>
          <a
            href="mailto:press@cretaceousbiosciences.com"
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            For Press Inquiries
          </a>
          <a
            href="#"
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            Re-Gen Project on GitHub
          </a>
        </div>

        {/* Newsletter */}
        <div style={{ maxWidth: '340px', width: '100%' }}>
          <p
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '16px',
            }}
          >
            Subscribe to Cretaceous Biosciences Newsletter
          </p>
          <div style={{ display: 'flex', gap: '0' }}>
            <input
              type="email"
              placeholder="Email address"
              style={{
                flex: 1,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '10px 14px',
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '12px',
                outline: 'none',
              }}
            />
            <button
              style={{
                background: '#fff',
                color: '#000',
                padding: '10px 20px',
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                border: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </button>
          </div>
          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '10px',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '8px',
              lineHeight: 1.5,
            }}
          >
            After signing up, you may also receive occasional surveys and special topical emails from Cretaceous Biosciences.{' '}
            <a href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px' }} />

      {/* Nav links */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px 28px',
          marginBottom: '24px',
        }}
      >
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.href} style={linkStyle}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Legal + Social */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px 28px',
          marginBottom: '40px',
        }}
      >
        {legalLinks.map((link) => (
          <a key={link} href="#" style={linkStyle}>
            {link}
          </a>
        ))}
        <span style={{ color: 'rgba(255,255,255,0.1)', alignSelf: 'center' }}>|</span>
        {socialLinks.map((link) => (
          <a key={link} href="#" style={linkStyle}>
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <p
          style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.04em',
          }}
        >
          Copyright © 2026 Cretaceous Biosciences. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.04em',
          }}
        >
          Site by Maven Creative
        </p>
      </div>
    </footer>
  );
}
