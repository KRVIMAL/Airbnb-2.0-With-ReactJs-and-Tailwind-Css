import React from 'react'

function Filter({title,icon}) {
  return (
    <div className='bg-[#ff5a60] flex  text-white items-center hover:bg-white
     hover:text-[#ff5a60]
     duration-100 ease-out gap-2 py-1 px-3 sm:px-4 rounded-full text-[14px] sm:text-[16px]'>
      {icon}
      {title}
    </div>
  )
}

export default Filter