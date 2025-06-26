
import './App.css';
import CoreGame from './CoreGame/CoreGame';
function App() {
  return (
    <div>
      <header className='app-header'>
        <h1>The Number Generator!</h1>
      </header>
      <main>
        <CoreGame />
      </main>
    </div>
  );
}

export default App;
