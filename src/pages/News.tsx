import { Link } from 'wouter';

const newsItems = [
  {
    date: '18 Jul 2026',
    source: 'Nature Genomics',
    title: 'Cretaceous Biosciences Publishes First Complete Chromosome-Level Assembly of Thescelosaurus neglectus',
    excerpt:
      'A new high-confidence genome reconstruction reveals regulatory element conservation between non-avian dinosaurs and modern crocodilians, offering fresh targets for functional de-extinction studies.',
  },
  {
    date: '02 Jul 2026',
    source: 'The Lancet Biotechnology',
    title: 'CRISPR-Cas12d System Achieves 99.7% On-Target Accuracy in Avian Embryonic Cell Lines',
    excerpt:
      'The improved editing fidelity reported by the Cretaceous Biosciences team reduces off-target insertions to near-background levels, a critical threshold for viable embryo programs.',
  },
  {
    date: '15 Jun 2026',
    source: 'Science',
    title: 'Conservation Genomics Initiative Rescues Genetic Diversity in Atlantic Tuna Populations',
    excerpt:
      'De-extinction platform technologies applied to living endangered species demonstrate that gene-drive suppression and allelic rescue can rebuild viable breeding pools within four generations.',
  },
  {
    date: '28 May 2026',
    source: 'Cell',
    title: 'AI-Guided Protein Folding Predicts Functional Dinosaur Collagen Fragments from Fossilized Tissue',
    excerpt:
      'Machine-learning models trained on extant archosaur proteomes identify stable collagen triple-helix conformations in 80-million-year-old bone samples, validating computational paleoproteomics.',
  },
  {
    date: '11 May 2026',
    source: 'PLOS ONE',
    title: 'Bioinspired Gestational Matrix Supports Full-Term Development in Avian Surrogate Models',
    excerpt:
      'A synthetic extra-embryonic membrane sustains organogenesis ex vivo for 22 days, marking the longest controlled dinosaur-lineage gestation achieved outside a living host.',
  },
  {
    date: '03 Apr 2026',
    source: 'Nature Biotechnology',
    title: 'Epigenetic Clock Calibration Extends Methylation Dating Accuracy to 120 Million Years',
    excerpt:
      'Novel CpG-heritability models push the reliable boundary of molecular dating forward by 40 million years, enabling direct comparison of regulatory landscapes across geological time.',
  },
  {
    date: '19 Mar 2026',
    source: 'Proceedings of the National Academy of Sciences',
    title: 'Phylogenomic Inference Confirms Nested Clade of Maniraptora Within Modern Avian Radiation',
    excerpt:
      'Whole-genome alignment of 47 extant and 12 reconstructed archosaur genomes redefines the evolutionary position of feathered dinosaurs relative to crown-group birds.',
  },
  {
    date: '05 Mar 2026',
    source: 'New Scientist',
    title: 'Ethical Review Board Endorses Phase 02 Protocol for Controlled Ancestral Trait Expression',
    excerpt:
      'An independent oversight committee unanimously approves Cretaceous Biosciences\' application to begin limited developmental-stage editing in avian cell lines under biosafety level 3 containment.',
  },
  {
    date: '20 Feb 2026',
    source: 'MIT Technology Review',
    title: 'The De-Extinction Economy: How Reverse Engineering Biology Is Attracting Billions in Climate Capital',
    excerpt:
      'Venture funding for resurrection biology surpasses $4.2 billion as investors recognize that the same tools used to revive extinct species are essential for protecting climate-vulnerable ecosystems.',
  },
];

const cardStyle: React.CSSProperties = {
  padding: '36px 0',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
};

const dateStyle: React.CSSProperties = {
  fontFamily: "'NB Architekt Std', sans-serif",
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '12px',
};

const sourceStyle: React.CSSProperties = {
  fontFamily: "'NB Architekt Std', sans-serif",
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '16px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Telegraf Light', sans-serif",
  fontSize: '18px',
  fontWeight: 200,
  lineHeight: 1.35,
  color: '#fff',
  marginBottom: '14px',
};

const excerptStyle: React.CSSProperties = {
  fontFamily: "'NB Architekt Light', sans-serif",
  fontSize: '13px',
  color: 'rgba(255,255,255,0.5)',
  lineHeight: 1.7,
};

export default function News() {
  return (
    <div
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      {/* Hero section */}
      <section
        style={{
          padding: '80px 48px 60px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ maxWidth: '1100px' }}>
          <Link href="/">
            <button
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                background: 'transparent',
                marginBottom: '60px',
              }}
            >
              Voltar para Home
            </button>
          </Link>

          <h1
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '32px',
            }}
          >
            News &amp; Publications
          </h1>

          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '640px',
              lineHeight: 1.75,
            }}
          >
            Selected coverage, peer-reviewed publications, and press statements
            from Cretaceous Biosciences and the broader de-extinction research
            community.
          </p>
        </div>
      </section>

      {/* News grid */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px' }}>
          <h2
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '48px',
            }}
          >
            Latest Coverage
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0 48px',
            }}
          >
            {newsItems.map((item, i) => (
              <article key={i} style={cardStyle}>
                <div style={dateStyle}>{item.date}</div>
                <div style={sourceStyle}>{item.source}</div>
                <h3 style={titleStyle}>{item.title}</h3>
                <p style={excerptStyle}>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section
        style={{
          padding: '80px 48px 120px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ maxWidth: '1100px' }}>
          <h2
            style={{
              fontFamily: "'NB Architekt Std', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '40px',
            }}
          >
            Press Contact
          </h2>

          <div
            style={{
              padding: '40px 36px',
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '560px',
            }}
          >
            <p
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: '16px',
              }}
            >
              Cretaceous Biosciences — Office of Communications
            </p>
            <p
              style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              For interview requests, press inquiries, and media kit access,
              contact the communications team directly. We respond to accredited
              journalists within one business day.
            </p>
            <p
              style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.04em',
              }}
            >
              press@cretaceousbiosciences.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
