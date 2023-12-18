import React from 'react'
import biscoito from '../assets/biscoito.png';
import deer from '../assets/deer.png';
import papaiBody from '../assets/papai-body.png';
import papaiFace from '../assets/papai-face.png';
import presente from '../assets/presente.png';
import treeGren from '../assets/tree-green.png';
import treeRed from '../assets/tree-red.png';
import folhas from '../assets/folhas.png';

import Button from './Button';


const Card = ({props}) => {

  return (
    <div className='w-[100%]   sm:max-h-[800px] min-h-[85vh] max-w-[600px]   shadow-[inset_1_0px_15px_rgba(0,0,0,0.6)]'>
        <div className='h-[100vh] sm:h-[85vh] flex flex-col p-1 bg-[#f1af09]'>
            <div style={{backgroundImage: `url(${deer})`}} className='w-full grow bg-contain bg-dark-blue'></div>
            <div className='w-full bg-dark-red text-nude flex flex-col justify-center drop-shadow-lg pt-[8%] pb-[8%]'>
                <div id="title" className='pt-1'>
                    <h1 className='text-left pl-[10%]'>Feliz Natal</h1>
                </div>
                <div id="message" className='text-justify flex justify-center  pt-2'>
                    <h3 className='w-[90%] sm:w-[80%] text-[90%]' >Neste Natal, desejo a todos um período repleto de alegria e calor humano. Que as luzes festivas iluminem nossos corações, criando laços mais fortes entre amigos e familiares. Que possamos compartilhar momentos significativos, promovendo a paz e renovando a esperança para o ano que se inicia. Feliz Natal a todos, cheio de amor e felicidade!</h3>
                </div>
                <div id="creator" className='w-[90%]  flex justify-center text-center sm:w-[80%] pl-4 pr-4  pt-4' >
                    <div className='w-[50%]'>De: </div>
                    <div className='w-[50%]'>Para: </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${papaiBody})`}} className='w-full grow  bg-contain bg-dark-blue  flex items-center justify-center'>
                <div className='w-[50%] px-3 h-[50px] sm:w-[30%]'>
                    <Button bgColor="#BE3737" textColor="#F4E7DE" content="Continuar!" ></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card

/*
    <div className='sm:w-[100%] w-[95%] max-w-[400px] max-h-[600px] h-[70%] p-1 bg-[#f1af09] shadow-[inset_1_0px_15px_rgba(0,0,0,0.6)]'>

*/