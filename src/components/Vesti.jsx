import React from 'react'
import Hero from './Hero'
const Products = () => {
  return (
    <div  className='pocetna'>
      <Hero/>
    <div className='w-4/5 m-auto space-y-10'>
      <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center'>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="images/torta.jpg" alt="" />
          <h1 className='text-xl font-semibold'>Čokoladna torta</h1>
          <p className='font-semibold text-gray-600'>Jednostavna čokoladna torta za sve prilike koja će vas oduševiti.</p>
     
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="images/bajadere.jpg" alt="" />
          <h1 className='text-xl font-semibold'>Bajadere</h1>
          <p className='font-semibold text-gray-600'>Bajedere po receptu naših baka.</p>
      
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="images/praline.jpg" alt="" />
          <h1 className='text-xl font-semibold'>Rocher praline</h1>
          <p className='font-semibold text-gray-600'>Jednostavan recept idealan za početnike.</p>
        
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="images/tart.jpg" alt="" />
          <h1 className='text-xl font-semibold'>Tart od karamele i kikirikija</h1>
          <p className='font-semibold text-gray-600'>Tart za koji Vam je potrebno samo 40 minuta.</p>
         
        </div>
      
      </div>
      
      
      <div className='w-full h-[300px] relative'>
        <img className='w-full absolute top-0 rounded-xl h-full object-cover' src="images/takmicenje.jpg" alt="" />
        <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
          <h1 className='text-4xl text-semibold'>Prijavite se za takmičenje i osvojite vredne nagrade!</h1>
          <p>Popunite formular za prijavu u najnovijem broju časopisa "Kuvati srcem"</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products