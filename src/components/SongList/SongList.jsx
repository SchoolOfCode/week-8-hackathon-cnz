import SongCard from '../SongCard/SongCard';
import './SongList.css';

function SongList({ videos, handleClickSongCard }) {
    return (
        <div className="song-list">
        {videos.map((video, i) => (
            <SongCard i={i} handleClickSongCard={handleClickSongCard} video={video} />
        ))}
        </div>
    );
}

export default SongList;
