import React from 'react'
import Choices from '../components/Choices';
import { useState } from 'react';
import { Continuar, Voltar } from '../Functions';

function Superior() {
  const [id, setId] = useState(1);
  
  return (
      <div id="PageSuperior" className='w-full h-screen bg-[#62804D] flex items-center justify-center'> 
          <Choices id={id} titulo="Escolha o elemento superior:" Voltar={() => Voltar(id, setId)} Continuar={() => Continuar(id, setId)}></Choices>
      </div>
  ) 
}

export default Superior;
