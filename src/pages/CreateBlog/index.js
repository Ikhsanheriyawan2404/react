import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Upload, TextArea, Gap } from '../../components'
import './createblog.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setForm, setImgPreview, postToAPI } from '../../config/redux/action/createBlogAction'

const CreateBlog = () => {

  const {form, imgPreview} = useSelector(state => state.createBlogReducer)
  const {title, body} = form
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = () => {
    postToAPI(form)
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    dispatch(setForm('image', file))
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }

  return (
    <div className='blog-post'>
      <Button title="Kembali" onClick={() => navigate('/')} />
      <p className='title'>Create New Post</p>
      <Input label='Post Title' value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm('body' ,e.target.value))} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title='Save' onClick={onSubmit} />
      </div>
    </div>
  )
}

export default CreateBlog