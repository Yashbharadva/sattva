import './App.css';
import HeaderComponent from './components/header/header';
import WelcomeMessage from './components/welcome/welcome';
import Details from './components/details/details';
import Count from './components/count/count';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <WelcomeMessage />
      <Details />
      <Count />
    </div>
  );
}

export default App;
