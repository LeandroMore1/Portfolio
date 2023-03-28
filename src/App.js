import { Header } from './Components/Header/Header';
import { Habilidades } from './Components/Habilidades/Habilidades';
import { Proyectos } from './Components/Proyectos/Proyectos';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Habilidades/>
        <Proyectos/>
    </div>
  );
}

export default App;
