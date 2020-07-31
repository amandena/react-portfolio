import React from 'react'
import adobe from '../assets/skills/adobe-icon.png'
import github from '../assets/skills/github.png'
import css from '../assets/skills/css3.png'
import html from '../assets/skills/html5.png'
import jquery from '../assets/skills/jquery.png'
import js from '../assets/skills/js.png'
import react from '../assets/skills/react-512.webp'
import redux from '../assets/skills/redux-283024.png'
import ruby from '../assets/skills/ruby.png'
import rails from '../assets/skills/rails-2-1175112.png'
import sql from '../assets/skills/sql.png'

const About = () => {
  return(
    <div className='about'>
      <p>Hi! I'm Amanda.</p>

      <p>I've been a barista, dog walker, fitness influencer, graphic designer, and managed a successful physical therapy company. After falling in love with coding, I now create applications for the web and am looking for a new full time role as a Full Stack Software Engineer.</p>
      
      <p>I can be found typing away at my favorite coffee shop, walking my dog around the block, or you can just drop me a line <strong>here</strong>.</p>

      <h2>Skills</h2>
      <h3>Work smarter, not harder</h3>

      <div className='tech-stack'>
          <img src={adobe} title='Adobe Creative Suite' alt="adobe creative suite" width='70'/>
          <img src={github} title='GitHub' alt="github" width='75'/>
          <img src={css} title='CSS3' alt="css" width='65'/>
          <img src={html} title='HTML5' alt="html" width='67'/>
          <img src={jquery} title='jQuery' alt="jquery" width='80'/>
          <img src={js} title='JavaScript' alt="javascript" width='70'/>
          <img src={react} title='React' alt="react" width='80'/>
          <img src={redux} title='Redux' alt="redux" width='70'/>
          <img src={ruby} title='Ruby' alt="ruby" width='75'/>
          <img src={rails} title='Ruby on Rails' alt="rails" width='70'/>
          <img src={sql} title='SQL' alt="sql" width='70'/>
      </div>
    </div>
  )
}

export default About

// <img src={js} alt='' width='40'/>