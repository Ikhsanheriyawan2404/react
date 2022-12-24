import React, { useEffect, useState } from 'react'
import { Button, BlogItem, Gap } from '../../components' 
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setDataBlog } from '../../config/redux/action'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import axios from 'axios'

const Home = () => {
  const [counter, setCounter] = useState(1)
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDataBlog(counter))
  }, [counter, dispatch])

  const navigate = useNavigate();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
  }
  
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Warning!",
      message: "apakahfdsaf anjd auyakin ingin menghapus ini>?",
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            axios.delete(`http://localhost:5000/blogs/${id}`)
            .then(res => {
              alert(res.data.message)
              dispatch(setDataBlog(counter))
            })
            .catch(err => {
              console.log(err)
            })
          }
        },
        {
          label: 'Tidak',
          onClick: () => {
            alert('Tidak jadi')
          }
        }
      ]
    })
  }

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title="Create Blog" onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlog.map(blog => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:5000/${blog.image}`}
              title={blog.title}
              body={blog.body} 
              name={blog.author.name}
              date={blog.created_at}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          )
        })}
      </div>
      <div className='pagination'>
        <Button title='Previous' onClick={previous} />
        <Gap width={20} />
        <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title='Next' onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home