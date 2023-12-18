import React from 'react';
import Button from '../components/Button';
import Card from '../assets/card.png';

const Home = () => {
  return (
    <div id='bg' className=' bg-cover bg-[#62804D] h-full w-screen '>
      <div id='main' className='block pt-[80px] md:pt-[120px] sm:flex pb-[80px] max-w-[1600px]'>
        <div id='left' className='w-[100%] sm:w-[50%] gap-4	text-center flex flex-col justify-evenly items-center'>
          <h1 className='text-[8vw] md:text-[6vw] '>Você quer criar seu próprio cartão de Natal?</h1>
          <div id='right' className='w-[100%] sm:w-[50%] sm:hidden flex justify-center' >
            <img src={Card} className='w-[80%] max-w-[60vh]' alt="" srcset="" />
          </div>
          <h1 className='text-[3vw]'>Aproveite e utilize nossa ferramenta, sem logar e sem pagar :)</h1>
          <div className='w-[300px] '>
            <Button content="SIMM!"></Button>
          </div>
        </div>
        <div id='right' className='w-[100%] sm:w-[50%]  hidden sm:flex   justify-center' >
          <img src={Card} className='w-[80%] max-w-[60vh]' alt="" srcset="" />
        </div>
      </div>

      <div className='bg-[#BE3737] pt-[80px] md:pt-[120px] pb-[80px] shadow-[inset_0_10px_15px_rgba(0,0,0,0.6)] max-w-[1600px]'>
        <div className='flex-col justify-evenly items-center'>
          <h1 className='text-[8vw] pl-[40px] md:text-left text-center md:text-[6vw] pb-[40px] '>Veja exemplos reais:</h1>
        </div>
        <div className='flex'>
          <div id='right' className='w-[100%] justify-center flex' >
            <img src={Card} className='w-[80%] max-w-[60vh]' alt="" srcset="" />
          </div>          
          <div id='right' className='w-[100%]   justify-center  flex' >
            <img src={Card} className='w-[80%] max-w-[60vh]' alt="" srcset="" />
          </div>          
          <div id='right' className='w-[100%] ustify-center flex' >
            <img src={Card} className='w-[80%] max-w-[60vh]' alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
