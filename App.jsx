import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'boxicons/css/boxicons.min.css';

import AppLayout from "./components/layout";
import BlankPage from "./pages/BlankPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<BlankPage />} />
                <Route path='/started' element={<BlankPage />} />
                <Route path='/calendar' element={<BlankPage />} />
                <Route path='/user' element={<BlankPage />} />
                <Route path='/order' element={<BlankPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
