import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Sample} from './pages/Sample'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Sample />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
