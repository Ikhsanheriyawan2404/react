import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
            <CreateBlog />
            <DetailBlog />
            <Home />
        </div>
        {/* <Router>
            <Routes>
            <Route path='/create-blog' element={<CreateBlog />} exact />
            <Route path='/detail-blog' element={<DetailBlog />} exact />
            <Route path='/' element={<Home />} exact />
            </Routes>
        </Router> */}
        <Footer />
    </div>
  )
}

export default MainApp