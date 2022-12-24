import React from 'react'
import './blogitem.scss'
import { Button } from '../../../components'
import { useNavigate } from 'react-router-dom'

const BlogItem = (props) => {
  const navigate = useNavigate()
  const {image, title, body, name, date, _id} = props
  return (
    <div className='blog-item'>
      <img className='image-thumb' src={image} alt='post' />
      <div className='content-detail'>
        <div className='title-wrapper'> 
          <p className='title'>{ title }</p>
          <div className='edit-wrapper'>
            <p className='edit' onClick={() => navigate(`/create-blog/${_id}`)}>Edit</p> |
            <p className='delete' onClick={() => props.onDelete(_id)}>Delete</p>
          </div>
        </div>
        <p className='author'>{ name } - {date}</p>
        <p className='body'>{ body }</p>
        <Button title='View Details' onClick={() => navigate(`/detail-blog/${_id}`)} />
      </div>

    </div>
  )
}

export default BlogItem