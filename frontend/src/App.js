import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListMusic from './components/ListMusic';
import AddMusic from './components/AddMusic';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element= {<ListMusic />}></Route>
          <Route path='/add-music/:id' element = {<AddMusic />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
