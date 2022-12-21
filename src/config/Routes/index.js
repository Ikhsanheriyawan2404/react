import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, Home } from '../../pages';


const Kontol = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/" element={<Home />} exact />
            </Routes>
        </Router>
    )
}

export default Kontol;