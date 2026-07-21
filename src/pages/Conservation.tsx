import { Link } from 'wouter';

const Conservation = () => {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ padding: '120px 48px 80px', maxWidth: '1400px', margin: '0 auto' }}>
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
        }}>Conservation</h1>
      </section>

      {/* De-Extinction Technologies for Living Species */}
      <section style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px',
          color: 'rgba(255,255,255,0.5)',
        }}>Applied Genomics for Living Species</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: 1.15,
          margin: '0 0 60px',
          maxWidth: '900px',
        }}>Technologies developed for de-extinction are already saving living species from extinction.</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
        }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
            <h3 style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              fontWeight: 400,
            }}>Genetic Rescue</h3>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Introducing carefully selected genetic variation into critically small populations to restore adaptive potential. Our cloning-derived reproductive technologies allow conservationists to generate offspring from limited or compromised genetic material, bypassing natural breeding bottlenecks that threaten species viability.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
            <h3 style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              fontWeight: 400,
            }}>Biobanking</h3>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Cryopreservation of viable cells, tissues, and gametes creates a living archive of biodiversity. Our biobanking protocols ensure that genetic material remains viable for decades, providing an insurance policy against extinction and a resource for future genetic restoration efforts.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
            <h3 style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              fontWeight: 400,
            }}>Population Genetics</h3>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Advanced genomic sequencing and population modeling identify which individuals carry the most critical genetic diversity, enabling targeted breeding programs that maximize heterozygosity and long-term species resilience with minimal intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Elephant Conservation Program */}
      <section style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px',
          color: 'rgba(255,255,255,0.5)',
        }}>Flagship Initiative</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontWeight: 200,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.15,
              margin: '0 0 40px',
            }}>Elephant Conservation Program</h2>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: '0 0 32px',
              color: 'rgba(255,255,255,0.7)',
            }}>
              Elephants — the most genetically diverse land mammals — face an accelerating crisis. Habitat fragmentation, poaching, and human-wildlife conflict have reduced populations to critical levels. Our program applies cutting-edge genomics to protect what remains.
            </p>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              By sequencing the genomes of wild populations across Africa and Asia, we map genetic diversity in unprecedented detail, identify populations most at risk of inbreeding depression, and inform translocation strategies that restore gene flow between isolated groups.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: '0 0 16px',
                fontWeight: 400,
              }}>African Elephants</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.6)',
              }}>
                Supporting both savanna and forest species through genomic monitoring of key populations across Kenya, Botswana, and the Congo Basin.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: '0 0 16px',
                fontWeight: 400,
              }}>Asian Elephants</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.6)',
              }}>
                Addressing the genetic fragmentation of isolated populations in India, Sri Lanka, and Southeast Asia through biobanking and assisted gene flow programs.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: '0 0 16px',
                fontWeight: 400,
              }}>Genetic Diversity</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.6)',
              }}>
                Building the most comprehensive elephant genome database ever assembled, enabling real-time conservation decisions backed by molecular data.
              </p>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: '0 0 16px',
                fontWeight: 400,
              }}>Calf Survival</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.6)',
              }}>
                Developing non-invasive genetic health assessments to monitor calf viability and detect disease susceptibility before clinical symptoms appear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Partners */}
      <section style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px',
          color: 'rgba(255,255,255,0.5)',
        }}>Conservation Partners</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(28px, 3.5vw, 42px)',
          lineHeight: 1.2,
          margin: '0 0 60px',
          maxWidth: '700px',
        }}>Working alongside the world's leading conservation organizations.</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.1)',
        }}>
          {[
            { name: 'Re-Wild', description: 'Rewilding landscapes and restoring ecological processes at scale across continents.' },
            { name: 'Global Wildlife Conservation', description: 'Protecting and restoring wildlife and their habitats through innovation and partnerships.' },
            { name: 'The Nature Conservancy', description: 'Conserving the lands and waters on which all life depends through science-based solutions.' },
            { name: 'WWF', description: 'Working to sustain the natural world for the benefit of people and wildlife globally.' },
            { name: 'African Wildlife Foundation', description: 'Ensuring the wildlife and wildlands of Africa survive and thrive for future generations.' },
            { name: 'Rewilding Europe', description: 'Rewilding vast areas of Europe, making the continent a wilder place.' },
          ].map((partner) => (
            <div key={partner.name} style={{
              background: '#000',
              padding: '40px',
            }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '16px',
                letterSpacing: '0.04em',
                margin: '0 0 16px',
                fontWeight: 400,
              }}>{partner.name}</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: 1.7,
                margin: 0,
                color: 'rgba(255,255,255,0.5)',
              }}>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Genomic Tools for Conservation */}
      <section style={{ padding: '80px 48px 120px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 40px',
          color: 'rgba(255,255,255,0.5)',
        }}>Genomic Tools in Practice</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(32px, 5vw, 56px)',
          lineHeight: 1.15,
          margin: '0 0 60px',
          maxWidth: '900px',
        }}>How modern genomics is transforming conservation science.</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
        }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
            <h3 style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              fontWeight: 400,
            }}>eDNA Monitoring</h3>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Environmental DNA analysis enables non-invasive species detection from water, soil, and air samples. By identifying trace genetic material shed by organisms into their environment, we can monitor biodiversity across entire ecosystems without ever disturbing the animals we aim to protect.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
            <h3 style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              fontWeight: 400,
            }}>Genetic Rescue of Inbred Populations</h3>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              Whole-genome sequencing reveals the precise extent of inbreeding depression within isolated populations. Our tools identify optimal donor individuals for genetic introgression, calculate ideal translocation ratios, and predict the genomic recovery trajectory over multiple generations.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
            <h3 style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              fontWeight: 400,
            }}>De Novo Genetic Variation</h3>
            <p style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              margin: 0,
              color: 'rgba(255,255,255,0.7)',
            }}>
              When natural genetic diversity has been irreversibly lost, controlled laboratory techniques can reintroduce adaptive variation. By engineering targeted mutations informed by comparative genomics, we can restore functional alleles that natural selection would take thousands of years to regenerate.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Conservation;
