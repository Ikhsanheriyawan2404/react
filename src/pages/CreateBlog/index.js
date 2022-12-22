import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Upload, TextArea, Gap } from '../../components'
import './createblog.scss'

const CreateBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='blog-post'>
      <Button title="Kembali" onClick={() => navigate('/')} />
      <p className='title'>Create New Post</p>
      <Input label='Post Title' />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className='button-action'>
        <Button title='Save' />
      </div>
    </div>
  )
}

export default CreateBlog