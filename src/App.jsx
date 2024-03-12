import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signi from './pages/Signi.jsx'
import Signu from './pages/Signu.jsx'
export default function App(){
  return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Signi />} />
            <Route path="/signi" element={<Signi />} />
            <Route path="/signu" element={<Signu />} />
          </Routes>
        </BrowserRouter>


      </div>

  )
}
