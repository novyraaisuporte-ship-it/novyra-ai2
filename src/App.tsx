import { Suspense, lazy, useEffect } from "react";
import { DevNotice } from "./components/DevNotice";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { track } from "./lib/analytics";

const BelowFold = lazy(() => import("./components/BelowFold"));

export default function App() {
  useEffect(() => {
    track("page_view", { path: window.location.pathname });
  }, []);

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        {/* min-height evita salto de layout enquanto o chunk carrega */}
        <Suspense fallback={<div className="below-fallback" aria-hidden="true" />}>
          <BelowFold />
        </Suspense>
      </main>
      <Footer />
      <DevNotice />
    </>
  );
}
