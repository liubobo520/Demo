import React from 'react'
import 'antd/dist/antd.css'


import Home from './pages/Home'
import {
  HashRouter,
} from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <div className="app">
        <Home></Home>
      </div>
    </HashRouter>
  )
}

export default App;
