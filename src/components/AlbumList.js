import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// services
import axios from 'axios';

// components
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };

    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {
          this.renderAlbums()
        }
      </ScrollView>
    );
  }
}

export default AlbumList;
