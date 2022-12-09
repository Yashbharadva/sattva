import './App.css';
import HeaderComponent from './components/header/header';
import WelcomeMessage from './components/welcome/welcome';
import Details from './components/details/details';
import Count from './components/count/count';
import AutoCaro from './components/autoCaro/autoCaro';
import FAQ from './components/FAQ/faq';
import ContactUs from './components/contactUs/contactUs';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <WelcomeMessage />
      <Details />
      <Count />
      {/* <OurStrength /> */}
      {/* <AutoCaro />  */} {/* have to uncomment */}
      <FAQ />
      <ContactUs />
     </div>
  );
}

export default App;
