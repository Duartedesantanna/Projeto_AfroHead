import './App.css';
import { Route, Routes } from 'react-router';

import Home from './pages/Home'
import About from './pages/About'
import Cadastro from './pages/Cadastro'
import Finder from './pages/Finder'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre" element={<About />} />
      <Route path="ache-seu-barbeiro" element={<Finder />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
