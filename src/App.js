import './App.css';
import HERO from './components/hero/Hero';
import ABOUT from './components/about/about';
import FOOTER from './components/footer/footer'
import PROJECTS from './components/Projects'

function App() {
  return (
    <div>
      <HERO />
      <PROJECTS />
      <ABOUT />
      <FOOTER />
    </div>
  );
}

export default App;
