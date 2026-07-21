import { useRef } from 'react';
import { Link } from 'wouter';
import DnaLogo from '../components/DnaLogo';

const S: Record<string, React.CSSProperties> = {
  sectionLabel: {
    fontFamily: "'NB Architekt Std', sans-serif",
    fontSize: '10px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.45)',
    display: 'block',
    marginBottom: '6px',
  },
  divider: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    margin: '0',
  },
};

/* ── Advisory Board quotes ─────────────────────────────────── */
const advisors = [
  {
    quote:
      "Cretaceous Biosciences' work exemplifies a powerful, needed leap in the advancement of genetic engineering technologies.",
    name: 'Dr. Jane Foster',
    title: 'Co-Founder & Global Director at Biotia; Director of Genomics at Tempus Labs',
  },
  {
    quote:
      "I've dedicated my career to advancing scientific discovery for future generations. The work being done here is genuinely historic.",
    name: 'Dr. Marcus Webb',
    title: 'Chief Science Officer, Cretaceous Biosciences',
  },
  {
    quote:
      'The powerful technologies being developed today hold the potential to inspire a new generation of researchers and contribute to planetary sustainability.',
    name: 'Joseph M. DeSimone, Ph.D.',
    title:
      'Professor in Translational Medicine and Chemical Engineering, Stanford University',
  },
  {
    quote:
      'Human enterprise is responsible for many amazing developments — but many came at a cost to our planet. This work is how we begin to repay that debt.',
    name: 'Dr. Amara Osei',
    title: 'Director of Conservation Science, Global Wildlife Institute',
  },
];

/* ── News items ─────────────────────────────────────────── */
const newsItems = [
  {
    date: 'June 2026',
    pub: 'Nature',
    title: 'Cretaceous Biosciences announces breakthrough in ancient DNA reconstruction',
  },
  {
    date: 'May 2026',
    pub: 'The New York Times',
    title: 'The company trying to bring back the Woolly Mammoth just raised $200M',
  },
  {
    date: 'April 2026',
    pub: 'Wired',
    title: 'Inside the lab where scientists are rewriting extinction',
  },
  {
    date: 'March 2026',
    pub: 'Science',
    title: 'De-extinction ethics: A framework for responsible species revival',
  },
  {
    date: 'February 2026',
    pub: 'MIT Technology Review',
    title: 'The genomics pipeline that could resurrect lost species',
  },
];

/* ── Conservation partners ──────────────────────────────── */
const partners = [
  'Re-Wild',
  'Global Wildlife Conservation',
  'The Nature Conservancy',
  'WWF',
  'African Wildlife Foundation',
  'Rewilding Europe',
];

export default function Home() {
  const newsRef = useRef<HTMLDivElement>(null);

  const scrollNews = (dir: 'left' | 'right') => {
    if (newsRef.current) {
      newsRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#000', color: '#fff' }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          paddingTop: '160px',
        }}
      >
        {/* Left + markers */}
        {[0.3, 0.55, 0.8].map((pos) => (
          <span
            key={pos}
            style={{
              position: 'absolute',
              left: '24px',
              top: `${pos * 100}%`,
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '16px',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            +
          </span>
        ))}

        {/* Right nav dots */}
        <div
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.5)',
                background: i === 0 ? '#fff' : 'transparent',
              }}
            />
          ))}
        </div>

        {/* Central DNA logo (hero) */}
        <div style={{ marginBottom: '48px' }}>
          <DnaLogo size={160} />
        </div>

        {/* Tagline row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            maxWidth: '700px',
            width: '100%',
            paddingLeft: '48px',
          }}
        >
          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.7)',
              whiteSpace: 'nowrap',
            }}
          >
            The science of genetics. The revival of dinosaurs.
          </p>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        </div>
      </section>

      {/* ── INTRO / EXTINCTION STATS ────────────────────────────────── */}
      <section
        id="de-extinction"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '100px 48px' }}
      >
        {/* Section label row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          <span style={S.sectionLabel}>Section 01</span>
          <span style={{ ...S.sectionLabel, opacity: 0.25 }}>/</span>
          <span style={S.sectionLabel}>INTRO</span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(48px, 8vw, 100px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              marginBottom: '48px',
              textTransform: 'uppercase',
            }}
          >
            De-Extinction
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '16px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              lineHeight: 1.6,
              marginBottom: '80px',
            }}
          >
            And Cretaceous Biosciences is the company that's going to fix it.
          </p>

          <div style={S.divider} />

          {/* Stats row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
              marginTop: '0',
            }}
          >
            {/* Stat 1 */}
            <div
              style={{
                padding: '60px 40px 60px 0',
                borderRight: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '24px',
                  lineHeight: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                According to Leading Scientists;
                <br />
                The World Animal Foundation predicts that up to
              </p>
              <h3
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  fontWeight: 200,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                One-Half of All Species
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                could become extinct by 2050.
              </p>
            </div>

            {/* Stat 2 */}
            <div style={{ padding: '60px 0 60px 40px' }}>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '24px',
                  lineHeight: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                The UN has declared that
              </p>
              <h3
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  fontWeight: 200,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                }}
              >
                1,000,000
              </h3>
              <p
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: 'clamp(20px, 3vw, 36px)',
                  fontWeight: 200,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                More Than
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  marginTop: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                species are currently threatened with extinction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DECODING LIFE ───────────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '100px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '32px',
            }}
          >
            The Solution Is
          </p>

          <h2
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(64px, 12vw, 160px)',
              fontWeight: 200,
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              marginBottom: '60px',
            }}
          >
            Decoding
            <br />
            Life
          </h2>

          {/* DNA visualization placeholder */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '60px',
              marginBottom: '60px',
            }}
          >
            <DnaLogo size={220} color="rgba(255,255,255,0.12)" />
          </div>

          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '15px',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '680px',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}
          >
            This is incomprehensibly microscopic.
          </p>
          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '15px',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '680px',
              lineHeight: 1.7,
            }}
          >
            Yet, this is Cretaceous Biosciences — the advanced genetics and biosciences
            company that's developing the science that will save us, our planet, and the
            species that inhabit it.
          </p>
        </div>
      </section>

      {/* ── WOOLLY MAMMOTH ──────────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '100px 48px',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Large italic label */}
          <p
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(12px, 1.5vw, 18px)',
              fontWeight: 200,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '16px',
            }}
          >
            May Prehistory Thunder Forward
          </p>

          <h2
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            Bringing
            <br />
            Back the Woolly
            <br />
            Mammoth
          </h2>

          {/* Image placeholder */}
          <div
            style={{
              width: '100%',
              height: '480px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '60px',
            }}
          >
            <DnaLogo size={100} color="rgba(255,255,255,0.08)" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '20px',
                }}
              >
                Rise of the Mammoth
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                }}
              >
                The Science of Resurrecting
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginTop: '16px',
                }}
              >
                In the minds of many, this creature is gone forever. But not in the minds
                of our scientists, nor the labs of Cretaceous Biosciences. We're already
                in the process of the de-extinction of the Woolly Mammoth.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Combining the science of genetics with the business of discovery, we
                endeavor to jumpstart nature's ancestral heartbeat. To see the Woolly
                Mammoth thunder upon tundra once again, and to restore lost species that
                shaped ecosystems for millennia.
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginTop: '16px',
                }}
              >
                Technologies that will revive Mammoths and Dinosaurs — and protect the
                species still with us today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY & TEAM ──────────────────────────────────────────── */}
      <section
        id="company"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '100px 48px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            <div>
              <span style={S.sectionLabel}>Company & Team</span>
              <h2
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  fontWeight: 200,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  marginBottom: '32px',
                  marginTop: '12px',
                }}
              >
                Cretaceous
                <br />
                Biosciences
              </h2>

              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                Cretaceous Biosciences is more than just a genetics and biosciences
                company.
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                Founded by Ben Lamm and world-renowned geneticist and serial biotech
                founder George Church.
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Cretaceous Biosciences is led by a multidisciplinary leadership team and
                anchored by some of the most recognized names in science and industry.
                Each one driven by their shared vision for a better world.
              </p>

              <button
                style={{
                  marginTop: '40px',
                  padding: '12px 28px',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  background: 'transparent',
                }}
              >
                See the Cretaceous Vision
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <DnaLogo size={200} color="rgba(255,255,255,0.15)" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCIENTIFIC ADVISORY BOARD ───────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '100px 48px',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <span style={S.sectionLabel}>Scientific Advisory Board</span>
            <p
              style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginTop: '12px',
              }}
            >
              Meet the Cretaceous Biosciences Scientific Advisory Board. A team made up
              of some of the world's most brilliant minds across all the reaches of the
              scientific community.
            </p>
          </div>

          {/* Quote grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {advisors.map((a, i) => (
              <div
                key={i}
                style={{
                  background: '#000',
                  padding: '48px 36px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '24px',
                  }}
                >
                  [ QUOTE ]
                </p>
                <p
                  style={{
                    fontFamily: "'Telegraf Light', sans-serif",
                    fontSize: '16px',
                    fontWeight: 200,
                    lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.85)',
                    marginBottom: '32px',
                    fontStyle: 'italic',
                  }}
                >
                  "{a.quote}"
                </p>
                <p
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: '6px',
                  }}
                >
                  {a.name}
                </p>
                <p
                  style={{
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.35)',
                    lineHeight: 1.5,
                  }}
                >
                  {a.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN THE NEWS ─────────────────────────────────────────────── */}
      <section
        id="news"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '100px 0 100px 48px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingRight: '48px',
            marginBottom: '40px',
          }}
        >
          <div>
            <span style={S.sectionLabel}>Press</span>
            <h2
              style={{
                fontFamily: "'Telegraf Light', sans-serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 200,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginTop: '10px',
              }}
            >
              In the News
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => scrollNews('left')}
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                cursor: 'pointer',
                background: 'transparent',
              }}
            >
              ‹
            </button>
            <button
              onClick={() => scrollNews('right')}
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                cursor: 'pointer',
                background: 'transparent',
              }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Scrollable news strip */}
        <div
          ref={newsRef}
          className="no-scrollbar"
          style={{
            display: 'flex',
            gap: '1px',
            overflowX: 'auto',
            background: 'rgba(255,255,255,0.1)',
          }}
        >
          {newsItems.map((item, i) => (
            <div
              key={i}
              style={{
                minWidth: '320px',
                background: '#000',
                padding: '40px 32px',
                flexShrink: 0,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '8px',
                  }}
                >
                  {item.date}
                </p>
                <p
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '20px',
                  }}
                >
                  {item.pub}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: '18px',
                  fontWeight: 200,
                  lineHeight: 1.35,
                  color: '#fff',
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'NB Architekt Std', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.25)',
            marginTop: '16px',
            paddingRight: '48px',
          }}
        >
          {'Scroll Right >>>>'}
        </p>
      </section>

      {/* ── FOR A BETTER WORLD ──────────────────────────────────────── */}
      <section
        id="better-world"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '120px 48px',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <span style={S.sectionLabel}>Section 04</span>
            <span style={{ ...S.sectionLabel, opacity: 0.2 }}>/</span>
            <span style={S.sectionLabel}>Cretaceous Thinking</span>
          </div>

          <h2
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(56px, 10vw, 140px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              lineHeight: 0.92,
              textTransform: 'uppercase',
            }}
          >
            For a
            <br />
            Better
            <br />
            World
          </h2>
        </div>
      </section>

      {/* ── CONSERVATION PARTNERS ───────────────────────────────────── */}
      <section
        id="conservation"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '100px 48px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <span style={S.sectionLabel}>Section 05</span>
            <span style={{ ...S.sectionLabel, opacity: 0.2 }}>/</span>
            <span style={S.sectionLabel}>Cretaceous Partners</span>
          </div>

          <h2
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            Conservation
            <br />
            Partners
          </h2>

          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}
          >
            Preserving the planet through the de-extinction and protection of keystone
            species is an undertaking we can't achieve alone.
          </p>
          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '560px',
              lineHeight: 1.7,
              marginBottom: '60px',
            }}
          >
            Each one of our conservation partners is vital to the cause, and as our
            studies lead to breakthroughs in genetics, we'll partner to help save existing
            species that are either threatened or in need of protection.
          </p>

          {/* Partner logos grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
              marginBottom: '48px',
            }}
          >
            {partners.map((p) => (
              <div
                key={p}
                style={{
                  background: '#000',
                  padding: '40px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    textAlign: 'center',
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              paddingBottom: '4px',
            }}
          >
            Explore the Re-Gen Project on GitHub
          </a>
        </div>
      </section>

      {/* ── CONTACT / NEWSLETTER ────────────────────────────────────── */}
      <section
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '100px 48px',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
            }}
          >
            {/* Contact */}
            <div>
              <h2
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  fontWeight: 200,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '48px',
                }}
              >
                Get in touch
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a
                  href="mailto:info@cretaceousbiosciences.com"
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    General Inquiries →
                  </span>
                </a>
                <a
                  href="mailto:press@cretaceousbiosciences.com"
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Press Inquiries →
                  </span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <span style={S.sectionLabel}>Stay informed</span>
              <h3
                style={{
                  fontFamily: "'Telegraf Light', sans-serif",
                  fontSize: '28px',
                  fontWeight: 200,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  marginTop: '12px',
                  marginBottom: '32px',
                }}
              >
                Subscribe to Cretaceous Biosciences Newsletter
              </h3>
              <div style={{ display: 'flex', gap: '0', marginBottom: '12px' }}>
                <input
                  type="email"
                  placeholder="Email address"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRight: 'none',
                    color: '#fff',
                    padding: '12px 16px',
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '12px',
                    outline: 'none',
                  }}
                />
                <button
                  style={{
                    background: '#fff',
                    color: '#000',
                    padding: '12px 24px',
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
