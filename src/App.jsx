import './App.css';
import bgDesktopLight from './images/bg-desktop-light.jpg';
import bgMobileLight from './images/bg-mobile-light.jpg';

function App() {
  return (
    <div className="App">
      <picture>
        <source media="(min-width: 475px)" srcset={bgDesktopLight} />
        <img src={bgMobileLight} alt="" />
      </picture>
    </div>
  );
}

export default App;
