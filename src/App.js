import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BrowsePage from './pages/browse/browse-page.component'

const TestPage = () => <div>Test Page</div>

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/browse" />}></Route>
          <Route exact path="/browse" element={<BrowsePage />}></Route>
          <Route exact path="/assessment" element={<TestPage />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App
