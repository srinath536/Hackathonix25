import './App.css';
import AboutUs from './components/AboutUs';
import CoreMembers from './components/CoreMembers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import TimeLine from './components/TimeLine';
function App() {
return (
  <div>
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <TimeLine/>
      <Sponsors/>
      <Prizes/>
      <CoreMembers/>
      <FAQ/>
      <Footer/>
      
      
    </div>
   
  )
}

export default App
