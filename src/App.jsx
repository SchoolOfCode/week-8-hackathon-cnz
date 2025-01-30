import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { data } from './data/data';

function App() {

  // initialize state of videos with data imported from data.js
  const [videos, setVideos] = useState(data);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
