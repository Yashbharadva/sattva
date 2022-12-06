import './App.css';
import HeaderComponent from './components/header/header';
import WelcomeMessage from './components/welcome/welcome';
import Details from './components/details/details';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <WelcomeMessage />
      <Details />
    </div>
  );
}

export default App;
