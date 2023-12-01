import { Header } from './Components/Header/Header';
import { Habilidades } from './Components/Habilidades/Habilidades';
import { Proyectos } from './Components/Proyectos/Proyectos';
import { About } from './Components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Habilidades/>
        <Proyectos/>
        <About/>
    </div>
  );
}

export default App;
