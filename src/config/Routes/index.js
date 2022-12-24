import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, MainApp } from '../../pages';
import CreateBlog from '../../pages/CreateBlog';
import DetailBlog from '../../pages/DetailBlog';


const Kontol = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/" element={<MainApp />} exact />
                <Route path='/create-blog/:id?' element={<CreateBlog />} exact />
                <Route path='/detail-blog/:id' element={<DetailBlog />} />
            </Routes>
        </Router>
    )
}

export default Kontol;