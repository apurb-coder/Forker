import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import DiscoverFroker from "./pages/DiscoverFroker.jsx"
import Blogs from "./pages/Blogs.jsx"
import NavBar from "./components/NavBar.jsx"


const App = () => {
  return (
    <div className='min-h-screen'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/froker" element={<DiscoverFroker/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App