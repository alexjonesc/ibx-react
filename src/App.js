import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BrowsePage from './pages/browse/browse-page.component'
import Assessment from './pages/assessment/assessment-page.component'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate replace to="/browse" />}></Route>
          <Route path="/browse" element={<BrowsePage />}></Route>
          <Route path="/assessment" element={<Navigate replace to="/browse" />}></Route>
          <Route path="/assessment/:id" element={<Assessment />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App
