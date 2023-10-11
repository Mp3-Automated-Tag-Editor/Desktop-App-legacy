import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import {  Routes, Route, useLocation } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

function App() {
    const location = useLocation();

    function returnCurrentState(currContext) {
        if (currContext === '/') return "Home"
        if (currContext === '/edit') return "Edit"
        if (currContext === '/settings') return "Settings"
        if (currContext === '/about') return "About Us"
    }

    return (
        <Routes>
            <Route path="/" element={<MainLayout state={returnCurrentState(location.pathname)} />}>
                <Route index element={<Dashboard />} />
                {/* <Route path="search" element={<Blank />} />
                <Route path="preview" element={<Blank />} /> */}
                <Route path="edit" element={<Blank />} />
                <Route path="settings" element={<Blank />} />
                <Route path="about" element={<Blank />} />
            </Route>
        </Routes>
    )
}

export default App
