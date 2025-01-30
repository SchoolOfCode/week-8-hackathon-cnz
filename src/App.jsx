import { useState } from 'react'
import './App.css'
import VideoPlayerCard from './components/videoplayer/videoplayer'
import Header from './header/header'
import Footer from './footer/footer'

function App() {

  return (
    <>
      <div>
        <Header />
        <VideoPlayerCard />
        <Footer />
      </div>
      
    </>
  )
}

export default App
