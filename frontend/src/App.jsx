import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Upload } from './pages/Upload'
import { Overview } from './pages/Overview'
import { Analysis } from './pages/Analysis'
import { MLCheck } from './pages/MLCheck'
import { ImageTools } from './pages/ImageTools'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/ml-check" element={<MLCheck />} />
        <Route path="/image-tools" element={<ImageTools />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
