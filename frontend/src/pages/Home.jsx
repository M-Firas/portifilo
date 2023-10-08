import React from 'react'
//CSS 
import './Home.css'
import 'react-multi-carousel/lib/styles.css';
//Components
import { Landing } from '../components/Landing/Landing'
import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'
import { Projects } from '../components/Projects/Projects';
import { Contact } from '../components/Contact/Contact';


export const Home = () => {
  return (
   <div>
     <Landing />
     <About />
    <div className='skills--home'>
    <Skills />
    </div>
     <Projects />
     <Contact />
   </div>
  )
}
