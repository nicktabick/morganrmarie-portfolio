import React from 'react'
import Layout from '../components/layout'
import '../styles/about.css'
import armsImage from '../images/arms.png'

const About = () => {
  return (
    <div>
      <Layout>
        <div className="left">
          <img src={armsImage} className="arms" alt="pic"></img>
        </div>
        <div className="right">
        <br></br><br></br>
          <b>Hi again,</b> Morgan here.&nbsp;&nbsp;💭 Thanks for checking out my website! I created it using React, Gatsby, Netlify,
          and Contentful.    
          <br></br><br></br>
          What am I doing now? I'm currently studying Software Engineering in Chicago.
          I'll be graduating in May!
          <br></br><br></br>
          I'm currently a DevOps intern.
          <br></br><br></br>
          <b>Let's make the world a better place with technology.</b>&nbsp;&nbsp;🧠
        </div>
      </Layout>
    </div>
  )
}

export default About
