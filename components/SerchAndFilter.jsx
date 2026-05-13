import React from 'react'
import searcg from '../src/assets/search-line.svg'
import dd from '../src/assets/align-bottom.svg'

const SerchAndFilter = () => {
  return (
    <>
        <section className='w-full flex justify-between'>
            <div    className='w-[40%] border border-[#e8e8fa] m-3 rounded-3xl flex justify-between items-center'>
      <img className=' w-10 h-5 m-1 ' src={searcg} alt="" />  
      <input type="text" className=' flex-1 px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400' placeholder='Search...' />
            </div>

            <div className='flex items-center mx-3'>
            <h4 className=' p-2 border border-[#e8e8fa] rounded-3xl font-bold'>Filter by types</h4>
            <img className='w-10  p-1' src={dd}alt="" />
            </div>
    </section>
    
    </>
  )
}

export default SerchAndFilter