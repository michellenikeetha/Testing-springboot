import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListMusic from './components/ListMusic';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element= {<ListMusic />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
