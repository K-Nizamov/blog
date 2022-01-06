import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Article from './components/Article';
import { useState} from 'react';

function App() {
  const [id, setId] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home setId={setId}  />} />
        <Route path="/:slug" exact element={<Article id={id.id} img={id.img} />} />
      </Routes>
    </div>
  );
}

export default App;
