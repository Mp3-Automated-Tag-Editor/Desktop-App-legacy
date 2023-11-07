import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import {  Routes, Route, useLocation } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import EditPage from './pages/Edit/Edit'

function App() {
    const location = useLocation();

    function returnCurrentState(currContext) {
        if (currContext === '/') return "Home"
        if (currContext === '/download') return "Download"
        if (currContext === '/edit') return "Edit"
        if (currContext === '/settings') return "Settings"
        if (currContext === '/about') return "About Us"
    }

    return (
        <Routes>
            <Route path="/" element={<MainLayout state={returnCurrentState(location.pathname)} />}>
                <Route index element={<Home />} />
                {/* <Route path="set" element={<Set />} />
                <Route path="preview" element={<Preview />} /> */}
                <Route path="edit" element={<EditPage />} />
                <Route path="download" element={<Blank />} />
                <Route path="settings" element={<Blank />} />
                <Route path="about" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App
