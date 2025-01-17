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
import Filler from './components/Filler';
import Cursor from './components/Cursor'

function App() {
  
  return (
    <div>
     
      <Loader/>
      <Cursor/>
      <Header />
      <HeroSection />
      <AboutHack/>
      <Filler/>
      <Domain />
      <Prizes/>
      <Sponsors/>
      <FAQ/>
      <Footer />
     </div>
  );
}

export default App;
