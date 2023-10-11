import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

// import SimpleBar from 'simplebar-react'
//import TitleBar from './components/titlebar/TitleBar'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/* <TitleBar /> */}
            <App />
        </Router>
    </React.StrictMode>,

    document.getElementById('root')
);