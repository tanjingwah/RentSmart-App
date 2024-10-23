import './App.css';
import Bento from './components/Bento/Bento'
import Header from './components/Header/Header';
import Discover from './components/Discover/Discover';
import Carousell from './components/Carousell/Carousell';
import Partners from './components/Partners/Partners';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className="App">

      {/* Home */}
        {/* Header */}
          {/* Search */}
      <Header />
      <Bento />

      {/* Discover */}
      <Carousell />
      <Discover />
        {/* Search */}

      {/* Partners */}
      <Partners />

      {/* Testimonials */}

      {/* FAQs */}
      <FAQ />
        
      {/* Download app link */}
        
      {/* Contact Us */}
        
      {/* Footer */}  

    </div>
  );
}

export default App;
