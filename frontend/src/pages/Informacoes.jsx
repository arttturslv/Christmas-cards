import React from 'react'
import SlideDot from '../components/SlideDot';
import Button from '../components/Button';
import { useState } from 'react';
import { handleChanges, handleSubmit, Voltar, getInputInfo } from '../Functions';

function Superior() {
  const [id, setId] = useState(1);


  return (
    <div id="PageSuperior" className='w-full min-h-[100vh] bg-[#62804D] flex items-center justify-center'>

      <div className='h-[95%] w-[1440px] text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.8rem] flex flex-col'>
        <h1 className='py-[30px] pl-[10px]'>Preencha as infomarções:</h1>

        <div className='flex flex-col items-center px-[20px]'>
        <div className=' flex sm:w-[80vw] max-w-[1000px] flex-col  md:pl-[40px] w-[80vw] py-5 items-center'>
            <h3 className='text-[1.6rem] md:text-[2rem] lg:text-[3rem]'>Título*</h3>
            <input onBlur={(e) => { handleChanges(e.target.name, e.target.value) }} placeholder={getInputInfo("cardTitle")} type="text" name="cardTitle" id="title" className=' text-[#fff] rounded-lg bg-[#ad3f3f] shadow-lg  px-5 py-2 md:py-3 lg:py-4 w-[100%]' />
          </div>
          <div className=' flex sm:w-[80vw] max-w-[1000px] flex-col  md:pl-[40px] w-[80vw] py-5 items-center'>
            <h3 className='text-[1.6rem] md:text-[2rem] lg:text-[3rem]'>Remetente*</h3>
            <input onBlur={(e) => { handleChanges(e.target.name, e.target.value) }} placeholder={getInputInfo("cardRemetente")} type="text" name="cardRemetente" id="title" className=' text-[#fff] rounded-lg bg-[#ad3f3f] shadow-lg  px-5 py-2 md:py-3 lg:py-4 w-[100%]' />
          </div>
          <div className=' flex sm:w-[80vw] max-w-[1000px] flex-col  md:pl-[40px] w-[80vw] py-5 items-center'>
            <h3 className='text-[1.6rem] md:text-[2rem] lg:text-[3rem]'>Mensagem*</h3>
            <input onBlur={(e) => { handleChanges(e.target.name, e.target.value) }}  placeholder={getInputInfo("cardMensagem")}  type="text" name="cardMensagem" id="title" className=' text-[#fff] rounded-lg bg-[#ad3f3f] shadow-lg  px-5 py-2 md:py-3 lg:py-4 w-[100%]' />
          </div>
        </div>

        <div className="py-[10px]">
          <SlideDot id={id}></SlideDot>
        </div>
        <div className=' flex justify-center py-5 '>
          <span className='w-[30%] px-3 sm:w-[15%]'>
            <Button bgColor="#F4E7DE" textColor="#BE3737" content="Voltar!" onClick={Voltar}></Button>
          </span>
          <span className='w-[50%] px-3 sm:w-[30%]'>
            <Button bgColor="#BE3737" textColor="#F4E7DE" content="Continuar!" onClick={() => {handleSubmit("cardTitle", "cardRemetente", "cardMensagem")}}></Button>
          </span>
        </div>
      </div>

    </div>

  )
}

export default Superior;
