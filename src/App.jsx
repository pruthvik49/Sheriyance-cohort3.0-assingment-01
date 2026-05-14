import React from 'react'
import Navbar from '../components/Navbar'
import SerchAndFilter from '../components/SerchAndFilter'
import Card from '../components/Card'

const App = () => {
  return (
    <>
    <section className=' m-3 rounded-2xl bg-[#F4F4FA]  min-h-[100]'>
    <Navbar />

    <SerchAndFilter />
    <section className='flex '>

   <Card/>
   <Card/> 
   <Card/> 
    </section>
    <section id='cards2.0'></section>
    <footer>
    </footer>
    </section>
    
    </>
  )
}

export default App