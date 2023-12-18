import React from 'react'
import Choices from '../components/Choices';
import { useState } from 'react';
import { Continuar, Voltar } from '../Functions';

function Inferior() {
  const [id, setId] = useState(1);
  
  return (
      <div id="PageInferior" className='w-full h-screen bg-[#62804D] flex items-center justify-center'> 
          <Choices id={id} titulo="Escolha o elemento inferior:" Voltar={() => Voltar(id, setId)} Continuar={() => Continuar(id, setId)}></Choices>
      </div>
  ) 
}

export default Inferior;
