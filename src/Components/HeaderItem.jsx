import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 hover:text-decoration-thick py-3'>
        <Icon />
        <h2 className=' text-[12px] md:text-[18px]'>{name}</h2>
  
    </div>
  )
}

export default HeaderItem