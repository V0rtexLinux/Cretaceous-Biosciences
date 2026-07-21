import { Link } from 'wouter';

const phases = [
  { step: '01', title: 'Selection', desc: 'Identificação e seleção da espécie-alvo com base em viabilidade genética, disponibilidade de material fossil e relevância ecológica.' },
  { step: '02', title: 'Phylogenetic Mapping', desc: 'Mapeamento filogenético completo: construção de árvores evolutivas para localizar parentes vivos mais próximos e estimar divergência genética.' },
  { step: '03', title: 'Fossil Extraction', desc: 'Extração e preservação de DNA antigo a partir de fósseis, com protocolos rigorosos de contaminação e datação por carbono-14.' },
  { step: '04', title: 'Genome Reconstruction', desc: 'Reconstrução computacional do genoma ancestral a partir de fragmentos degradados, usando algoritmos de assembleia e inferência bayesiana.' },
  { step: '05', title: 'CRISPR Package', desc: 'Design do pacote de edição CRISPR-Cas9: identificação de regiões-alvo, guias RNA e estruturação do cassetes de edição para o genoma hospedeiro.' },
  { step: '06', title: 'DNA Synthesis', desc: 'Síntese química de oligonucleotídeos e construção de fragmentos de DNA de alta fidelidade para inserção no genoma.' },
  { step: '07', title: 'Embryo Injection', desc: 'Injeção microassistida do material editado em embriões de espécie hospedeira, com monitoramento em tempo real de viabilidade celular.' },
  { step: '08', title: 'Incubation', desc: 'Incubação controlada em sistema utero-ovo com controle preciso de temperatura, umidade e oxigênio ao longo do desenvolvimento embrionário.' },
  { step: '09', title: 'Final Report', desc: 'Relatório final com análise genômica do organismo gerado, avaliação de viabilidade, documentação completa e revisão por comitê independente.' },
];

const hardware = [
  {
    title: 'Utero-Ovo Controller',
    desc: 'Controlador baseado em Arduino com sensores de temperatura, CO₂, umidade e pH. Monitora o ambiente de incubação em tempo real, ajustando parâmetros automaticamente para manter condições ótimas de desenvolvimento embrionário. Prototipado com protoboard e validado em ciclos de incubação de aves domésticas.',
  },
  {
    title: 'DNA Synthesizer',
    desc: 'Sintetizador de DNA de bancada para produção de oligonucleotídeos curtos e fragmentos de DNA de média escala. Utiliza ciclos de acoplamento fosforamidita com controle computadorizado de temperatura e reagentes. Permite iteração rápida de guias CRISPR e construções de DNA personalizadas.',
  },
  {
    title: 'Embryo Injection Robot',
    desc: 'Robô de injeção embrionária com microcontrolador e atuadores de precisão para inserção de material genético em células-ovo. Posicionamento assistido por câmera e controle por firmware customizado. Em modo simulação, opera sem material biológico para validação de movimentos e calibração de trajetórias.',
  },
];

const aiModules = [
  {
    title: 'Ollama Local AI',
    desc: 'Modelo de linguagem local rodando via Ollama para assistência em design de experimentos, revisão de protocolos e análise de literatura científica. Processamento offline garante privacidade de dados sensíveis e reduz latência em ambientes laboratoriais com conectividade limitada.',
  },
  {
    title: 'PubMed Monitoring',
    desc: 'Sistema de monitoramento automatizado de publicações no PubMed, com extração de metadados, classificação por relevância e resumo por IA. Mantém a equipe atualizada sobre avanços em genômica, CRISPR e biologia do desenvolvimento em tempo real.',
  },
  {
    title: 'Embryo Analysis',
    desc: 'Módulo de análise de imagens embrionárias com modelos de visão computacional treinados para detectar anomalias de desenvolvimento, avaliar morfologia e classificar estágios embrionários. Integra dados de sensores do utero-ovo para correlacionar condições ambientais com outcomes biológicos.',
  },
];

export default function ScienceTechnology() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '80px 48px 60px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '900px' }}>
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
            fontSize: 'clamp(36px, 6vw, 80px)',
            fontWeight: 200, letterSpacing: '-0.02em',
            lineHeight: 1.05, marginBottom: '40px',
          }}>Science & Technology</h1>

          <p style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '15px', color: 'rgba(255,255,255,0.6)',
            maxWidth: '640px', lineHeight: 1.75,
          }}>
            Uma visão detalhada da infraestrutura técnica, pipelines computacionais e
            hardware que sustentam o programa de desextinção da Cretaceous Biosciences —
            do genoma ao organismo vivo.
          </p>
        </div>
      </section>

      {/* Re-Dino Engine */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{
            fontFamily: "'NB Architekt Std', sans-serif",
            fontSize: '11px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
            marginBottom: '48px',
          }}>Pipeline de Desextinção</h2>

          <h3 style={{
            fontFamily: "'Telegraf Light', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: '40px',
          }}>O Re-Dino Engine</h3>

          <p style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, marginBottom: '24px', maxWidth: '680px',
          }}>
            O Re-Dino Engine é o pipeline integrado de nove fases que converte dados
            genômicos ancestrais em organismo vivo. Cada fase é validada
            independentemente antes da progressão, com checkpoints de qualidade e
            documentação completa.
          </p>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1px',
            background: 'rgba(255,255,255,0.1)',
          }}>
            {phases.map((p, i) => (
              <div key={i} style={{
                background: '#000', padding: '40px 36px',
                display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px',
              }}>
                <div>
                  <span style={{
                    fontFamily: "'Telegraf Light', sans-serif",
                    fontSize: '32px', fontWeight: 200,
                    color: '#fff', display: 'block', marginBottom: '8px',
                  }}>{p.step}</span>
                  <h4 style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '12px', letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.4,
                  }}>{p.title}</h4>
                </div>
                <p style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{
            fontFamily: "'Telegraf Light', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: '40px',
          }}>Hardware & Simulação</h2>

          <p style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, marginBottom: '48px', maxWidth: '680px',
          }}>
            Todo o hardware é projetado e construído internamente, com firmware
            customizado e capacidade de operação em modo simulação — permitindo
            validação completa de movimentos, sensores e protocolos sem uso de
            material biológico.
          </p>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1px',
            background: 'rgba(255,255,255,0.1)',
          }}>
            {hardware.map((h, i) => (
              <div key={i} style={{
                background: '#000', padding: '40px 36px',
                display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px',
              }}>
                <h3 style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '12px', letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: '#fff', lineHeight: 1.4,
                }}>{h.title}</h3>
                <p style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{
            fontFamily: "'Telegraf Light', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: '40px',
          }}>Integração com IA</h2>

          <p style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, marginBottom: '48px', maxWidth: '680px',
          }}>
            Inteligência artificial é integrada em três camadas do pipeline: assistência
            em pesquisa e design, monitoramento de literatura e análise de dados
            biológicos em tempo real.
          </p>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1px',
            background: 'rgba(255,255,255,0.1)',
          }}>
            {aiModules.map((m, i) => (
              <div key={i} style={{
                background: '#000', padding: '40px 36px',
                display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px',
              }}>
                <h3 style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '12px', letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: '#fff', lineHeight: 1.4,
                }}>{m.title}</h3>
                <p style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRISPR/Cas9 Approach */}
      <section style={{ padding: '80px 48px 120px' }}>
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{
            fontFamily: "'Telegraf Light', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 200, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: '40px',
          }}>Abordagem CRISPR/Cas9</h2>

          <p style={{
            fontFamily: "'NB Architekt Light', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.75, marginBottom: '24px', maxWidth: '680px',
          }}>
            A estratégia de edição genética combina reconstrução de sequências ancestrais
            com bracketing filogenético — utilizando informações de espécies vivas
            parentais para inferir com precisão as sequências perdidas.
          </p>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '1px',
            background: 'rgba(255,255,255,0.1)', marginBottom: '48px',
          }}>
            <div style={{
              background: '#000', padding: '40px 36px',
              display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px',
            }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: '#fff', lineHeight: 1.4,
              }}>Ancestral Sequence Reconstruction</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
              }}>
                Técnica computacional que infere sequências de DNA ancestrais a partir
                de alinhamentos moleculares de espécies vivas. Utiliza modelos
                evolutivos de substituição de nucleotídeos para estimar o estado mais
                provável em nós filogenéticos, reconstruindo genes funcionais que
                existiram milhões de anos atrás. A precisão depende da qualidade do
                alinhamento, do modelo evolutivo escolhido e da profundidade de
                amostragem de espécies vivas.
              </p>
            </div>
            <div style={{
              background: '#000', padding: '40px 36px',
              display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px',
            }}>
              <h3 style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '12px', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: '#fff', lineHeight: 1.4,
              }}>Phylogenetic Bracketing</h3>
              <p style={{
                fontFamily: "'NB Architekt Light', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
              }}>
                Para dinosaurios não-avianos, o bracketing filogenético utiliza
                aves (descendentes diretas) e crocodilianos (parentes vivos mais
                próximos) como referência. Se uma característica está presente em
                ambos os grupos, é provável que existisse no ancestral comum. Essa
                abordagem permite inferir                 traços moleculares, celulares e
                de desenvolvimento que não são preservados no registro fossil, fornecendo
                alvos concretos para edição CRISPR no genoma hospedeiro.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <Link href="/">
              <button style={{
                padding: '12px 28px',
                border: '1px solid rgba(255,255,255,0.35)',
                color: '#fff',
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '10px', letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer',
                background: 'transparent',
              }}>← Voltar para Home</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
