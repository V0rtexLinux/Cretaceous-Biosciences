import { Link } from 'wouter';

export default function Labs() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>

      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
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
          fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
          fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 1, margin: 0,
          textTransform: 'uppercase', letterSpacing: '-0.02em',
        }}>Labs</h1>
      </section>

      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
          fontSize: 'clamp(32px, 4vw, 56px)', margin: '0 0 16px 0',
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>Re-Gen Lab</h2>
        <span style={{
          fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
          fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '40px',
        }}>Computational Pipeline</span>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
          fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: 0,
          color: 'rgba(255,255,255,0.75)',
        }}>
          The Re-Gen Lab is the computational backbone of the project — a fully integrated
          bioinformatics pipeline dedicated to genome reconstruction and de-extinction design.
          From raw sequence data to actionable CRISPR guide-RNA constructs, every stage of
          the workflow is automated, versioned, and reproducible.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px', marginTop: '40px',
        }}>
          {[
            { label: 'Genome Assembly', desc: 'Extant Phylogenetic Bracket reconstruction of dinosaur genomes from fossil fragments and living-relative reference panels.' },
            { label: 'CRISPR Design', desc: 'Automated guide-RNA selection (SpCas9 / NGG PAM) and off-target scoring for avian host-genome editing.' },
            { label: 'Variant Analysis', desc: 'Consensus alignment between ancestral reconstructions and host-species reference sequences.' },
            { label: 'Pipeline Orchestration', desc: 'The Re-Gen Engine — a 9-stage Python pipeline (re-gen CLI) with per-stage checkpoints and full provenance tracking.' },
          ].map((item) => (
            <div key={item.label} style={{
              borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px',
            }}>
              <span style={{
                fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
                fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
                display: 'block', marginBottom: '8px',
              }}>{item.label}</span>
              <span style={{
                fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
                fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)',
              }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
          fontSize: 'clamp(32px, 4vw, 56px)', margin: '0 0 16px 0',
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>Hardware Lab</h2>
        <span style={{
          fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
          fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '40px',
        }}>Utero-Ovo Incubation &amp; Microinjection</span>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
          fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.75)',
        }}>
          The Hardware Lab bridges digital design and biological reality. The Utero-Ovo
          embryo incubation system maintains precise environmental conditions — temperature,
          humidity, gas concentration — inside custom-designed chambers. Automated DNA
          synthesis modules prepare CRISPR constructs, while microinjection rigs deliver
          them into avian embryos with sub-micron precision.
        </p>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
          fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.75)',
        }}>
          Control firmware is built on Arduino and Raspberry Pi — open, accessible hardware
          that keeps the entire system hackable and reproducible by any lab worldwide. A full
          simulation mode allows researchers to run dry-run experiments against virtual embryos
          before committing biological material, reducing waste and accelerating iteration cycles.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
        }}>
          {[
            { label: 'Utero-Ovo System', desc: 'Closed-loop incubation with real-time environmental telemetry.' },
            { label: 'DNA Synthesis', desc: 'Modular oligonucleotide assembly for CRISPR template preparation.' },
            { label: 'Embryo Injection', desc: 'Precision microinjection under fluorescence-guided targeting.' },
            { label: 'Simulation Mode', desc: 'Full virtual dry-run of injection protocols on digital embryo models.' },
          ].map((item) => (
            <div key={item.label} style={{
              borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px',
            }}>
              <span style={{
                fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
                fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
                display: 'block', marginBottom: '8px',
              }}>{item.label}</span>
              <span style={{
                fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
                fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)',
              }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
          fontSize: 'clamp(32px, 4vw, 56px)', margin: '0 0 16px 0',
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>Genomics Lab</h2>
        <span style={{
          fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
          fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '40px',
        }}>Reference Data &amp; Phylogenetic Analysis</span>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
          fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.75)',
        }}>
          The Genomics Lab handles all external data integration. Through NCBI APIs, the
          system pulls reference sequences, taxonomy data, and published paleogenomic
          assemblies directly into the pipeline. Reference search tools compare candidate
          reconstructions against every available avian genome to validate accuracy.
        </p>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
          fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.75)',
        }}>
          Phylogenetic analysis tools reconstruct evolutionary relationships between target
          species and their closest living relatives, informing guide-RNA design and ensuring
          edits remain within biologically plausible evolutionary distances. All analyses are
          logged and reproducible.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
        }}>
          {[
            { label: 'NCBI Integration', desc: 'Automated Entrez fetch of RefSeq/GenBank records across ~10 marker genes (cytochrome b, COI, 16S/12S rRNA, RAG1, Hox, and others).' },
            { label: 'Reference Search', desc: 'Deep search across living archosaurs and outgroups: modern birds, crocodilians, lepidosaurs, and turtles.' },
            { label: 'Phylogenetic Bracketing', desc: 'Extant Phylogenetic Bracket — birds and crocodilians, the two living archosaur lineages, bracket ancestral dinosaur traits.' },
            { label: 'Data Provenance', desc: 'Every reconstructed base carries a confidence score, accession trail, and low-confidence-region flag.' },
          ].map((item) => (
            <div key={item.label} style={{
              borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px',
            }}>
              <span style={{
                fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
                fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase',
                display: 'block', marginBottom: '8px',
              }}>{item.label}</span>
              <span style={{
                fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
                fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)',
              }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
          fontSize: 'clamp(32px, 4vw, 56px)', margin: '0 0 16px 0',
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>Target Species</h2>
        <span style={{
          fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
          fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '40px',
        }}>Current Pipeline Status — Non-Avian Dinosaurs</span>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px', backgroundColor: 'rgba(255,255,255,0.1)',
        }}>
          {[
            { species: 'Tyrannosaurus rex', common: 'Tyrannosaurus Rex', status: 'Genome Reconstruction', phase: 'Active' },
            { species: 'Velociraptor mongoliensis', common: 'Velociraptor', status: 'Genome Reconstruction', phase: 'Active' },
            { species: 'Brachiosaurus altithorax', common: 'Brachiosaurus', status: 'Genome Reconstruction', phase: 'Active' },
            { species: 'Triceratops horridus', common: 'Triceratops', status: 'Reference Mapping', phase: 'Planning' },
            { species: 'Stegosaurus stenops', common: 'Stegosaurus', status: 'Reference Mapping', phase: 'Planning' },
            { species: 'Sinosauropteryx prima', common: 'Sinosauropteryx', status: 'Phylogenetic Analysis', phase: 'Planning' },
          ].map((sp) => (
            <div key={sp.species} style={{
              backgroundColor: '#000', padding: '28px 24px',
            }}>
              <span style={{
                fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
                fontSize: '20px', display: 'block', marginBottom: '4px',
              }}>{sp.common}</span>
              <span style={{
                fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
                fontSize: '12px', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)',
                display: 'block', marginBottom: '20px',
              }}>{sp.species}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: sp.phase === 'Active' ? '#4ade80' : 'rgba(255,255,255,0.3)',
                  flexShrink: 0,
                }}></span>
                <span style={{
                  fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
                  fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}>{sp.status}</span>
              </div>
              <span style={{
                fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
                fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: sp.phase === 'Active' ? '#4ade80' : 'rgba(255,255,255,0.35)',
              }}>{sp.phase}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 48px' }}>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif", fontWeight: 200,
          fontSize: 'clamp(32px, 4vw, 56px)', margin: '0 0 16px 0',
          textTransform: 'uppercase', letterSpacing: '-0.01em',
        }}>Open Source</h2>
        <span style={{
          fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
          fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '40px',
        }}>MIT Licensed</span>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif", fontWeight: 300,
          fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 40px 0',
          color: 'rgba(255,255,255,0.75)',
        }}>
          Every line of code, every firmware sketch, every pipeline configuration — all of it
          is released under the MIT license. De-extinction should not be gated behind
          institutional walls. Anyone with curiosity and an internet connection should be able
          to read, fork, and contribute to this work.
        </p>
        <Link href="/download">
          <button style={{
            display: 'inline-block', padding: '12px 32px',
            border: '1px solid #fff', color: '#000',
            backgroundColor: '#fff',
            fontFamily: "'NB Architekt Std', sans-serif", fontWeight: 400,
            fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer',
          }}>Download Codebase</button>
        </Link>
      </section>

    </div>
  );
}
