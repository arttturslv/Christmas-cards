import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Superior from './pages/Superior';
import Inferior from './pages/Inferior';
import Resultado from './pages/Resultado';

import Informacoes from './pages/Informacoes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/superior' element={<Superior/>} />
      <Route path='/inferior' element={<Inferior/>} />
      <Route path='/Informacoes' element={<Informacoes/>} />
      <Route path='/resultado' element={<Resultado/>} />

    </Routes>
  )
}

export default App