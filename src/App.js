import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Article from './components/Article';
import { useEffect, useState } from 'react';

function App() {
  const [id, setId] = useState(sessionStorage.getItem("id"))
  useEffect(()=>{
    sessionStorage.setItem("id",id)
  },[id])
  useEffect(()=>{
    setId(sessionStorage.getItem("id"))
  },[id])

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home setId={setId} />} />
        <Route path="/:slug" exact element={<Article id={id} />} />
      </Routes>
    </div>
  );
}

export default App;
