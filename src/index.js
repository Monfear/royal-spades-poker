import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Timetable } from './components/pages/Timetable/Timetable';
import { History } from './components/pages/History/History';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/timetable' element={<Timetable></Timetable>}></Route>
                <Route path='/history' element={<History></History>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
