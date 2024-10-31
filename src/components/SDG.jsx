import React from 'react'
import '../dist/css/sdg.css'
import sdg from '../assets/img/sdg.png'

export const SDG = () => {
  return (
    <div className='sdg_wrap'>
        <img src={sdg} alt="" className='sdg_img'/>
    </div>
  )
}
