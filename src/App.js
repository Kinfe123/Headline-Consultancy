
import './App.css';
import Choose from './components/Choose';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import GalleryShow from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Partner from './components/Partner';
import Study from './components/Study';
import Testimonials from './components/Testimonial';
import WorkingFeature from './components/WorkingFeature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Partner />  */}
      <Choose />
      <Feature />
      <WorkingFeature />
      
      <Study />
      <GalleryShow />

      <Contact />
      <Testimonials />
      <Footer />
  
    </div>
  );
}

export default App;
