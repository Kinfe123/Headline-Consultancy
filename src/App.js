
import './App.css';
import Choose from './components/Choose';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Partner from './components/Partner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Partner />  */}
      <Choose />
      <Feature />
      <Contact />
  
    </div>
  );
}

export default App;
