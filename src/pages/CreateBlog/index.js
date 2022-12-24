import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Input, Upload, TextArea, Gap } from '../../components'
import './createblog.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setForm, setImgPreview, postToAPI, updateToAPI } from '../../config/redux/action/createBlogAction'
import axios from 'axios'

const CreateBlog = (props) => {

  const {form, imgPreview} = useSelector(state => state.createBlogReducer)
  const {title, body} = form
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const id = props.params.id
    if (id) {
      setIsUpdate(true)
      axios.get(`http://localhost:5000/blogs/${id}`)
      .then(res => {
        const data = res.data.data
        console.log(dispatch(setForm('title'), data))
        dispatch(setForm('body'), data.body)
        dispatch(setImgPreview(`http://localhost:5000/${data.image}`))
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [dispatch, props])

  const onSubmit = () => {
    if (isUpdate) {
      const id = props.params.id
      updateToAPI(form, id)
    } else {
      postToAPI(form)
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    dispatch(setForm('image', file))
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }

  return (
    <div className='blog-post'>
      <Button title="Kembali" onClick={() => navigate('/')} />
      <p className='title'>{isUpdate ? 'Update Post' : 'Create New Post'}</p>
      <Input label='Post Title' value={title || ""} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body || ""} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title={isUpdate ? 'Updaten' : 'Simpan'} onClick={onSubmit} />
      </div>
    </div>
  )
}

const withRouter = WrappedComponent => props => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

export default withRouter(CreateBlog)