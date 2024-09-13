import React from 'react'

const Tab = ({title, logo, url}) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        <p>{title}</p>
      </a>
        
    </div>
  )
}

export default Tab