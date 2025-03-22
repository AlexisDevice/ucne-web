import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Home } from './pages/Home.jsx';
import './styles/static.css';
import { Comentario } from './pages/Comentario.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hola Mundo!</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/comentarios' element={<Comentario />} />
        <Route path='/asignaturas' element={<h1>Asignaturas</h1>} />
        <Route path='/maestros' element={<h1>Maestros y Facultades</h1>} />
        <Route path='/carreras' element={<h1>Carreras</h1>} />
        <Route path='/perfil' element={<h1>Perfil</h1>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
