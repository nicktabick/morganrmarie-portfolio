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
          <b>Hi again,</b> Morgan here&nbsp;&nbsp;💭 Thanks for checking out my website! I created it using <span className="pink-link">React</span>, <span className="pink-link">Gatsby</span>, <span className="pink-link">Netlify</span>,
          and <span className="pink-link">Contentful</span>.    
          <br></br><br></br>
          So, a bit about me. I'm a 20 year old software engineering student at Loyola and DevOps intern
          at CCC. My main focus of work is fullstack development. 
          <br></br><br></br>
          If you'd like to chat, check out my <a href="https://www.instagram.com/morgan.codes" className="instagram-link-href"><span className="pink-link">Instagram</span></a> blog. This is where I'm 
          sharing my journey as a software engineer & as a woman in technology. 
          <br></br><br></br>
          <b>Let's make the world a better place with technology.</b>
        </div>
      </Layout>
    </div>
  )
}

export default About
