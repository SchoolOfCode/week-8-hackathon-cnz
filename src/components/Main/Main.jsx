import VideoPlayerCard from "../Videoplayer/Videoplayer";
import { useState } from 'react'
import { data } from '../../data/data';

function Main() {
  // initialize state of videos with data imported from data.js
  const [videos, setVideos] = useState(data);
  // set video in the array for the time being
  const video = videos[1];

  return (
    <main>
      {/* <AddSongForm /> */}
      {/* <SongList videos={videos} /> */}
      <VideoPlayerCard video={video} />
    </main>
  );
}

export default Main;
