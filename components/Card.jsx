import React from 'react'
import heart from '../src/assets/scan-heart-stroke-rounded.svg'
import gtyp from '../src/assets/gtpoki.jpg'
import gsy from '../src/assets/grasstype.png'
const Card = () => {
    // const cardData = {
    //     code:  ,
    //     img : ,
    //     titalname : ,
    //     types: ,
    //     type : ,

    // }
  return (
    <>
    
<section id='cards' className='w-90  border border-black h-fit  flex flex-col  justify-between mx-10 my-5 rounded-3xl  '>
<div className=" flex justify-between  p-2">
    <span className='text-[#97a3c3]'>#6985</span>
   
    <img className=' w-8 h-8 ' src={heart} alt="" />
</div>
<div className="cent">
    <img className='w-65 mx-3 rounded-3xl  h-85' src={gtyp} alt="" />
</div>
<div className=" flex flex-col ">
    <span className='text-2xl px-5 m-2 font-sans font-bold text-slate-800'>yokuzuko </span>
    <div>
        {/* svg+type  */}
        <div className=' border border-[#9f9fb9] h-10 w-fit  p-2 m-2 flex justify-between items-center rounded-3xl bg-[#c5c5ef]'>
            <img className='rounded-full h-5 px-1 ' src={gsy} alt="" />
            <span className='text-[#67C76B] px-1'>Grass</span>
        </div>
        <img src="" alt="" />
    </div>
</div>

     </section>
    </>
  )
}

export default Card