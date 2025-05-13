import './App.css';
import Fulltime from './Components/Fulltime';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';
import { Routes, Route, NavLink } from 'react-router-dom';
import { StopwatchProvider } from './Components/StopwatchContext';

function App() {
  return (
    <StopwatchProvider> 
      <div className="App">
        <div className="link">
          <NavLink to="/fulltime" className={({ isActive }) => (isActive ? 'active-link' : "")}>Saat</NavLink>
          <NavLink to="/stopwatch" className={({ isActive }) => (isActive ? 'active-link' : "")}>Dayanan saat</NavLink>
          <NavLink to="/timer" className={({ isActive }) => (isActive ? 'active-link' : "")}>Taymer</NavLink>
        </div>
        <Routes>
        <Route path="/" element={<Fulltime />} />
          <Route path="/fulltime" element={<Fulltime />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </StopwatchProvider>
  );
}

export default App;
