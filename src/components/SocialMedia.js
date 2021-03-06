import React from 'react'
import github from '../assets/social-media/white-gh.png'
import linkedin from '../assets/social-media/linkedin.png'
import medium from '../assets/social-media/medium.png'

const SocialMedia = () => {
  return(
    <div className='social-media container'>
      <div className='row justify-content-center'>
        <a href='https://github.com/amandena'><img src={github} alt="github" width='25'/></a>
        <a href='https://www.linkedin.com/in/amandena/'><img src={linkedin} alt="linkedin" width='25'/></a>
        <a href='https://amanda-m-johnson.medium.com/'><img src={medium} className='medium' alt="medium" width='25' /></a>
      </div>
    </div>
  )
}

export default SocialMedia