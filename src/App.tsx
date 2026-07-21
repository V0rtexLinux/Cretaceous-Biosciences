import { Route, Switch, Router as WouterRouter } from 'wouter';
import NavHeader from '@/components/NavHeader';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import DinosaurProgram from '@/pages/DinosaurProgram';
import Download from '@/pages/Download';
import News from '@/pages/News';
import SpeciesIndex from '@/pages/SpeciesIndex';
import DeExtinction from '@/pages/DeExtinction';
import Conservation from '@/pages/Conservation';
import ScienceTechnology from '@/pages/ScienceTechnology';
import BetterWorld from '@/pages/BetterWorld';
import Company from '@/pages/Company';
import Labs from '@/pages/Labs';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dinosaur-program" component={DinosaurProgram} />
      <Route path="/download" component={Download} />
      <Route path="/news" component={News} />
      <Route path="/species" component={SpeciesIndex} />
      <Route path="/de-extinction" component={DeExtinction} />
      <Route path="/conservation" component={Conservation} />
      <Route path="/science" component={ScienceTechnology} />
      <Route path="/better-world" component={BetterWorld} />
      <Route path="/company" component={Company} />
      <Route path="/labs" component={Labs} />
      <Route>
        {/* 404 fallback */}
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
            color: '#fff',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: "'Telegraf Light', sans-serif",
                fontSize: '64px',
                fontWeight: 200,
                marginBottom: '16px',
              }}
            >
              404
            </h1>
            <a
              href="/"
              style={{
                fontFamily: "'NB Architekt Std', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
              }}
            >
              Return Home
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function AppLayout() {
  return (
    <>
      <NavHeader />
      <main style={{ paddingTop: '160px' }}>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <AppLayout />
    </WouterRouter>
  );
}
