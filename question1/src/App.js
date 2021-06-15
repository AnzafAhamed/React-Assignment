import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const albums = data;
    setAlbums(albums);
    console.log(albums);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Album</h1>
      {albums.map((album) => (
        <p><a
          href={album.title}>
          {"Album" + album.id}
          
        </a></p>
      ))}
    </div>
  );
}

export default App;
