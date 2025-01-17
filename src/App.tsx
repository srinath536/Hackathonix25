import './App.css';
import AboutHack from './components/AboutHack';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Domain from './components/Domain';
import Loader from './components/Loader';
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors';

function App() {
  
  return (
    <div>
      <Loader/>
      <Header />
      <HeroSection />
      <AboutHack/>
      <Domain />
      <Prizes/>
      <Sponsors/>
      <FAQ/>
      <Footer />
     </div>
  );
}

export default App;
