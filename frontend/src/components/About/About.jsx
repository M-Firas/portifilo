import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImg31.svg'



export const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='pre--title'>About</h1>
      <p className='title'>More About Me!</p>
     <div className='container'>
           <div className='about--left'>
              <img src={aboutImg} alt=""   />
           </div>
           <div className='about--right'>
              <h1>What I <span>Do?</span></h1>
              <p>A Front-end developer with a passion for crafting engaging user interfaces and seamless web experiences. I bring creativity and technical expertise to transform design concepts into interactive, user-friendly websites.</p>
              <button><a href='#projects'>My Projects</a></button>
           </div>
     </div>
    </div>
  )
}
