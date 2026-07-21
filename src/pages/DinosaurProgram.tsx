import { Link } from 'wouter';

const phases = [
  {
    label: 'Fase 01 · Reconstrução Genômica',
    desc: 'Mapeamento de DNA fóssil fragmentado, inferência filogenética com aves e crocodilianos, e modelagem de lacunas por IA com validação independente.',
  },
  {
    label: 'Fase 02 · Embriologia e Desenvolvimento',
    desc: 'Edição de circuitos regulatórios em linhas celulares aviárias para recuperar traços ancestrais de forma gradual, reversível e auditável.',
  },
  {
    label: 'Fase 03 · Protocolos de Nascimento',
    desc: 'Sistemas ex vivo e matrizes bioinspiradas para gestação controlada, reduzindo risco para espécies hospedeiras e melhorando previsibilidade de desenvolvimento.',
  },
];

export default function DinosaurProgram() {
  return (
    <div
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      {/* Page content */}
      <div>

        {/* Hero section */}
        <section
          style={{
            padding: '80px 48px 60px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ maxWidth: '900px' }}>
            {/* Back button */}
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
              Programa de Revivificação de Dinossauros
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
              A missão da Cretaceous Biosciences é avançar a engenharia genética com
              responsabilidade para reconstruir linhagens extintas de dinossauros de forma
              progressiva, verificável e alinhada ao interesse público.
            </p>
          </div>
        </section>

        {/* Narrativa científica */}
        <section
          style={{
            padding: '80px 48px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ maxWidth: '900px' }}>
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
              Narrativa científica
            </h2>

            <p
              style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                marginBottom: '24px',
                maxWidth: '680px',
              }}
            >
              Nosso programa combina paleogenômica, biologia do desenvolvimento e biologia
              computacional para reconstruir traços funcionais de dinossauros não aviários.
              Em vez de buscar um salto único, usamos iterações pequenas e auditáveis: cada
              avanço precisa demonstrar viabilidade biológica, estabilidade genética e
              ausência de dano evitável antes de seguir para o próximo estágio.
            </p>

            <p
              style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                maxWidth: '680px',
              }}
            >
              O objetivo científico não é apenas recuperar morfologias antigas, mas também
              ampliar nossa capacidade de proteger biodiversidade atual. As mesmas
              plataformas de edição, monitoramento embrionário e biossegurança são aplicadas
              em programas de conservação para espécies ameaçadas no presente.
            </p>
          </div>
        </section>

        {/* Phases */}
        <section style={{ padding: '80px 48px 120px' }}>
          <div style={{ maxWidth: '900px' }}>
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
              Fases do Programa
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: 'rgba(255,255,255,0.1)',
              }}
            >
              {phases.map((phase, i) => (
                <div
                  key={i}
                  style={{
                    background: '#000',
                    padding: '40px 36px',
                    display: 'grid',
                    gridTemplateColumns: '280px 1fr',
                    gap: '40px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'NB Architekt Std', sans-serif",
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      lineHeight: 1.4,
                    }}
                  >
                    {phase.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'NB Architekt Light', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.7,
                    }}
                  >
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '60px' }}>
              <Link href="/">
                <button
                  style={{
                    padding: '12px 28px',
                    border: '1px solid rgba(255,255,255,0.35)',
                    color: '#fff',
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    background: 'transparent',
                  }}
                >
                  ← Voltar para Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
