import React from 'react'
import { linksData } from '../Data/linksData'
import Tab from './Tab'

const CardBoard = () => {
  return (
    <div className='w-full flex justify-center items-center h-full flex-col gap-2'>

      {
        linksData.map((item, index) => (
            <Tab key={index} title={item.text} logo={item.iconName} url={item.url} />
        ))
      }
    </div>
  )
}

export default CardBoard