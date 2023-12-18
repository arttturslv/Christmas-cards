import React from 'react'
import Preview from '../components/Preview';
import SlideDot from '../components/SlideDot';
import Button from '../components/Button';

const Choices = ({id, titulo ,Voltar, Continuar}) => {

  return (
    <div className='h-[95%] w-[1440px] text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.8rem] flex flex-col'>
              <h1 className='py-[50px] pl-[10px]'>{titulo}</h1>
              <div className='h-[440px] py-2 overflow-hidden overflow-y-auto  justify-center grid self-center gap-2 flex-wrap grid-cols-2 sm:grid-cols-3 xl:grid-cols-4'>
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
                <Preview></Preview> 
              </div>  
              <div className="py-[10px]">
                <SlideDot id={id}></SlideDot>
              </div>
              <div className=' flex justify-center py-5 '>
                <span className='w-[30%] px-3 sm:w-[15%]'>
                  <Button bgColor="#F4E7DE" textColor="#BE3737" content="Voltar!" onClick={Voltar}></Button>
                </span>
                <span className='w-[50%] px-3 sm:w-[30%]'>
                  <Button bgColor="#BE3737" textColor="#F4E7DE" content="Continuar!" onClick={Continuar}></Button>
                </span>
            </div>    
          </div>
  )
}

export default Choices

//              <div className='h-[440px] overflow-hidden overflow-y-auto px-[10px] md:px-[40px] w-auto max-w-[1140px] flex self-center gap-2 flex-wrap justify-center'>
