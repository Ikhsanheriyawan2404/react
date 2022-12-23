import axios from 'axios'

export const setDataBlog = (page) => (dispatch) => {
  axios.get(`http://localhost:3002/blogs?page=${page}&perPage=5`)
  .then(result => {
    const response = result.data

    dispatch({type: 'UPDATE_DATA_BLOG', payload: response.data})
    dispatch({
      type: 'UPDATE_PAGE',
      payload: {
        currentPage: response.current_page,
        totalPage: Math.ceil(response.total_data / response.per_page)
      } 
    })
  })
  .catch(err => {
    console.log(err)
  })
}