import React from 'react';
import SongDetail from './SongDetail.js';

  const SongSelector = (props) => {
    const options = props.songs.map((song, index) => {
      return (
      <option value={index} key={index} >{song['im:name'].label}</option>
        )
    })




    return (
      <select id="song-selector">
          <option>Choose a song...</option>
          { options }
        </select>
    )

  }



export default SongSelector;