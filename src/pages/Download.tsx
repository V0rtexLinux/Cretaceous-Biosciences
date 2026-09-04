import { Link } from 'wouter';

const installSteps = [
  {
    num: '01',
    title: 'Clonar o Repositório',
    code: 'git clone https://github.com/V0rtexLinux/Re-Gen-Project.git\ncd Re-Gen-Project',
    desc: 'Faça o clone do repositório official do projeto e entre no diretório.',
  },
  {
    num: '02',
    title: 'Instalar Dependências',
    code: 'pip install -e ".[dev]"',
    desc: 'Instale o projeto em modo de desenvolvimento com todas as dependências necessárias.',
  },
  {
    num: '03',
    title: 'Instalar Extras (Opcional)',
    code: 'pip install -e ".[hardware,ai]"',
    desc: 'Para suporte a hardware Arduino/Raspberry Pi e integração com IA local (Ollama).',
  },
  {
    num: '04',
    title: 'Executar o Pipeline',
    code: 're-gen --email seu@email.com --dinosaur "Tyrannosaurus rex"',
    desc: 'Execute o pipeline completo de reconstrução genômica e revivificação para a espécie desejada.',
  },
];

const features = [
  {
    label: 'Pipeline de 9 Estágios',
    desc: 'Seleção paleontológica, mapeamento filogenético, extração de fóssil, reconstrução genômica, CRISPR, síntese de DNA, injeção em embrião, incubação e relatório final com IA.',
  },
  {
    label: 'Banco de 60 Espécies',
    desc: 'Banco de dados paleontológico com 60 espécies catalogadas; Tyrannosaurus rex, Velociraptor mongoliensis, Triceratops horridus, Stegosaurus stenops, Brachiosaurus altithorax e Sinosauropteryx prima entre as linhagens-alvo priorizadas.',
  },
  {
    label: 'Suporte a Hardware',
    desc: 'Arduino, Raspberry Pi, Utero-Ovo controller com protocolos para aves e répteis. Todos os módulos funcionam em modo simulação.',
  },
  {
    label: 'IA Local (Ollama)',
    desc: 'Monitoramento embrionário com IA, análise de PubMed, e assistente de pipeline via Ollama.',
  },
  {
    label: 'Suíte de Testes',
    desc: 'Suite completa de testes unitários (pytest) cobrindo pipeline, hardware, CRISPR e reconstrução genômica.',
  },
  {
    label: 'Open Source',
    desc: 'Licença MIT. Código fonte completo disponível. Domínio público. Contribuições bem-vindas.',
  },
];

const requirements = [
  { label: 'Python', value: '3.11+' },
  { label: 'Sistema', value: 'Windows, macOS, Linux' },
  { label: 'RAM', value: '4GB mínimo' },
  { label: 'Disco', value: '~500MB' },
  { label: 'Internet', value: 'Necessária para NCBI' },
  { label: 'Arduino', value: 'Opcional (simulação disponível)' },
];

export default function Download() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
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
            Re-Gen Project
          </h1>

          <p
            style={{
              fontFamily: "'NB Architekt Light', sans-serif",
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '640px',
              lineHeight: 1.75,
              marginBottom: '40px',
            }}
          >
            Pipeline de reconstrução genômica paleontológica usando reconstrução de sequências ancestrais,
            design CRISPR e bracketing filogenético. Open source. Domínio público.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="/Re-Gen-Project.zip"
              download
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#fff',
                color: '#000',
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Download ZIP
            </a>
            <a
              href="/Re-Gen-Project.zip"
              download
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                border: '1px solid rgba(255,255,255,0.35)',
                color: '#fff',
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Baixar Projeto
            </a>
          </div>
        </div>
      </section>

      {/* About */}
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
            Sobre o Projeto
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
            O Re-Gen é um pipeline completo de reconstrução genômica paleontológica que combina
            paleogenômica, biologia do desenvolvimento e biologia computacional. Ele reconstrói
            genomas de espécies extintas usando dados reais do NCBI, inferência filogenética com
            aves e crocodilianos como bracketing, e design de edits CRISPR para dinosaurificação.
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
            O projeto inclui suporte completo a hardware (Arduino, Raspberry Pi, Utero-Ovo controller),
            monitoramento embrionário com IA local via Ollama, e uma suíte de 441 testes. Todos os
            módulos de hardware funcionam em modo simulação quando os dispositivos físicos não estão
            disponíveis.
          </p>
        </div>
      </section>

      {/* Features */}
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
            Funcionalidades
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {features.map((feat, i) => (
              <div
                key={i}
                style={{
                  background: '#000',
                  padding: '36px 32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: '16px',
                  }}
                >
                  {feat.label}
                </h3>
                <p
                  style={{
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
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
            Requisitos
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {requirements.map((req, i) => (
              <div
                key={i}
                style={{
                  background: '#000',
                  padding: '24px 36px',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '40px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'NB Architekt Std', sans-serif",
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#fff',
                  }}
                >
                  {req.label}
                </span>
                <span
                  style={{
                    fontFamily: "'NB Architekt Light', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  {req.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
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
            Guia de Instalação
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {installSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#000',
                  padding: '40px 36px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '32px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Telegraf Light', sans-serif",
                    fontSize: '36px',
                    fontWeight: 200,
                    color: 'rgba(255,255,255,0.2)',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'NB Architekt Std', sans-serif",
                      fontSize: '13px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      marginBottom: '12px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'NB Architekt Light', sans-serif",
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    {step.desc}
                  </p>
                  <pre
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.7)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '16px 20px',
                      lineHeight: 1.6,
                      overflowX: 'auto',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {step.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
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
            Como Usar
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                Pipeline Completo (9 Estágios)
              </h3>
              <pre
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 20px',
                  lineHeight: 1.6,
                }}
              >
{`re-gen --email seu@email.com --dinosaur "Tyrannosaurus rex"`}
              </pre>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                Somente Reconstrução Genômica (estágios 0–3)
              </h3>
              <pre
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 20px',
                  lineHeight: 1.6,
                }}
              >
{`re-gen --email seu@email.com --dinosaur "Triceratops horridus" --fase-fim 3`}
              </pre>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                Desenvolvimento
              </h3>
              <pre
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 20px',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                }}
              >
{`# Lint
ruff check src/re_gen/

# Formatar
ruff format src/re_gen/

# Testes
pytest tests/ -v --cov=re_gen

# Type check
mypy src/re_gen/ --ignore-missing-imports`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
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
            Estrutura do Projeto
          </h2>

          <pre
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.6)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '32px',
              lineHeight: 1.7,
              overflowX: 'auto',
            }}
          >
{`src/re_gen/
  core/           # CRISPR design, genome synthesis, validation, reconstruction
  data/           # Dinosaur database (60 species), paleontology, descendant mapping
  ncbi/           # NCBI Entrez deep reference search
  ai/             # Ollama integration, AI tool-calling framework
  hardware/       # Device abstraction with simulation fallback
  monitoring/     # PubMed / tech-watch monitoring
  gui/            # PyQt5 desktop GUI
  pipeline/       # Unified 9-stage reconstruction/revival pipeline
  cli.py          # CLI entry point
  exceptions.py   # Exception hierarchy

docs/             # Hardware documentation (Utero-Ovo controller)
tests/            # pytest unit test suite`}
          </pre>
        </div>
      </section>

      {/* Open Source */}
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
            Open Source & Domínio Público
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
            O Re-Gen Project é um projeto de código aberto sob licença MIT. Todo o código fonte
            é de domínio público e pode ser usado, modificado e distribuído livremente para
            qualquer propósito, incluindo comercial.
          </p>

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
            Acreditamos que ciência aberta acelera a descoberta. Ao colocar este pipeline
            disponível publicamente, pretendemos tornar a paleogenômica e a engenharia genética
            acessíveis a pesquisadores, estudantes e entusiastas em todo o mundo.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1px',
              background: 'rgba(255,255,255,0.1)',
              marginTop: '48px',
            }}
          >
            <div
              style={{
                flex: 1,
                background: '#000',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                Licença MIT
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                Permite uso, modificação e distribuição para qualquer finalidade, incluindo comercial,
                sem restrições.
              </p>
            </div>
            <div
              style={{
                flex: 1,
                background: '#000',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                Contribuições
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                Issues, pull requests e discussões são bem-vindos. O projeto é mantido pela
                comunidade e por colaboradores independentes.
              </p>
            </div>
            <div
              style={{
                flex: 1,
                background: '#000',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'NB Architekt Std', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                Transparência
              </h3>
              <p
                style={{
                  fontFamily: "'NB Architekt Light', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6,
                }}
              >
                Dados de pipeline, resultados de testes e processos de decisão são documentados
                e acessíveis publicamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section style={{ padding: '80px 48px 120px' }}>
        <div style={{ maxWidth: '900px' }}>
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
      </section>
    </div>
  );
}
