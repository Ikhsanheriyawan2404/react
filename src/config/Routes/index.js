import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, MainApp } from '../../pages';


const Kontol = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/" element={<MainApp />} exact />
            </Routes>
        </Router>
    )
}

export default Kontol;