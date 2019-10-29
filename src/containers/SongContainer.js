import React, {Component} from 'react'

class SongContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs}))
      .catch(err => console.error);
  }

  render(){
    return(
      <div>
        <h1>The Top 20</h1>
      </div>
    )
  }


}






export default SongContainer
