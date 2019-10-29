import React from 'react'

const SongDetail = (props) => {

return (
    <div className='song-detail'>
      <h3>Song Title: {props.song}</h3>
      <h4>Chart Position: {props.chartPosition}</h4>
      <h4>Artist: {props.artist}</h4>
    </div>
)
}

export default SongDetail;