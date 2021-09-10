import React from 'react';
import './Album.css';

interface AlbumProps{
    nameAlbum: string,
    urlAlbum: string,
    urlImgAlbum: string,
    explicit?:boolean,
    nameArtist: string,
}

export const Album: React.FC<AlbumProps> = (props)=>{

    let className = "explicitIcon";

    if(props.explicit==false){
        className = 'hidden';
    }

    return <a className="Album" href={props.urlAlbum}>
        <img className= "Album_img" src={props.urlImgAlbum}></img>
        <h4 className= "Album_name">{props.nameAlbum}</h4>
        <div className= "Album_info">
            <img className= {className} src="https://www.seekpng.com/png/full/206-2068701_explicit-icon-facebook-icon-ash-color-symbols-gif.png"></img>
            <h5 className= "Album_artist"><span>Album·</span>{props.nameArtist}</h5>
        </div>
    </a>;
}
