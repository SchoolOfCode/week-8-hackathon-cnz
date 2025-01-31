import VideoPlayerCard from "../VideoPlayer/VideoPlayer";
import { useState } from 'react'
import { data } from '../../data/data';
import AddSongForm from "../Form/Form";

function Main() {
  // initialize state of videos with data imported from data.js
  const [videos, setVideos] = useState(data);

  //workaround
  const video = videos[1];
  
  return (
    <main>
      <AddSongForm videos={videos} setVideos={setVideos}/> 
      {/* <SongList /> */}
      <VideoPlayerCard video={video}/>
    </main>
  );
}

export default Main;
