import './App.css';
import AboutHack from './components/AboutHack';
import AboutUs from './components/AboutUs';
import CoreMembers from './components/CoreMembers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Domain from './components/Domain';
function App() {
return (
  <div>
      <Header/>
      <HeroSection/>
      <AboutHack/>
      <Domain/>
      <Prizes/>
      <AboutUs/>
      <Sponsors/>
      <CoreMembers/>
      <FAQ/>
      <Footer/>
      
      
    </div>
   
  )
}

export default App