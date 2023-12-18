import React, { useEffect } from 'react'

function SlideDot({id}) {

    useEffect(()=> {
        const indexAtivo = document.getElementById(id);
        if(indexAtivo) 
            indexAtivo.style.backgroundColor = "#990913";   
        const indexAnt = document.getElementById(id-1);
        if(indexAnt) 
        indexAnt.style.backgroundColor = "transparent";   

        const indexProx = document.getElementById(id+1);
        if(indexProx) 
        indexProx.style.backgroundColor = "transparent";   
    }, [id]);


  return (
    <div className=' w-[100%] flex justify-center h-auto '>
        <div className='flex gap-5 justify-center content-between'>
            {[1,2,3,4].map((index) => (
                <span key={index} id={index.toString()} className=' bg-transparent border-solid border-2  border-dark-red relative w-[15px] h-[15px] rounded-full inline-block'></span>
            ))}  
        </div>
    </div>
  )
}

export default SlideDot;