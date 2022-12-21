import React from 'react'

function Heading({children}) {
  return (
    <h1 className="max-w-[840px] font-extrabold text-5xl uppercase text-[#000F30] mb-[30px]">{children}</h1>
  )
}

export default Heading