import { Link } from 'wouter';

const species = [
  {
    name: 'Tyrannosaurus rex',
    scientific: 'Tyrannosaurus rex',
    status: 'genoma_parcial',
    description:
      'O maior predador terrestre do final do Cretáceo. Genome mapeado a partir de ossos fossilizados com preservação excepcional de colágeno e tecido mole.',
    completeness: 38,
    period: 'Late Cretaceous (68–66 Ma)',
    clade: 'Coelurosauria',
  },
  {
    name: 'Velociraptor mongoliensis',
    scientific: 'Velociraptor mongoliensis',
    status: 'genoma_parcial',
    description:
      'Dromeussaurídeo ágil e emplumado do deserto de Gobi. Fragmentos genômicos recuperados de penas fossilizadas em âmbar.',
    completeness: 27,
    period: 'Late Cretaceous (75–71 Ma)',
    clade: 'Dromaeosauridae',
  },
  {
    name: 'Triceratops horridus',
    scientific: 'Triceratops horridus',
    status: 'em_reconstrução',
    description:
      'Ceratopsídeo de três chifres com crânio massivo. Projeto de reconstrução genômica em andamento a partir de ossos do chifre com alta mineralização.',
    completeness: 12,
    period: 'Late Cretaceous (68–66 Ma)',
    clade: 'Ceratopsidae',
  },
  {
    name: 'Stegosaurus stenops',
    scientific: 'Stegosaurus stenops',
    status: 'em_reconstrução',
    description:
      'Thyreophora com placas dorsais e cauda dentada (thagomizer). Sequenciamento inicial baseado em ossos vertebrais fossilizados.',
    completeness: 9,
    period: 'Late Jurassic (155–150 Ma)',
    clade: 'Stegosauridae',
  },
  {
    name: 'Brachiosaurus altithorax',
    scientific: 'Brachiosaurus altithorax',
    status: 'genoma_parcial',
    description:
      'Sauropode gigantesco de pescoço longo e membros dianteiros alongados. DNA recuperado de vértebras com preservação de fosfato de cálcio.',
    completeness: 31,
    period: 'Late Jurassic (154–153 Ma)',
    clade: 'Macronaria',
  },
  {
    name: 'Sinosauropteryx prima',
    scientific: 'Sinosauropteryx prima',
    status: 'em_reconstrução',
    description:
      'O primeiro dinossauro não aviário com evidência direta de penas. Genoma inferido por filogenética computacional a partir de traços de melanosomos.',
    completeness: 7,
    period: 'Early Cretaceous (125–122 Ma)',
    clade: 'Compsognathidae',
  },
];

const statusMap: Record<string, { label: string; color: string }> = {
  genoma_parcial: { label: 'Genoma Parcial', color: 'rgba(255,255,255,0.7)' },
  em_reconstrução: { label: 'Em Reconstrução', color: 'rgba(255,255,255,0.4)' },
};

export default function SpeciesIndex() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ padding: '80px 48px 60px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
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
              marginBottom: '40px',
            }}
          >
            Species Index
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
            Catálogo de linhagens-alvo do programa de revivificação. Cada espécie é avaliada
            por viabilidade genômica, grau de preservação fossilífera e potencial de
            reconstrução funcional.
          </p>
        </div>
      </section>

      {/* SPECIES GRID */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1100px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <span
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Linhagens-Alvo
            </span>
            <span
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              6 Espécies Ativas
            </span>
          </div>

          {/* Species list with 1px dividers */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {species.map((sp, i) => {
              const st = statusMap[sp.status];
              return (
                <div
                  key={i}
                  style={{
                    background: '#000',
                    padding: '48px 40px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px 60px',
                  }}
                >
                  {/* Left column: name, scientific, period, clade */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Telegraf Light', sans-serif",
                        fontSize: 'clamp(24px, 3vw, 36px)',
                        fontWeight: 200,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.15,
                        marginBottom: '8px',
                      }}
                    >
                      {sp.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'NB Architekt Light', sans-serif",
                        fontSize: '13px',
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.45)',
                        marginBottom: '24px',
                      }}
                    >
                      {sp.scientific}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <span
                          style={{
                            fontFamily: "'NB Architekt Std', sans-serif",
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.3)',
                          }}
                        >
                          Período
                        </span>
                        <p
                          style={{
                            fontFamily: "'NB Architekt Light', sans-serif",
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.55)',
                            marginTop: '4px',
                          }}
                        >
                          {sp.period}
                        </p>
                      </div>
                      <div>
                        <span
                          style={{
                            fontFamily: "'NB Architekt Std', sans-serif",
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.3)',
                          }}
                        >
                          Clade
                        </span>
                        <p
                          style={{
                            fontFamily: "'NB Architekt Light', sans-serif",
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.55)',
                            marginTop: '4px',
                          }}
                        >
                          {sp.clade}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right column: status badge, description, completeness bar */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* Status badge */}
                    <div style={{ marginBottom: '24px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '6px 14px',
                          border: `1px solid ${st.color}`,
                          fontFamily: "'NB Architekt Std', sans-serif",
                          fontSize: '10px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: st.color,
                        }}
                      >
                        {st.label}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'NB Architekt Light', sans-serif",
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.7,
                        marginBottom: '28px',
                        maxWidth: '480px',
                      }}
                    >
                      {sp.description}
                    </p>

                    {/* Completeness bar */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          marginBottom: '10px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'NB Architekt Std', sans-serif",
                            fontSize: '10px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.35)',
                          }}
                        >
                          Completude do Genoma
                        </span>
                        <span
                          style={{
                            fontFamily: "'Telegraf Light', sans-serif",
                            fontSize: '18px',
                            fontWeight: 200,
                            color: '#fff',
                          }}
                        >
                          {sp.completeness}%
                        </span>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '2px',
                          background: 'rgba(255,255,255,0.08)',
                        }}
                      >
                        <div
                          style={{
                            width: `${sp.completeness}%`,
                            height: '100%',
                            background: 'rgba(255,255,255,0.5)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHYLOGENETIC BRACKETING SECTION */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1100px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <span
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Metodologia
            </span>
            <span
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              Bracketing Filogenético
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Telegraf Light', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 200,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '40px',
            }}
          >
            Phylogenetic Bracketing
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              marginBottom: '60px',
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
                A base viva do programa
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}
              >
                Aves e crocodilianos são os únicos viventes do clado Archosauria, o grupo que
                inclui todos os dinossauros. Essa posição filogenética única permite o uso de
                bracketing — uma técnica que infere traços ancestrais com base nos caracteres
                compartilhados por ambas as linhagens vivas.
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                }}
              >
                Se um traço está presente em crocodilianos E em aves, é estatisticamente
                provável que existisse no ancestral comum — ou seja, nos dinossauros não aviários.
                Essa lógica orienta a reconstrução genômica de forma responsável e verificável.
              </p>
            </div>
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
                Do genoma ao organismo
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}
              >
                O DNA de dinossauros não aviários raramente sobrevive além de 1 milhão de
                anos. Para espécies com 66–155 milhões de anos, o bracketing filogenético
                combinado com inferência computacional preenche as lacunas do genoma-alvo
                usando sequências validadas das linhagens-irmãs vivas.
              </p>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                }}
              >
                Cada inserção genômica é marcada com nível de confiança (conservado, inferido,
                computacional) e pode ser auditada independentemente antes de qualquer
                manipulação biológica.
              </p>
            </div>
          </div>

          {/* Archosauria diagram */}
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '48px 40px',
              display: 'flex',
              justifyContent: 'center',
              gap: '0',
            }}
          >
            {/* Archosauria label */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '48px',
              }}
            >
              <span
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '16px',
                }}
              >
                Archosauria
              </span>
              <div
                style={{
                  width: '1px',
                  height: '120px',
                  background: 'rgba(255,255,255,0.15)',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  gap: '120px',
                  marginTop: '16px',
                }}
              >
                {/* Crocodilians */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.5)',
                      margin: '0 auto 12px',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Telegraf Light', sans-serif",
                      fontSize: '14px',
                      fontWeight: 200,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Crocodilia
                  </p>
                  <p
                    style={{
                      fontFamily: "'NB Architekt Light', sans-serif",
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '4px',
                    }}
                  >
                    Crocodilianos viventes
                  </p>
                </div>

                {/* Dinosauria (extinct + birds) */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.15)',
                      margin: '0 auto 12px',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Telegraf Light', sans-serif",
                      fontSize: '14px',
                      fontWeight: 200,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Dinosauria
                  </p>
                  <p
                    style={{
                      fontFamily: "'NB Architekt Light', sans-serif",
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '4px',
                    }}
                  >
                    Não-aviários (extintos)
                  </p>
                </div>

                {/* Birds */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.5)',
                      margin: '0 auto 12px',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Telegraf Light', sans-serif",
                      fontSize: '14px',
                      fontWeight: 200,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    Aves
                  </p>
                  <p
                    style={{
                      fontFamily: "'NB Architekt Light', sans-serif",
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '4px',
                    }}
                  >
                    Dinossauros aviários viventes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
