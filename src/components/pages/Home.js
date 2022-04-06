import React from 'react';
import '../../App.css';
import backgroundVideo from './video.mp4'

export default function Home() {
  return (
  <div className='home'>
    
    <h1>Witamy na stronie najlepszej wypożyczalni w Polsce</h1>
    <video autoPlay loop muted id='video'>
      
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
        Twoja przeglądarka nie wspiera wyświetlanej zawartośći.
      </video>
  </div>);
}