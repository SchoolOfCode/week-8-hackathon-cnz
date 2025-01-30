import VideoPlayerCard from "../Videoplayer/Videoplayer";
import { useState } from 'react'
import { data } from '../../data/data';

function Main() {
  // initialize state of videos with data imported from data.js
  const [videos, setVideos] = useState(data);

  return (
    <main>
      {/* <AddSongForm /> */}
      {/* <SongList /> */}
      <VideoPlayerCard />
    </main>
  );
}

export default Main;
