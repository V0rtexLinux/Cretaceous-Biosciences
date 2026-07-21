import { Link } from 'wouter';
import DnaLogo from './DnaLogo';

const navColumns = [
  [
    { num: '01', label: 'DE-EXTINCTION', href: '/de-extinction' },
    { num: '02', label: 'DINOSAUR PROGRAM', href: '/dinosaur-program' },
  ],
  [
    { num: '03', label: 'SPECIES INDEX', href: '/species' },
    { num: '04', label: 'CONSERVATION', href: '/conservation' },
  ],
  [
    { num: '05', label: 'SCIENCE & TECHNOLOGY', href: '/science' },
    { num: '06', label: 'A BETTER WORLD', href: '/better-world' },
  ],
  [
    { num: '07', label: 'COMPANY', href: '/company' },
    { num: '08', label: 'LABS', href: '/labs' },
  ],
];

export default function NavHeader() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#000',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        height: '160px',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <DnaLogo size={95} />
      </Link>

      {/* Small dot indicator */}
      <div
        style={{
          width: 5,
          height: 5,
          background: '#fff',
          marginLeft: 14,
          flexShrink: 0,
        }}
      />

      {/* Nav columns */}
      <nav
        style={{
          display: 'flex',
          marginLeft: 'auto',
          height: '100%',
        }}
      >
        {navColumns.map((col, colIdx) => (
          <div
            key={colIdx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '10px',
              padding: '0 22px',
              borderLeft: '1px solid rgba(255,255,255,0.15)',
              minWidth: colIdx === 1 ? 180 : 150,
            }}
          >
            {col.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '4px',
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  opacity: 0.9,
                  whiteSpace: 'nowrap',
                  lineHeight: 1.2,
                  textDecoration: 'none',
                }}
              >
                <span style={{ opacity: 0.5, fontSize: '9px' }}>{item.num}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        ))}

        {/* DOWNLOAD + NEWS buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderLeft: '1px solid rgba(255,255,255,0.15)',
            padding: '0 20px',
            gap: '20px',
          }}
        >
          <Link
            href="/download"
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            DOWNLOAD
          </Link>
          <Link
            href="/news"
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#fff',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            NEWS
          </Link>
        </div>
      </nav>
    </header>
  );
}
