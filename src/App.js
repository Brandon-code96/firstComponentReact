import logo from './logo.svg';
import './App.css';
import { Contacto } from './models/contacto';
import PropsContactos from './components/propsContactos';

function App() {

  const contactos = new Contacto('Brandon','Ubillus','b@gmail.com', true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <PropsContactos props={contactos}></PropsContactos>
      </header>
    </div>
  );
}

export default App;
