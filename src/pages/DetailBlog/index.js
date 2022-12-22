import React from 'react'
import { RegisterBg } from '../../assets'
import './detailblog.scss'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'

const DetailBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='detail-blog-wrapper'>
      <img src={RegisterBg} alt='thumb' className='img-cover' />
      <p className='blog-title'>Title</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <Button title='Back' onClick={() => navigate('/')} />
    </div>
  )
}

export default DetailBlog