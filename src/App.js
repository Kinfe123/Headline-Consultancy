
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import FormData from './components/SubmissionForm';
import HomePage from './components/HomePage';
import SubmissionForm from './components/SubmissionForm';
// import SignUpApp from './components/application_process/SignInApp';
import MultiStepForm from './components/application_process/MultiStepForm';
import PageNotUpdated from './components/PageNotUpdated';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            
            
            <Routes>
              
              <Route path='/' element={<HomePage />} />
            
              <Route path='/form' element={<MultiStepForm />} />
              {/* <Route path='/test' element={<MultiStepForm />} />
               */}
               <Route path='*' element={<PageNotUpdated />} /> 

            </Routes>
          </BrowserRouter>
  
  
    </div>
  );
}

export default App;
