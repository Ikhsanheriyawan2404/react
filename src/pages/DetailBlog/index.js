import React, { useEffect, useState } from 'react'
import './detailblog.scss'
import { Button } from '../../components'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const DetailBlog = (props) => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    // const id = props.match.params.id
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then(res => {
        setData(res.data.data[0])
        console.log(res.data.data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])
  const navigate = useNavigate()
  if (data.author) {
    return (
      <div className='detail-blog-wrapper'>
        <img src={`http://localhost:5000/${data.image}`} alt='thumb' className='img-cover' />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.title} - {data.created_at}</p>
        <p className='blog-body'>{data.body}</p>
        <Button title='Back' onClick={() => navigate('/')} />
      </div>
    )
  }
  return <p>Loading . . . . . . . .</p>
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

export default withRouter(DetailBlog)