import styles from "./style";
import {  Projects, Preloader, CTA, Footer, Navbar, Stats, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
      <Preloader />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
