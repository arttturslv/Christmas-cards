import React from 'react'

const Button = ({bgColor, textColor, content, onClick}) => {

  const bntStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <div className=' bg-dark-red w-[100%] h-[100%] rounded-lg shadow-3xl hover:bg-[#911f27] hover:shadow-xl cursor-pointer'>
        <h3 onClick={onClick} style={bntStyle} className=' text-nude text-center rounded-lg  text-[1.1rem] pt-2 pb-2'>{content}</h3>
    </div>
  )
}

export default Button