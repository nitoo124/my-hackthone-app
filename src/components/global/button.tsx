import React from 'react'
interface button{
    text : string,
    bgcolor : string,
    textcolor : string
}
function Button({text,bgcolor,textcolor}:button) {
  return (
    <button className={`py-2 px-3 ${bgcolor} ${textcolor}`}>
        {text}

    </button>
  )
}

export default Button