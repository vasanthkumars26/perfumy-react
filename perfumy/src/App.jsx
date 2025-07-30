import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Search/>
      <Hero/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
