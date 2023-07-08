import './App.css';
import ComponenteDos from './components/ComponenteDos';
import ComponenteUno from './components/ComponenteUno';


function App() {
  return (
    <div>
      
      <ComponenteUno />
      <ComponenteDos prop_greeting={"componente 2"} />
    </div>
  );
}

export default App;
