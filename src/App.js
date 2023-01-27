import './styles/Index.css'
import {Routes, Route} from 'react-router-dom'
import Game from './components/Game';
import GameOver from './components/GameOver';
import GameFinished from './components/GameFinished';
import GameTie from './components/GameTie';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="/game-finished" element={<GameFinished />} />
        <Route path="/game-tie" element={<GameTie />} />
      </Routes>
    </div>
  );
}

export default App;
