   import React from 'react'
   import burger from '../src/assets/menu-line.svg'
   import sunfrom from '../src/assets/sun-line.svg'
   import poku from '../src/assets/pokuu.png'

   const Navbar = () => {
     return (
          <nav className='p-10  h-40 flex justify-between'>
            <div className=' w-15 h-15 bg-[#eef0f5]  border border-[#b5b5e3] flex justify-center rounded-2xl'>
            <img className='w-10  p-1 ' src={burger} alt="" />
            </div>

      <img  className='w-50 p-1 ' src={poku} alt="" /> 

      <div className=' w-15 h-15 bg-[#eef0f5] border border-[#b5b5e3] flex justify-center rounded-2xl'>
      <img  className='w-10  p-1 ' src={sunfrom} alt="" />

      </div>
    </nav>
     )
   }
   
   export default Navbar
   
