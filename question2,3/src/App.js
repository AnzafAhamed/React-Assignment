import './App.css';
import { Component } from "react";
import axios from 'axios';


class Question2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      clickedAlbum: [],
      imglinks: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        const getData = response.data;
        this.setState({ albums: getData });
        console.log(this.state.albums);
      })
  }

  getAlbumId(id) {
    console.log(id);
    axios.get('https://jsonplaceholder.typicode.com/photos/')
      .then((response) => {
        const getData = response.data;
        const allAlbums = getData.filter((item) => item.albumId === id);
        this.setState({ clickedAlbum: allAlbums });
        const imglink = allAlbums.filter((item) => item.thumbnailUrl.includes("http"));
        this.setState({ imglinks: imglink });
        console.log(this.state.clickedAlbum);
        console.log(this.state.imglinks);
      })
  }

  render() {
    var renderedOutput = this.state.albums.map((album) => (
      <div className="col" key={album.id} >
        <div>
          <p onClick={() => this.getAlbumId(album.albumId)}>
            <a href={album.url} target="_blank">{"Album " + album.id + " - " + album.title}</a>
          </p>
          <img src={album.thumbnailUrl} alt="imagen" />
        </div>
      </div>
    ));

    return (
      <div>
        <div><h1>Albums</h1></div>
        {renderedOutput}
      </div>
    );
  }
}
export default Question2;
