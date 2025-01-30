import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayerCard({ video }) {
  
// This component was imported from the MUI page for cards
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// The reactplayer component only plays one hardcoded video at the moment but will later need a prop passed down for the current video
const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body1">
        {video.message}
      </Typography>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {video.username}
      </Typography>
      <Typography variant="h5" component="div">
        {video.title}
      </Typography>
      <Typography variant="body2">
        {video.artist}
      </Typography>
    </CardContent>
    <CardActions>
      <ReactPlayer url={video.url} />
    </CardActions>
  </React.Fragment>
);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

// Early test code
// export default function VideoplayerCard() {
//   return(
//     <div>
//       Hello World!
//     </div>
//   )
// }
