import logo from './logo.svg';
import './App.css';
import { Main } from './pages/index';
import { PersonProvider } from './hooks/usePerson';

function App() {
  return (
    <div className="App">
      <PersonProvider><Main/></PersonProvider>
    </div>
  );
}

export default App;
