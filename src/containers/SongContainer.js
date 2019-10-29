import React, {Component} from 'react'
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs.feed.entry}))
      .catch(err => console.error);
  }

  render(){
    return(
      <div>
        <h1>The Top 20</h1>
        <SongSelector songs={this.state.songs}/>
      </div>
    )
  }


}






export default SongContainer
