import React from 'react'
import './upload.scss'
import { LoginBg } from '../../../assets'

const Upload = () => {
  return (
    <div className='upload'>
        <img src={LoginBg} className='preview' alt="preview" />
        <input type='file' />
    </div>
  )
}

export default Upload