import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Navigation}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
