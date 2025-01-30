import { useState } from 'react'
import './App.css';
import VideoPlayerCard from './components/videoplayer/videoplayer';
import Header from './header/header';
import Footer from './footer/footer';
import { data } from './data/data';

function App() {

  // initialize state of videos with data imported from data.js
  const [videos, setVideos] = useState(data);

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
