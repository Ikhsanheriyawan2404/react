import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import './mainapp.scss'

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
        <div className='header-wrapper'>
            <Header />
        </div>
        <div className='content-wrapper'>
            <Home />
        </div>
            {/* <Routes>
              <Route path='/create-blog' element={<CreateBlog />} exact />
              <Route path='/detail-blog/:id' element={<DetailBlog />} exact />
            </Routes> */}
        <Footer />
    </div>
  )
}

export default MainApp