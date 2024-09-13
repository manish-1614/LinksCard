import React from 'react'
import DP from './Components/DP'
import CardBoard from './Components/CardBoard'


const Home = () => {
  return (
    <div className='w-full h-[100vh] bg-brown-5 flex justify-center items-center'>
      <div className='min-w-[300px] max-w-[calc(min(70%,700px))] bg-palette-200 rounded-lg p-4 grid grid-rows-2 gap-4'>
        <DP/>
        <CardBoard/>
      </div>
    </div>
  )
}

export default Home