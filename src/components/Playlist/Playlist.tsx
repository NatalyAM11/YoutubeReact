import React from 'react';
import './Playlist.css';

interface PlaylistProps{
    namePlaylist: string,
    urlPlaylist: string,
    urlImgPlay: string,
    songs: string
}

export const Playlist: React.FC<PlaylistProps> = (props)=>{

      return <a className="Playlist" href={props.urlPlaylist}>
          <img className= "Playlist_img" src={props.urlImgPlay}></img>
          <h4 className= "Playlist_name">{props.namePlaylist}</h4>
          <h5 className= "Playlist_songs">{props.songs}</h5>
      </a>;
}