import { Link } from 'wouter';

export default function BetterWorld() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

      {/* HERO */}
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
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(48px, 8vw, 120px)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>A Better World</h1>
      </section>

      {/* VISION */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontWeight: 400,
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 32px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Visão</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(28px, 4vw, 56px)',
          lineHeight: 1.15,
          margin: '0 0 32px 0',
          maxWidth: '800px',
        }}>Reconstruindo o Passado para Proteger o Futuro</h2>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif",
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: 1.7,
          maxWidth: '640px',
          color: 'rgba(255,255,255,0.8)',
          margin: 0,
        }}>
          A extinção de uma espécie nunca é um evento isolado — é um fio puxado em uma tapeçaria
          ecológica complexa. Na Cretaceous Biosciences, acreditamos que a biotecnologia da
          desextinção e da conservação oferece uma via de mão dupla: entender profundamente o que
          perdemos nos capacita a restaurar o que ainda podemos salvar. Cada genoma resgatado dos
          registros fósseis é uma lição sobre resiliência, adaptação e interdependência — conhecimento
          que se aplica diretamente aos ecossistemas vivos de hoje.
        </p>
      </section>

      {/* ECOLOGICAL RESTORATION */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontWeight: 400,
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 32px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Restauração Ecológica</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(28px, 4vw, 56px)',
          lineHeight: 1.15,
          margin: '0 0 32px 0',
          maxWidth: '800px',
        }}>Rewilding, Engenharia de Ecossistemas e Cascatas Tróficas</h2>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif",
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: 1.7,
          maxWidth: '640px',
          color: 'rgba(255,255,255,0.8)',
          margin: 0,
        }}>
          A introdução cuidadosa de espécies-chave em ecossistemas degradados pode desencadear
          cascatastróficas — ou, mais precisamente, cascatastróficas restaurativas. Quando um predador
          de topo retorna a um ambiente, ele reorganiza toda a teia alimentar abaixo de si: populações
          de herbívoros se estabilizam, vegetação se recupera, margens de rios se firmam e a biodiversidade
          geral explode. Nosso trabalho combina modelagem computacional de ecossistemas com biologia
          de conservação para identificar quais espécies, restauradas ou reintroduzidas, podem gerar
          o maior impacto ecológico positivo. Não se trata apenas de trazer espécies de volta —
          é sobre reconectar ecossistemas inteiros.
        </p>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontWeight: 400,
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 32px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Educação</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(28px, 4vw, 56px)',
          lineHeight: 1.15,
          margin: '0 0 32px 0',
          maxWidth: '800px',
        }}>Genômica Acessível, Ciência Inspiradora</h2>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif",
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: 1.7,
          maxWidth: '640px',
          color: 'rgba(255,255,255,0.8)',
          margin: 0,
        }}>
          A ciência não avança se permanece trancada em laboratórios. Nosso programa educacional
          traduz genômica avançada em linguagem acessível — desde visualizações interativas de
          genomas ancestrais até oficinas práticas de extração de DNA para estudantes do ensino
          fundamental. Acreditamos que a curiosidade é o primeiro passo de toda descoberta científica.
          Quando uma criança entende que o DNA é o código que conecta todas as formas de vida na Terra,
          ela deixa de ver a ciência como algo distante e começa a vê-la como algo que pertence a ela.
          Inspirar a próxima geração de biólogos, geneticistas e ambientalistas é tão importante
          quanto o próprio trabalho de laboratório.
        </p>
      </section>

      {/* SUSTAINABILITY */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{
          fontFamily: "'NB Architekt Std', sans-serif",
          fontWeight: 400,
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          margin: '0 0 32px 0',
          color: 'rgba(255,255,255,0.5)',
        }}>Sustentabilidade</p>
        <h2 style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(28px, 4vw, 56px)',
          lineHeight: 1.15,
          margin: '0 0 32px 0',
          maxWidth: '800px',
        }}>A Mesma Tecnologia Para Quem Ainda Está Aqui</h2>
        <p style={{
          fontFamily: "'NB Architekt Light', sans-serif",
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: 1.7,
          maxWidth: '640px',
          color: 'rgba(255,255,255,0.8)',
          margin: 0,
        }}>
          Os desenvolvimentos tecnológicos que impulsionam a desextinção — clonagem, edição
          genética, biologia sintética — não existem em um vácuo. As mesmas ferramentas que
          podem trazer uma espécie de volta da extinção podem ser aplicadas hoje para combater
          doenças genéticas em populações ameaçadas, aumentar a diversidade genética de espécies
          em perigo crítico e até mesmo desenvolver alternativas sustentáveis a práticas industriais
          degradantes. A destruição de habitats e as mudanças climáticas ameaçam milhares de espécies
          que ainda não desapareceram. Nossa tecnologia não olha apenas para o passado — ela oferece
          ferramentas concretas para proteger o presente e garantir que menos espécies cheguem
          ao ponto de não retorno.
        </p>
      </section>

      {/* QUOTE */}
      <section style={{ padding: '80px 48px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <blockquote style={{
          fontFamily: "'Telegraf Light', sans-serif",
          fontWeight: 200,
          fontSize: 'clamp(24px, 3.5vw, 48px)',
          lineHeight: 1.35,
          fontStyle: 'italic',
          margin: 0,
          maxWidth: '800px',
          color: 'rgba(255,255,255,0.9)',
        }}>
          "O futuro não é algo que apenas nos espera — é algo que construímos, célula por célula,
          genoma por genoma, escolha por escolha. Cada espécie que restauramos é uma declaração
          de que a humanidade pode ser curadora, não apenas destruidora, da vida na Terra."
        </blockquote>
      </section>

    </div>
  );
}
