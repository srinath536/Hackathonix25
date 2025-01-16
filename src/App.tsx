import './App.css';
import AboutHack from './components/AboutHack';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Prizes from './components/Prizes';
import Domain from './components/Domain';
import Loader from './components/Loader';

function App() {
  
  return (
    <div>
      <Loader/>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="prizes">
      
      </div>
      <AboutHack/>
      <div id="sponsors">
        <Domain />
      </div>
      <div id="core">
       
      </div>
      <FAQ/>
      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
}

export default App;
