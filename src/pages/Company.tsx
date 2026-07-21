import { Link } from 'wouter';

export default function Company() {
  return (
    <div style={{
      background: '#000',
      color: '#fff',
      fontFamily: "'NB Architekt Light', sans-serif",
      minHeight: '100vh',
    }}>

      {/* Hero */}
      <section style={{ padding: '80px 48px' }}>
        <Link href="/">
          <button style={{
            display: 'inline-block', padding: '8px 20px',
            border: '1px solid rgba(255,255,255,0.4)', color: '#fff',
            fontFamily: "'NB Architekt Std', sans-serif", fontSize: '10px',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer', background: 'transparent', marginBottom: '60px',
          }}>Voltar para Home</button>
        </Link>
        <h1 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(64px, 10vw, 140px)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>Company</h1>
      </section>

      {/* Mission */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Our Mission</p>
        <p style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(28px, 4vw, 52px)',
          lineHeight: 1.25,
          maxWidth: '900px',
          margin: 0,
        }}>
          Advancing genetic engineering responsibly to reconstruct extinct species and restore the biodiversity our planet has lost.
        </p>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.8,
          maxWidth: '700px',
          marginTop: '40px',
          color: 'rgba(255,255,255,0.7)',
        }}>
          We operate at the intersection of paleogenomics, synthetic biology, and conservation science. Our work is guided by rigorous peer-reviewed research, ethical oversight, and a deep commitment to ecological responsibility. Every step we take is measured against a single principle: do no harm to the living world while working to heal it.
        </p>
      </section>

      {/* Team */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Team</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '48px',
        }}>
          {[
            {
              name: 'Dr. Elena Vasquez',
              role: 'CEO & Founder',
              bio: 'Former paleogenomics lead at the Max Planck Institute. Elena founded Cretaceous Biosciences to bridge the gap between ancient DNA research and real-world conservation.',
            },
            {
              name: 'Dr. Kenji Morimoto',
              role: 'Chief Science Officer',
              bio: 'Synthetic biologist with two decades of experience in de-extinction protocols. Kenji oversees all laboratory research and ensures our methods meet the highest scientific standards.',
            },
            {
              name: 'Amara Osei',
              role: 'Head of Conservation',
              bio: 'Wildlife ecologist who has led rewilding projects across three continents. Amara ensures every de-extinction effort is paired with meaningful habitat restoration.',
            },
            {
              name: 'Lucas Ferreira',
              role: 'Head of Engineering',
              bio: 'Bioinformatics architect specializing in genome assembly at scale. Lucas leads the computational infrastructure that powers our sequencing and analysis pipelines.',
            },
          ].map((member) => (
            <div key={member.name} style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '24px',
            }}>
              <p style={{
                fontFamily: "'Telegraf Light', sans-serif",
                fontWeight: 200,
                fontSize: '24px',
                margin: '0 0 4px 0',
              }}>{member.name}</p>
              <p style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                margin: '0 0 20px 0',
              }}>{member.role}</p>
              <p style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
              }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Values</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '48px',
        }}>
          {[
            {
              title: 'Scientific Honesty',
              desc: 'We publish our findings regardless of outcome. Null results and failures are as valuable as breakthroughs. We do not cherry-pick data or overstate conclusions.',
            },
            {
              title: 'Open Source',
              desc: 'Our tools, datasets, and methodologies are made publicly available. Science advances faster when knowledge is shared freely and reproducibility is non-negotiable.',
            },
            {
              title: 'Conservation First',
              desc: 'De-extinction is not a vanity project. Every decision is filtered through the lens of ecological impact. If a project does not serve living ecosystems, we do not pursue it.',
            },
            {
              title: 'Transparency',
              desc: 'We maintain open communication with the public, regulators, and the scientific community. Our funding, partnerships, and progress are documented openly.',
            },
          ].map((value) => (
            <div key={value.title}>
              <p style={{
                fontFamily: "'Telegraf Light', sans-serif",
                fontWeight: 200,
                fontSize: '28px',
                margin: '0 0 16px 0',
              }}>{value.title}</p>
              <p style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
              }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Careers</p>
        <p style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(24px, 3vw, 40px)',
          lineHeight: 1.3,
          maxWidth: '700px',
          margin: '0 0 32px 0',
        }}>
          We are building a team of scientists, engineers, and conservationists who refuse to accept extinction as permanent.
        </p>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.8,
          maxWidth: '600px',
          color: 'rgba(255,255,255,0.7)',
          margin: '0 0 40px 0',
        }}>
          Open roles span computational biology, genome engineering, field ecology, and regulatory affairs. We offer competitive compensation, relocation support, and the chance to work on problems that matter.
        </p>
        <Link href="/careers">
          <button style={{
            display: 'inline-block', padding: '12px 32px',
            border: '1px solid #fff', color: '#fff',
            fontFamily: "'NB Architekt Std', sans-serif", fontSize: '10px',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer', background: 'transparent',
            transition: 'background 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#fff';
          }}
          >View Open Positions</button>
        </Link>
      </section>

      {/* Contact */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Contact</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '40px',
        }}>
          <div>
            <p style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 8px 0',
            }}>General Inquiries</p>
            <a href="mailto:info@cretaceousbiosciences.com" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontFamily: "'NB Architekt Light', sans-serif",
            }}>info@cretaceousbiosciences.com</a>
          </div>
          <div>
            <p style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 8px 0',
            }}>Press & Media</p>
            <a href="mailto:press@cretaceousbiosciences.com" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontFamily: "'NB Architekt Light', sans-serif",
            }}>press@cretaceousbiosciences.com</a>
          </div>
        </div>
      </section>

    </div>
  );
}
