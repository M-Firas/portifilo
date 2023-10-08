import React from 'react'
//CSS
import './Skills.css'
// React Multi Carousel 
import Carousel from "react-multi-carousel";

//icons 
import reactIcon from '../../assets/react.svg'
import jsIcon from '../../assets/javascript.svg'
import htmlIcon from '../../assets/html.svg'
import cssIcon from '../../assets/css.svg'
import figmaIcon from '../../assets/figma.svg'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='skills' id='skills'>
        <h1 className='pre--title'>Skills</h1>
        <p className='title'>Skills and Technologies</p>
            
             <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1000}  containerClass='skill--list' >
              <div>
              <img src={htmlIcon} alt="" />
              <p>HTML</p>
              </div>

              <div>
                <img src={cssIcon} alt="" />
                <p>CSS</p>
              </div>
              <div>
              <img src={jsIcon} alt="" />
              <p>JavaScript</p>
              </div>
              <div>
                <img src={reactIcon} alt="" />
                <p>React Js</p>
              </div>
              <div>
                <img src={figmaIcon} alt="" />
                <p>Figma</p>
              </div>
             </Carousel>
             
    </div>
  
    
  )
}
