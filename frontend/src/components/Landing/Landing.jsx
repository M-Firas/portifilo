import React from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter';
//CSS
import './Landing.css'
//assets
import  Video from '../../assets/landingVideo.mp4'

export const Landing = () => {

 const [text] = useTypewriter({
  words: ['Firas.' , 'A Front-End Develper.'],
  loop: {},
  delay: 1000,

 })
  return (
    <div className='landing' id='home'>
      <div className='overlay'></div>
        <video src={Video} autoPlay loop ></video>

        <div className='content'>
        <h1>Welcome.</h1>
        
           <div className='content--title'>
            <h2>
              I'm {' '} 
              <span>
                {text}
              </span>
              <span>
                <Cursor />
              </span>
            </h2>
           </div>
          
           
           <button><a href="#about">More About Me!</a></button>
        </div>

    </div>
  )
}
