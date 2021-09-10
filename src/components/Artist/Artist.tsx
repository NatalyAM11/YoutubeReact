import React from 'react';
import './Artist.css';

interface ArtistProps{
    name: string,
    urlChannel: string,
    urlImage: string,
    subs: string
}


export const Artist: React.FC<ArtistProps> = (props)=>{

      return <a className="Artist" href={props.urlChannel}>
          <img className= "Artist_img" src={props.urlImage}></img>
          <h4 className= "Artist_name">{props.name}</h4>
          <h4 className= "Artist_subs">{props.subs}<span>K subscribers</span></h4>
      </a>;
}
