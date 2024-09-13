import React from 'react'
import IconRenderer from './IconRenderer'

const Tab = ({title, logo, url}) => {
  
  return (
    <div className='border-2 border-white w-full rounded-lg py-2'>
      <a href={url} target="_blank" rel="noreferrer" className='flex gap-2 justify-center items-center'>
        <IconRenderer iconName = {logo} />
        <p className='text-base'>{title}</p>
      </a>
        
    </div>
  )
}

export default Tab