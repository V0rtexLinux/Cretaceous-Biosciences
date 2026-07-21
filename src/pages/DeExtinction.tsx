import { Link } from 'wouter';

const milestones = [
  {
    year: '2003',
    title: 'Bucardo (Caprão-pirenaico)',
    desc: 'Primeira espécie extinta a ser parcialmente "revivida": clones foram gerados a partir de células congeladas, mas nenhum sobreviveu além de alguns minutos após o nascimento. Prova de conceito de que material genético preservado pode produzir um organismo vivo.',
  },
  {
    year: '2008',
    title: 'Rã-boideira-gástrica australiana',
    desc: 'Pesquisadores da Universidade de New South Wales reconstruíram embriões funcionais usando células de um espécime preservado em formalina. O tecido embrionário se desenvolveu parcialmente, demonstrando viabilidade de ressuscitação genética em anfíbios.',
  },
  {
    year: '2013',
    title: 'Genoma do mamute-lanoso',
    desc: 'Equipe liderada por Svante Pääbo sequenciou o genoma completo do mamute-lanoso a partir de amostras de tecido congelado em permafrost, fornecendo o mapa genético necessário para comparações com o elefante asiático moderno.',
  },
  {
    year: '2020',
    title: 'Iniciativa Colossal Biosciences',
    desc: 'Fundação de Colossal Biosciences com objetivo declarado de "desextinção" do mamute-lanoso usando edição genética em embriões de elefante asiático. Foco em traços adaptativos como pelo denso, camada de gordura subcutânea e tolerância ao frio.',
  },
  {
    year: '2022',
    title: 'Edição genética em elefante',
    desc: 'Demonstração de edição bem-sucedida de células-tronco de elefante asiático com mutações associadas a traços de mamute, marcando o primeiro passo funcional em direção a um híbrido genético viável.',
  },
  {
    year: '2023',
    title: 'Thylacine Integrated Genomic Restoration Research',
    desc: 'Iniciativas paralelas para o extinto tigre-da-Tasmânia, usando células-tronco de espécies vivas parentais (diabo-da-Tasmânia) como plataforma de reprogramação genética, expandindo o escopo da desextinção para marsupiais.',
  },
];

const ethics = [
  {
    label: 'Bem-estar animal',
    desc: 'Todo organismo gerado por desextinção carrega risco de dor, estresse e complicações de desenvolvimento que não têm paralelo em espécies naturais. Protocolos de desextinção devem demonstrar que o bem-estar individual não será sacrificado em nome de um objetivo científico.',
  },
  {
    label: 'Impacto ecológico',
    desc: 'Reintroduzir organismos em ecossistemas que evoluíram sem eles pode causar colapso de cadeias tróficas, competição por recursos e perda de biodiversidade atual. Avaliação rigorosa do contexto ecológico é pré-requisito antes de qualquer liberação ambiental.',
  },
  {
    label: 'Alocação de recursos',
    desc: 'Investimentos em desextinção competem diretamente com financiamento para conservação de espécies ameaçadas, restauração de habitats e monitoramento de biodiversidade. A sociedade deve deliberar sobre prioridades com transparência e evidência.',
  },
  {
    label: 'Consentimento intergeracional',
    desc: 'Decisões sobre criar organismos com necessidades incertas e sem ecossistema de apoio geram obrigações que se estendem por gerações futuras. A Responsabilidade requer mecanismos de governança que transcendam ciclos políticos e institucionais.',
  },
];

export default function DeExtinction() {
  return (
    <div
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: '80px 48px 60px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
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
            De-Extinction
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
            A ciência da desextinção busca reverter a extinção de espécies por meio de
            engenharia genética, biologia do desenvolvimento e paleogenômica — não como
            fantasia, mas como disciplina científica com limites, riscos e responsabilidades
            próprios.
          </p>
        </div>
      </section>

      {/* Definição científica */}
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
            O que é desextinção?
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
            Desextinção (do inglês <em>de-extinction</em>) é o processo de recriação de
            espécies extintas utilizando tecnologias como clonagem, edição genética
            (CRISPR-Cas9 e variantes), reprogramação celular e paleogenômica. O objetivo
            não é apenas reconstruir um organismo morfologicamente semelhante, mas restabelecer
            funções biológicas e comportamentais que sustentem uma população viável e
            geneticamente estável.
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
            A desextinção não é ressurreição: é reconstrução iterativa, onde cada etapa
            requer validação biológica independente antes de progressão. Espécies-alvo
            são avaliadas não apenas por viabilidade genética, mas pelo impacto que sua
            reintrodução pode causar em ecossistemas contemporâneos e pela capacidade
            institucional de garantir bem-estar ao longo da vida do organismo gerado.
          </p>
        </div>
      </section>

      {/* Linha do tempo */}
      <section
        style={{
          padding: '80px 48px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
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
            Marcos na ciência da desextinção
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {milestones.map((m, i) => (
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
                <div>
                  <span
                    style={{
                      fontFamily: "'Telegraf Light', sans-serif",
                      fontSize: '32px',
                      fontWeight: 200,
                      color: '#fff',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {m.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'NB Architekt Std', sans-serif",
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.4,
                    }}
                  >
                    {m.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.7,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerações éticas */}
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
            Considerações éticas
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {ethics.map((e, i) => (
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
                  {e.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.7,
                  }}
                >
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abordagem Cretaceous */}
      <section style={{ padding: '80px 48px 120px' }}>
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
            Nossa abordagem responsável
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
            Na Cretaceous Biosciences, a desextinção não é tratada como meta final, mas
            como ferramenta a serviço de conservação e conhecimento. Cada programa de
            desextinção é condicionado a três princípios irrevogáveis:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
              marginBottom: '48px',
            }}
          >
            <div
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
                Bem-estar como pré-requisito
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Nenhum organismo é gerado sem protocolo de cuidado validado por comitê
                independente de bem-estar animal. A dor, o estresse e as complicações de
                desenvolvimento são monitorados em cada estágio, com autoridade para
                interromper qualquer programa que não atenda aos padrões mais exigentes
                de welfarismo.
              </p>
            </div>
            <div
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
                Conservação antes da desextinção
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}
              >
                A mesma tecnologia de edição genética que torna a desextinção possível é
                priorizada para programas de conservação: recuperação genética de espécies
                ameaçadas, controle de doenças em populações vulneráveis e restauração de
                diversidade em ecossistemas degradados. O valor da plataforma é mensurado
                pelo impacto no presente, não apenas pelo potencial futuro.
              </p>
            </div>
            <div
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
                Transparência radical
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}
              >
                Dados de pesquisa, resultados negativos e limitações são publicados
                abertamente. A desextinção não pode avançar em sigilo: a confiança pública
                é condição de possibilidade, não um detalhe administrativo. Cada decisão
                é documentada, auditável e sujeita a revisão independente.
              </p>
            </div>
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
  );
}
