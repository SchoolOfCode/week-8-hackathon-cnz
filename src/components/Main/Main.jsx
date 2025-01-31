import { useState } from 'react'
import { data } from '../../data/data';
import AddSongForm from "../Form/Form";
import VideoPlayerCard from "../VideoPlayer/VideoPlayer";
import SongList from "../SongList/SongList";

function Main() {
  // initialise state of videos with data imported from data.js
  const [ videos, setVideos ] = useState(data);
  // initialise state of currently selected video
  const [ currentVideo, setCurrentVideo ] = useState(null);

  function handleClickSongCard(e) {
    // preventDefault(e);
    setCurrentVideo(e);
    console.log(e);
  }

  return (
    <main>
      <AddSongForm videos={videos} setVideos={setVideos}/> 
      <VideoPlayerCard currentVideo={videos[currentVideo]} />
      <SongList handleClickSongCard={handleClickSongCard} videos={videos} />
    </main>
  );
}

export default Main;
