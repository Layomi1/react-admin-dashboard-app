import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mt-10'>
      <p className='text-gray-300'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-500'>{title}</p>
    </div>
  )
}

export default Header