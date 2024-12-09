import React from 'react'
interface button{
    text : string,
    bgcolor : string,
    textcolor : string
}
function Button({text,bgcolor,textcolor}:button) {
  return (
    <button className={`py-3 px-4 ${bgcolor} ${textcolor} text-[24px] font-bold`}>
        {text}

    </button>
  )
}

export default Button