import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddSongForm({ onAddSong }) {
    const [form, setForm] = useState({
        artist: "",
        title: "",
        url: "",
        message: "",
        user: "",
      });
    
      function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        const newSong = { ...form, id: index }; // 
    onAddSong(newSong);
    setForm({ artist: "", title: "", url: "", message: "", user: "" }); // Reset form
  }
      
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="add-song-form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
        required
          id="filled-required"
          label="Your name"
          type="input"
          variant="filled"
        />
        
        <TextField
          id="filled-required"
          label="Song name"
          type="input"
          variant="filled"
        
        />
        <TextField
          id="filled-required"
          label="Artist"
          type="input"
          variant="filled"
          
        />
        <TextField
          required
          id="filled-required"
          label="YouTube URL"
          type="input"
          variant="filled"
          
        />
        <TextField
          id="filled-required"
          label="Your message:"
          type="input"
          variant="filled"

        />
      </div>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Song
      </Button>

    </Box>
  );
}