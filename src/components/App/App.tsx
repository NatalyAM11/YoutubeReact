import React from 'react';
import './App.css';
import { Link } from '../Link/Link';
import { Artist } from '../Artist/Artist';
import { Album } from '../Album/Album';
import { Playlist } from '../Playlist/Playlist';


function App() {
  return (
    <div>
      <nav className="App__nav">
        <a className='App__aDiv' >
          <img className='App__navLogo' src='https://music.youtube.com/img/on_platform_logo_dark.svg'></img>
        </a>

        <div className="App__optionsDiv">
          <Link
                text="Home"
                url="https://www.youtube.com/"
              />
            <Link
                text="Explore"
                url="https://www.youtube.com/"
              />
            <Link
                text="Library"
                url="https://www.youtube.com/"
              />
              <input className="App_navInput"placeholder="Search"></input>
            </div>
          <a  className='App__aDiv'>
            <img className='App__navProfilePic' src='https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'></img>
          </a>
      </nav>

      <section className="App_favorites">
        <h2>Your favorites</h2>
          <div className="App_favoritesItems">
            <Artist
              name="The Mars Volta"
              urlImage="https://lastfm.freetls.fastly.net/i/u/770x0/113aab20d7fdb8c991468bca9c8e6d79.jpg"
              urlChannel="https://www.youtube.com/channel/UC8I6kOvPYaYZiFQWfbnSFyQ"
              subs="78"
            />
            <Artist
              name="mitski mitski"
              urlImage="https://indierocks.b-cdn.net/wp-content/uploads/2018/08/mitski-be-the-cowboy.jpg"
              urlChannel="https://www.youtube.com/channel/UC-GjYlrAWIHgwNDnbFHZ77g"
              subs="15.6"
            />
            <Artist
              name="BTS"
              urlImage="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://btsspain.es/wp-content/uploads/2021/04/3bfd920c0f854cad80e21e29b642bd71511.jpg"
              urlChannel="https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ"
              subs="45.6"
            />
            <Artist
              name="MARINA"
              urlImage="https://i2.wp.com/plus.cusica.com/wp-content/uploads/2021/04/marina-ptp.jpg?fit=2048%2C2048&ssl=1"
              urlChannel="https://www.youtube.com/channel/UCO_hWjivU900eBRkSQNtlAw"
              subs="8.6"
            />
            <Album
              nameAlbum="TREASURE EP.3"
              nameArtist="Ateez"
              urlImgAlbum="https://ih1.redbubble.net/image.1120927670.6670/flat,750x1000,075,f.jpg"
              urlAlbum="https://www.youtube.com/watch?v=X8kMZFSWskI&list=OLAK5uy_nN6ToczJSrgaKwaWT3jyvNgedNcs2D94Y&index=2"
              explicit={false}
            />
            <Album
              nameAlbum="Hot Pink"
              nameArtist="Doja cat"
              urlImgAlbum="https://mor.bo/wp-content/uploads/2019/11/3544d120c0509259afedf3de26c1562d-1000x1000x1.jpg"
              urlAlbum="https://www.youtube.com/watch?v=X8kMZFSWskI&list=OLAK5uy_nN6ToczJSrgaKwaWT3jyvNgedNcs2D94Y&index=2" 
            />
          </div>
      </section>
    
      <section className="App_similar">
      <div className="App_similarTitle">
          <img className="App_similarPic" src='https://yt3.ggpht.com/Y07VsfW3l3py1_IWotu10hBdAPcLghyU8gz1mpogmj61rrgt3Al_CDHX1h2oZPSsKEC-NtIrgg=s900-c-k-c0x00ffffff-no-rj'></img>
          <div className="App_similarTitleDiv">
            <h4 className="App_similarMiniTitle">SIMILAR TO</h4>
            <h2 className="App_similarArtist">Måneskin</h2>
          </div>
        </div>

        <div className="App_similarItems">
          <Playlist
                namePlaylist="Mix: Aeiko - Grave of the Fireflies [Chill Hop/Lo-Fi]"
                urlImgPlay="https://64.media.tumblr.com/fe8ac28163cb1b5fd0aad88f6bf90f4b/tumblr_p7b18oVqP01ravz9xo1_1280.png"
                urlPlaylist="https://www.youtube.com/watch?v=J_qc4zZ8cwk&list=RDJ_qc4zZ8cwk&start_radio=1"
                songs="The Fugees, L.V., Coolio y muchos más"
          />
          <Artist
                name="5SOS"
                urlImage="https://img.europapress.es/fotoweb/fotonoticia_20200221151149_1200.jpg"
                urlChannel="https://www.youtube.com/5sos"
                subs="4.6"
          />
          <Artist
                name="Miley Cyrus"
                urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93qN6BDFF2lZd76npcZyTEvp_Ctsk8tRM9rymyam5STvONa0NKOBgi573MKtK32WqnSw&usqp=CAU"
                urlChannel="https://www.youtube.com/c/MileyCyrus"
                subs="15.6"
          />
          <Artist
                name="P!NK"
                urlImage="https://yt3.ggpht.com/ytc/AKedOLSeo-qQxcHXSmVTSyT62xw9ApigvtbKSkMkUPpMFg=s900-c-k-c0x00ffffff-no-rj"
                urlChannel="https://www.youtube.com/channel/UCE5yTn9ljzSnC_oMp9Jnckg"
                subs="11"
          />
          <Album
                nameAlbum="Chromatica"
                nameArtist="Lady Gaga"
                urlImgAlbum="https://images-na.ssl-images-amazon.com/images/I/81Le2R1yAgL._SL1400_.jpg"
                urlAlbum="https://www.youtube.com/playlist?list=OLAK5uy_nNjrLf4z-kLhp25BGq-zN0HdgNQBi4qCk"                
            />
         <Playlist
               namePlaylist="Mix Mägo de Oz"
               urlImgPlay="https://i.scdn.co/image/d36c74c074d58d798271b09927332de72614514d"
               urlPlaylist="https://www.youtube.com/watch?v=A-JIjV7pKC8&list=RDA-JIjV7pKC8&start_radio=1"
               songs="Mägo de Oz, Héroes del Silencio, Rata Blanca y muchos más"
         />                   
        </div>
      </section>

    </div>
  );
}

export default App;
