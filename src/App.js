import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'
import Article from './components/Article';
import { useState, useEffect } from 'react';

function App() {
  const [id, setId] = useState(JSON.parse(window.localStorage.getItem("id")))
  const [ img, setImg ] = useState('')

  useEffect(() => {
    setId(JSON.parse(window.localStorage.getItem("id")));
    setImg(localStorage.getItem('img'))
  }, []);

  useEffect(() => {
    window.localStorage.setItem("id", id);
    localStorage.setItem('img',img)
  }, [id,img]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home setId={setId} setImg={setImg} />} />
        <Route path="/:slug" exact element={<Article id={id} img={img} />} />
      </Routes>
    </div>
  );
}

export default App;
